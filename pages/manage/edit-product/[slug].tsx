import { NextPageAuth } from '@/src/shared/types/auth.types';
import EditProduct from '@/src/components/screens/admin/product/edit-product/EditProduct';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ProductServices } from '@/src/services/product.services';
import { IProduct } from '@/src/interfaces/product.interface';
import { ProductPageProps } from '@/pages/product/[slug]';
import { useQuery } from '@tanstack/react-query';

const AdminProductEdit: NextPageAuth<ProductPageProps> = ({ product }) => {
    const {  isLoading, error }: any = useQuery<IProduct[]>(['change product'], () =>
        ProductServices.getAllProducts()
    );

    if (error) {
        console.error('Ошибка при получении данных о продуктах:', error.message);
        return <p>Произошла ошибка при загрузке данных о продуктах</p>;
    }

    if (isLoading) {
        return <p>Загрузка...</p>;
    }

    return <EditProduct
        //@ts-ignore
        product={product} />;
};

AdminProductEdit.isOnlyAdmin = true;

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const products = await ProductServices.getAllProducts();
        const paths = products.map((product: IProduct) => ({
            params: { slug: product.slug },
        }));
        return { paths, fallback: 'blocking' };
    } catch (e: any) {
        console.error('Ошибка при получении данных о продуктах для статических путей:', e.message);
        return { paths: [], fallback: 'blocking' };
    }
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
    try {
        const products = await ProductServices.getAllProducts();
        const product = products.find((product: IProduct) => product.slug === params?.slug) || ({} as IProduct);
        return {
            props: {
                product,
            },
        };
    } catch (e: any) {
        console.error('Ошибка при получении данных о продукте:', e.message);
        return {
            notFound: true,
        };
    }
};

export default AdminProductEdit;

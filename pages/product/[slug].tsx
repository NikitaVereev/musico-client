import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { IProduct } from '@/src/components/interfaces/product.interface';
import { useQuery } from '@tanstack/react-query';
import { ProductServices } from '@/src/components/sercices/product.services';
import Product from '@/src/components/screens/product/Product';

export interface ProductPageProps {
    product: IProduct;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
    const { data: products, isLoading }: any = useQuery<IProduct[]>(['all products'], () =>
        ProductServices.getAllProducts()
    );

    return <Product product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await ProductServices.getAllProducts();
    const paths = products.map((product: IProduct) => {
        return {
            params: { slug: product.slug },
        };
    });
    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
    const products = await ProductServices.getAllProducts();
    const product = products.find((product: IProduct) => product.slug === params?.slug) || ({} as IProduct);
    return {
        props: {
            product,
        },
    };
};

export default ProductPage;

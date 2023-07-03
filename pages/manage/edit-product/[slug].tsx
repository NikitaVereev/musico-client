import {NextPageAuth} from "@/src/shared/types/auth.types";
import EditProduct from "@/src/components/screens/admin/product/edit-product/EditProduct";
import {GetStaticPaths, GetStaticProps} from "next";
import {ProductServices} from "@/src/services/product.services";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductPageProps} from "@/pages/product/[slug]";
import {useQuery} from "@tanstack/react-query";

const AdminProductEdit: NextPageAuth<ProductPageProps> = ({product}) => {
    const { data: products, isLoading }: any = useQuery<IProduct[]>(['change product'], () =>
        ProductServices.getAllProducts()
    );
    return (
        <EditProduct
            //@ts-ignore
            product={product} />
    );
}

AdminProductEdit.isOnlyAdmin = true

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

export default AdminProductEdit;
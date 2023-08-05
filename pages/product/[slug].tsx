import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { IProduct } from '@/src/interfaces/product.interface';
import { useQuery } from '@tanstack/react-query';

import Product from '@/src/components/screens/product/Product';
import {ProductServices} from "@/src/services/product.services";


export interface ProductPageProps {
    product: IProduct;

}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
    return <Product product={product} />;
};

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

export const getStaticProps: GetStaticProps<ProductPageProps> = async (context) => {
    const {
        //@ts-ignore
        slug } = context.params;
    const product = await ProductServices.getProductBySlug(slug);
    return {
        props: {
            product,
        },
    };
};

export default ProductPage;

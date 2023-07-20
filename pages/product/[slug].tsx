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
    const products = await ProductServices.getAllProducts();
    console.log('ssgdsg', products)
    const paths = products.map((product: IProduct) => {
        return {
            params: { slug: product.slug },
        };
    });
    console.log(paths, products, 'sdsd')
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

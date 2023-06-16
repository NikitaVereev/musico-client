import { FC } from 'react';
import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/components/interfaces/product.interface";
import {ProductServices} from "@/src/components/sercices/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const AccessoriesGuitarPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['all products'], () => ProductServices.getOnlyCategories('Аксессуары для гитары'))
    if(isLoading)  return <div>Загрузка</div>
    console.log(products)
    return (
        <CatalogWrapper products={products} isLoading={isLoading} />
    );
}

export default AccessoriesGuitarPage;
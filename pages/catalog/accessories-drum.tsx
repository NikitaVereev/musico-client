import { FC } from 'react';
import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/components/types/product.interface";
import {ProductServices} from "@/src/components/sercices/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const AccessoriesDrumPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['all products'], () =>
        ProductServices.getAllProducts())
    if(isLoading)  return <div>Загрузка</div>
    const filteredData = products.filter((item: {subtype: string}) => item.subtype === 'Акустическая')
    return (
        <CatalogWrapper products={filteredData} isLoading={isLoading} />
    );
}

export default AccessoriesDrumPage;
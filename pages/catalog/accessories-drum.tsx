import { FC } from 'react';
import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/components/types/product.interface";
import {ProductServices} from "@/src/components/sercices/product.services";
import CatalogItem from "@/src/components/screens/catalog/CatalogItem";

const AccessoriesDrumPage: NextPage = () => {
    const {data, isLoading}: any = useQuery<IProduct[]>(['all products'], () =>
        ProductServices.getAllProducts())
    if(isLoading)  return <div>Загрузка</div>
    const filteredData = data.filter(item => item.subType === 'Акустическая')
    return (
        <CatalogItem data={filteredData} isLoading={isLoading} />
    );
}

export default AccessoriesDrumPage;
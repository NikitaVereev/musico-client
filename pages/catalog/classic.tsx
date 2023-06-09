import { FC } from 'react';
import {NextPage} from "next";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/components/types/product.interface";
import {ProductServices} from "@/src/components/sercices/product.services";

const ClassicPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['all products'], () => ProductServices.getAllProducts())
    if(isLoading)  return <div>Загрузка</div>
    const filteredData = products.filter((item: {subType: string}) => item.subType === 'Классическая')
    return (
        <CatalogWrapper products={filteredData} isLoading={isLoading} />
    );
}

export default ClassicPage;
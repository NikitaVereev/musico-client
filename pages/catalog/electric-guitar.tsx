import { FC } from 'react';
import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/components/types/product.interface";
import {ProductServices} from "@/src/components/sercices/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const ElectricGuitarPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['all products'], () => ProductServices.getAllProducts())
    if(isLoading)  return <div>Загрузка</div>
    const filteredData = products.filter(item => item.subType === 'Электрогитара')
    console.log(products)
    return (
        <CatalogWrapper products={filteredData} isLoading={isLoading} />
    );
}

export default ElectricGuitarPage;
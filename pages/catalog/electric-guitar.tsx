import { FC } from 'react';
import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const ElectricGuitarPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['all products'], () => ProductServices.getOnlyCategories('Электрогитара'))
    if(isLoading)  return <div>Загрузка</div>
    console.log(products)
    return (
        <CatalogWrapper products={products} isLoading={isLoading} />
    );
}

export default ElectricGuitarPage;
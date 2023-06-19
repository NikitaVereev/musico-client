import { FC } from 'react';
import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";

import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import {ProductServices} from "@/src/services/product.services";

const KlavaPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['all products'], () => ProductServices.getOnlyCategories('Клавишная'))
    if(isLoading)  return <div>Загрузка</div>
    console.log(products)
    return (
        <CatalogWrapper products={products} isLoading={isLoading} />
    );
}

export default KlavaPage;
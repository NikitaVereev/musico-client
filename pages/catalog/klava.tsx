import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";

import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import {ProductServices} from "@/src/services/product.services";
import Banner from "@/src/components/ui/banner/Banner";

const KlavaPage: NextPage = () => {
    const subType = 'keyboard'
    const {data: products, isLoading, isError}: any = useQuery<IProduct[]>(['keyboards'], () => ProductServices.getOnlyCategories(subType,'Клавишная'))
    const heading = 'Клавишные'

    if(isLoading)  return <div  className='loader'>Загрузка</div>
    if(isError) return <Banner className='wrapper'><h1>Проблемы на серверной стороне, мы уже разбираемся с этим</h1></Banner>
    console.log(products)
    return (
        <CatalogWrapper products={products}
                        subType={subType}
            heading={heading} />
    );
}

export default KlavaPage;
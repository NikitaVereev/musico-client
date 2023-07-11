import {NextPage} from "next";

import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";
import Banner from "@/src/components/ui/banner/Banner";

const AcousticPage: NextPage = () => {
    const {data: products, isLoading, isError}: any = useQuery<IProduct[]>(['acoustic'], () => ProductServices.getOnlyCategories('Акустическая'))
    const heading = 'Акустические гитары'

    if(isLoading)  return <div className='loader'>Загрузка</div>
    if(isError) return <Banner className='wrapper'><h1>Проблемы на серверной стороне, мы уже разбираемся с этим</h1></Banner>
    console.log(products)
    return (
        <CatalogWrapper products={products}
                        heading={heading} />
    );
}

export default AcousticPage;
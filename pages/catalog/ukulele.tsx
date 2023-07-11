import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import Banner from "@/src/components/ui/banner/Banner";

const UkulelePage: NextPage = () => {
    const {data: products, isLoading, isError, error}: any = useQuery<IProduct[]>(['ukulele'], () => ProductServices.getOnlyCategories('Укулеле'))
    const heading = 'Укулеле'

    if(isLoading)  return <div className='loader'>Загрузка</div>
    if(isError) return <Banner className='wrapper'><h1>Проблемы на серверной стороне, мы уже разбираемся с этим</h1></Banner>
    console.log(products)
    return (
        <CatalogWrapper products={products}
            heading={heading} />
    );
}

export default UkulelePage;
import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {ProductServices} from "@/src/services/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import Banner from "@/src/components/ui/banner/Banner";

const ElectricGuitarPage: NextPage = () => {
    const {data: products, isLoading, isError}: any = useQuery(['electric'], () => ProductServices.getOnlyCategories('Электрогитара'))
    const heading = 'Электрогитары'

    if(isLoading)  return <div  className='loader'></div>
    if(isError) return <Banner className='wrapper'><h1>Проблемы на серверной стороне, мы уже разбираемся с этим</h1></Banner>
    console.log(products)
    return (
        <CatalogWrapper products={products}
            heading={heading} />
    );
}

export default ElectricGuitarPage;
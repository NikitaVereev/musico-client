import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import Banner from "@/src/components/ui/banner/Banner";

const StringsPage: NextPage = () => {
    const subType = 'strings'
    const {data: products, isLoading, isError}: any = useQuery<IProduct[]>(['strings'], () => ProductServices.getOnlyCategories(subType,'Струна'))
    const heading = 'Струны'

    if(isLoading)  return <div  className='loader'>Загрузка</div>
    if(isError) return <Banner className='wrapper'><h1>Проблемы на серверной стороне, мы уже разбираемся с этим</h1></Banner>
    console.log(products)
    return (
        <CatalogWrapper products={products}
                        subType={subType}
            heading={heading} />
    );
}

export default StringsPage;
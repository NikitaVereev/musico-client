import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import Banner from "@/src/components/ui/banner/Banner";

const AccessoriesDrumPage: NextPage = () => {
    const subType = 'accessories-drum'
    const {data: products, isLoading, isError}: any = useQuery<IProduct[]>(['accessories drum'], () => ProductServices.getOnlyCategories(subType,'Аксессуары для ударных'))
    const heading = 'Аксессуары для ударных'

    if(isLoading)  return <div  className='loader'>Загрузка</div>
    if(isError) return <Banner className='wrapper'><h1>Проблемы на серверной стороне, мы уже разбираемся с этим</h1></Banner>
    console.log(products)
    return (
        <CatalogWrapper products={products}
                        subType={subType}
                        heading={heading}

                        />
    );
}

export default AccessoriesDrumPage;
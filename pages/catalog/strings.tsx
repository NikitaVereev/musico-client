import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const StringsPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['strings'], () => ProductServices.getOnlyCategories('Струна'))
    const heading = 'Струны'

    if(isLoading)  return <div  className='loader'>Загрузка</div>
    console.log(products)
    return (
        <CatalogWrapper products={products}
            heading={heading} />
    );
}

export default StringsPage;
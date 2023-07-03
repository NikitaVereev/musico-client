import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const UkulelePage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['ukulele'], () => ProductServices.getOnlyCategories('Укулеле'))
    const heading = 'Укулеле'

    if(isLoading)  return <div className='loader'>Загрузка</div>
    console.log(products)
    return (
        <CatalogWrapper products={products}
            heading={heading} />
    );
}

export default UkulelePage;
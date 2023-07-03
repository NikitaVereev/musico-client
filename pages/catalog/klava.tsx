import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";

import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import {ProductServices} from "@/src/services/product.services";

const KlavaPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['keyboards'], () => ProductServices.getOnlyCategories('Клавишная'))
    const heading = 'Клавишные'

    if(isLoading)  return <div  className='loader'>Загрузка</div>
    console.log(products)
    return (
        <CatalogWrapper products={products}
            heading={heading} />
    );
}

export default KlavaPage;
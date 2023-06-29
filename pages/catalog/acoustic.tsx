import {NextPage} from "next";

import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";

const AcousticPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['acoustic'], () => ProductServices.getOnlyCategories('Акустическая'))
    if(isLoading)  return <div className='loader'>Загрузка</div>
    console.log(products)
    return (
        <CatalogWrapper products={products}
                        //@ts-ignore
                        isLoading={isLoading} />
    );
}

export default AcousticPage;
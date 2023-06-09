
import {NextPage} from "next";

import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/components/types/product.interface";
import {ProductServices} from "@/src/components/sercices/product.services";

const AcousticPage: NextPage = () => {
    const {data:products, isLoading}: any = useQuery<IProduct[]>(['all products'], () => ProductServices.getAllProducts())
    if(isLoading)  return <div className='loading'>Загрузка</div>
    const filteredData = products.filter(item => item.subType === 'Акустическая')
    console.log(products)
    return (
        <CatalogWrapper products={filteredData} isLoading={isLoading} />
    );
}

export default AcousticPage;
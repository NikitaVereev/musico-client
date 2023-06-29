import {NextPage} from "next";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";
import {useQuery} from "@tanstack/react-query";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductServices} from "@/src/services/product.services";

const ClassicPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery<IProduct[]>(['classic'], () => ProductServices.getOnlyCategories('Классическая'))
    if(isLoading)  return <div className='loader'>Загрузка</div>
    console.log(products)
    return (
        <CatalogWrapper products={products}
            //@ts-ignore
                        isLoading={isLoading} />
    );
}

export default ClassicPage;
import {NextPage} from "next";
import {useQuery} from "@tanstack/react-query";
import {ProductServices} from "@/src/services/product.services";
import CatalogWrapper from "@/src/components/screens/catalog/CatalogWrapper";

const ElectricGuitarPage: NextPage = () => {
    const {data: products, isLoading}: any = useQuery(['electric'], () => ProductServices.getOnlyCategories('Электрогитара'))
    const heading = 'Электрогитары'

    if(isLoading)  return <div  className='loader'>Загрузка</div>
    console.log(products)
    return (
        <CatalogWrapper products={products}
            heading={heading} />
    );
}

export default ElectricGuitarPage;
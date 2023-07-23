
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ProductServices} from "@/src/services/product.services";
import {IProduct} from "@/src/interfaces/product.interface";
import {ProductPageProps} from "@/pages/product/[slug]";
import {useQuery} from "@tanstack/react-query";

const SearchPage: NextPage = () => {
    const searchItem = localStorage.getItem('search')

    const {data: products, isLoading, isError}: any = useQuery<IProduct[]>(['searched products'], () => ProductServices.getSearchedProduct(
        //@ts-ignore
        searchItem))

    console.log(products)
    return (
        <div>
            {isLoading ? <div className='loader'></div> : isError ? <div>Ошибка</div> : products.map((item: IProduct) => (
                <h1 key={item.id}>item.title</h1>
            ))}
        </div>
    );
}



export default SearchPage;
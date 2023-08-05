import {Dispatch, FC, SetStateAction} from 'react';
import styles from './SearchList.module.scss'
import Link from "next/link";
import {IProduct} from "@/src/interfaces/product.interface";

const SearchList: FC<{products: IProduct[]; setSearchTerm: Dispatch<SetStateAction<string>> }> = ({products, setSearchTerm}) => {
    return (
        <div className={styles.list}>
            {Boolean(products) && (
                products.map((product) => (
                    <Link key={product.id} onClick={() => setSearchTerm('')} href={`/product/${product.slug}`}>
                        <span>{product.title}</span>
                    </Link>
                ))
            )}
        </div>
    );
}

export default SearchList;
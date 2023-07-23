import { FC } from 'react';
import styles from './SearchList.module.scss'
import Link from "next/link";
import {IProduct} from "@/src/interfaces/product.interface";

const SearchList: FC<{products: IProduct[] }> = ({products}) => {
    return (
        <div className={styles.list}>
            {Boolean(products) && (
                products.map((product) => (
                    <Link key={product.id} href={`/product/${product.slug}`}>
                        <span>{product.title}</span>
                    </Link>
                ))
            )}
        </div>
    );
}

export default SearchList;
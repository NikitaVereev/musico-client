import React, { FC} from 'react';
import {IProduct} from "@/src/interfaces/product.interface";
import styles from './Search.module.scss'
import {useTypedSelector} from "@/src/hooks/useTypedSelector";
import CatalogItem from "@/src/components/screens/catalog/catalog-item/CatalogItem";
import cn from "classnames";

const SearchPageInfo: FC<{ products: IProduct[];  }> = ({ products }) => {
  const state = useTypedSelector((state) => state.search.search);
  return (
    <div className={cn(styles.list, 'wrapper')} >
      <h1>Поиск</h1>
      {Boolean(products) && (
        state ? state.map((product: any) => (
          <section className={styles.wrapper} key={product.id}>
            <CatalogItem key={product.id} product={product} />

          </section>
        )) : []
      )}
    </div>
  );
};

export default SearchPageInfo;
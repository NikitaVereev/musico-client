import { FC } from 'react';
import {catalogList} from "@/src/components/screens/catalog/catalog-list";
import Link from 'next/link'
import cn from 'classnames'
import {IList} from "@/src/components/screens/catalog/catalog-list.interface";
import Image from "next/image";
import styles from './CatalogMain.module.scss'



const CatalogMain: FC = () => {

    return (
        <div className='wrapper'>
            <h1>
                Каталог
            </h1>
            <div className={cn(styles.wrapper, 'wrapper')}>
                {catalogList.map((item:IList) => (
                    <div className={styles.catalogList} key={item.title}>
                        <Link href={`/catalog${item.link}`}></Link>

                        <Image src={item.image} alt={item.title} fill  />

                        <h1>{item.title} </h1>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CatalogMain;
import { FC } from 'react';
import {catalogList} from "@/src/components/screens/catalog/catalog-list";
import Link from 'next/link'
import cn from 'classnames'
import {IList} from "@/src/components/screens/catalog/catalog-list.interface";
import Image from "next/image";
import styles from './CatalogMain.module.scss'



const CatalogMain: FC = () => {

    return (
        <div className='wrapper martinTop'>

            <div className={cn(styles.wrapper, 'wrapper')}>
                {catalogList.map((item:IList) => (
                    <div className={cn(styles.catalogList, 'animate-scaleIn')} key={item.title}>
                        <Link href={`/catalog${item.link}`}></Link>

                        <Image src={item.image} alt={item.title} fill  />

                        <h1 className='text-white text-3xl'>{item.title} </h1>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CatalogMain;
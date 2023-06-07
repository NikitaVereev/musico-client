import { FC } from 'react';
import { products } from '@/product';
import Image from 'next/image';
import styles from './Catalog.module.scss';
import {GoChevronRight} from "react-icons/go";
import Button from "@/src/components/ui/button/Button";
import Aside from "@/src/components/screens/catalog/aside/Aside";
import {useActions} from "@/src/components/hooks/useActions";
import {useQuery} from "@tanstack/react-query";
import {ProductServices} from "@/src/components/sercices/product.services";

const Catalog: FC = () => {
  const {data, isLoading}: any = useQuery(['all products'], () => ProductServices.getAllProducts())

  const {addToCart, removeFromCart} = useActions()
    console.log(data)
  return (
    <div className='wrapper'>
      <h1 className="title">Каталог</h1>
       <div className={styles.grid}>
           <Aside />
           <div className={styles.container}>
               {isLoading ? <div>Загрузка ебать</div> : products.map((product) => (
                   <div key={product._id} className={styles.glass}>
                       <div className={styles.card}>

                           <div className={styles.title}>
                               <h4>{product.type}</h4>
                               <h5>{product.title}</h5>
                           </div>
                           <div className={styles.image}>
                               <Image src={product.image[0]} fill alt={product.title} />
                           </div>
                           <div className={styles.description}>
                               <h3 className={styles.price}>{product.price} р.</h3>
                               <Button onClick={() => addToCart({product, quantity: 1})}><GoChevronRight /></Button>
                           </div>
                       </div>
                   </div>
               ))}
           </div>
       </div>
    </div>
  );
};

export default Catalog;

import { motion } from "framer-motion";
import { mix } from "@popmotion/popcorn";
import ListOrder from "@/src/components/screens/admin/order/list-order/ListOrder";
import styles from './Profile.module.scss'
import Button from "@/src/components/ui/button/Button";
import AdminTable from "@/src/components/ui/admin-table/AdminTable/AdminTable";
import {useState} from "react";
import cn from "classnames";
import Image from "next/image";

//@ts-ignore
 const ContentPlaceholder = ({orders}) => {

     return (<motion.div
         variants={{collapsed: {scale: 0.8}, open: {scale: 1}}}
         transition={{duration: 0.8}}
         className={cn(styles.itemWrapper, "content-placeholder")}
     >
         <div className={cn(styles.itemHeading, styles.item)}>
             <div>Название</div>
             <div>Количество</div>
             <div>Цена</div>
             <div>
                 Изображение
             </div>
         </div>
         {orders.items.length === 0 ? <h2>Заказов нет</h2> : orders.items.map((item: any, index: number) => (
             <div key={item.id} >

                 <div className={styles.item}>
                     <div>{
                         item.product.title}</div>
                     <div>{
                         item.quantity}</div>
                     <div>{
                         item.product.price}</div>
                     <div>
                         <Image src={
                             item.product.fileUrl[0]?.url} width={50} height={50} alt={item.product.title} />
                     </div>
                 </div>

             </div>

         ))}
         <h2>Статус: <span>{orders.status === 'PAYED' && <span>Оплачено</span>}</span></h2>
         <h2>Стоимость: <span>{orders.price} руб.</span></h2>
     </motion.div>)

 };

 export default ContentPlaceholder

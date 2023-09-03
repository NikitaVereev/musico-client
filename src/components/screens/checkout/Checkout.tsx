import {FC, useState} from 'react';
import {useMutation, useQuery} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";
import {useAuth} from "@/src/hooks/useAuth";
import CartItem from "@/src/components/layout/header/cart/cart-item/CartItem";
import {IProduct} from "@/src/interfaces/product.interface";
import Button from '@/src/components/ui/button/Button'
import styles from './Checkout.module.scss'
import {useRouter} from 'next/router'
import cn from "classnames";
import Meta from "@/src/components/utils/meta/Meta";

interface IOrder{
    product: IProduct
    id: string
    quantity: number
}

const Checkout: FC = () => {
    const [isContinue, setIsContinue] = useState(false)
    const {push} = useRouter()

    const {mutate, isLoading} = useMutation({
        mutationFn: (data) => OrderService.createPaymant(
            //@ts-ignore
            data),
        onSuccess: (response: any) =>{
            push(response.data.payment_link)

    }

    })

    const { user } = useAuth();
    const email = user?.email;

    const { data: orders, isLoading: isLoadingPayment } = useQuery( ["single"],() => email ? OrderService.getOrder(email) : null,

    );
    if(isLoading) return <div className='loader'>Загрузка</div>

    const handleClick = () => {
        setIsContinue(true)


        // @ts-ignore
        mutate({

            data: {
                order_id: orders.id,
                customer_phone: user?.phone || "+79048339006",
                customer_email: user?.email,
                products: orders.items.map(
                    //@ts-ignore
                    item => ({
                    sku: item.id,
                    name: item.product.title,
                    price: item.product.price,
                    quantity: item.quantity,
                    tax: {
                        tax_type: 0,
                        tax_sum: "0"
                    },
                    paymentMethod: "1",
                    paymentObject: "1"
                })),
                do: "pay",
                type: "json",
                callbackType: "json",
                urlReturn: "https://musco.store/",
                urlSuccess: "https://musco.store/",
                urlNotification: "https://muscoservicenevoruite.ru/pay/url"
            }
        });
    }


    return (
        <Meta title='Оформление заказа' description='Страница оформления заказа'>
            <div className='wrapper'>
                <h1>Оформление заказа</h1>
                <div className={styles.wrapper}>
                    {isContinue ? <div className={styles.orders}>
                        Ok!)
                    </div> : <div className={styles.orders}>
                        <h2>Корзина</h2>
                        {orders && orders.items.map((item: IOrder) => (
                            <div key={item.id}>
                                <CartItem item={item}/>
                            </div>
                        ))}
                        <div className={styles.price}>
                            <h3>Общая сумма заказа:</h3>
                            <h2>{orders && orders.price} руб.</h2>
                        </div>
                        <Button onClick={() => setIsContinue(true)}>Продолжить</Button>
                    </div>}
                    <div className={styles.orders}>
                        <h2>Итого</h2>

                        <div className={styles.price}>
                            <h3>Товары ({orders && orders.items.length})</h3>
                            <h3>{orders && orders.price} руб.</h3>
                        </div>
                        <div className={styles.price}>
                            <h3>Итого</h3>
                            <h2>{orders && orders.price} руб.</h2>
                        </div>
                        <Button onClick={handleClick} disabled={!isContinue}>Оформить заказ</Button>
                    </div>
                </div>
            </div>
        </Meta>
    );
}

export default Checkout;
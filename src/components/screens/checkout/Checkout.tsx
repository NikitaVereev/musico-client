import {FC, useState} from 'react';
import {useMutation, useQuery} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";
import {useAuth} from "@/src/hooks/useAuth";
import CartItem from "@/src/components/layout/header/cart/cart-item/CartItem";
import {IProduct} from "@/src/interfaces/product.interface";
import Button from '@/src/components/ui/button/Button'
import styles from './Checkout.module.scss'
import cn from "classnames";

interface IOrder{
    product: IProduct
    id: string
    quantity: number
}

const Checkout: FC = () => {
    const [isContinue, setIsContinue] = useState(false)

    const {mutate, isLoading} = useMutation({
        mutationFn: (data) => OrderService.createPaymant(data),

    })

    const { user } = useAuth();
    const email = user?.email;

    const { data: orders, isLoading: isLoadingPayment } = useQuery( ["single"],() => email ? OrderService.getOrder(email) : null,

    );
    if(isLoading) return <div className='loader'>Загрузка</div>

    const handleClick = () => {
        setIsContinue(true)


        mutate({
            data: {
                order_id: orders.id,
                customer_email: user?.email,
                products: orders.items.map(item => ({
                    sku: item.id,
                    name: item.product.title,
                    price: item.product.price,
                    quantity: item.quantity,
                    paymentMethod: "1",
                    paymentObject: "1"
                })),
                do: "pay",
                urlReturn: "http...",
                urlNotification: "http...",
                sys: "код системы"
            }
        });
    }


    return (
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
    );
}

export default Checkout;
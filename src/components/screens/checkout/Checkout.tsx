import { FC } from 'react';
import {useQuery} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";
import {useAuth} from "@/src/hooks/useAuth";
import CartItem from "@/src/components/layout/header/cart/cart-item/CartItem";
import {IProduct} from "@/src/interfaces/product.interface";

interface IOrder{
    product: IProduct
    id: string
    quantity: number
}

const Checkout: FC = () => {

    const { user } = useAuth();
    const email = user?.email;

    const { data: orders, isLoading } = useQuery( ["single"],() => email ? OrderService.getOrder(email) : null,

    );
    if(isLoading) return <div className='loader'>Загрузка</div>



    return (
        <div className='wrapper'>
            <h1>Корзина</h1>
            {orders && orders.items.map((item: IOrder) => (
                <div key={item.id}>
                    <CartItem item={item} />
                </div>
            ))}
            <h1>Цена: {orders && orders.price}</h1>
        </div>
    );
}

export default Checkout;
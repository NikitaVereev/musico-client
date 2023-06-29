import { FC } from 'react';
import styles from './Profile.module.scss'
import {useDispatch} from "react-redux";
import {useQuery} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";
import {useAuth} from "@/src/hooks/useAuth";

const Profile: FC = () => {
    const {user} = useAuth()
    const email = user?.email;





    const { data: orders, isLoading } = useQuery(['all orders'], () =>  OrderService.getAllOrders(email) );
    if(isLoading) return <div className='loader'>Загрузка</div>

    console.log(orders)
    return (
        <div className='wrapper, animate-scaleIn'>
            <h1>Мои заказы</h1>
            {orders && orders.map((item: {id: string, status: string, price: number}) => (
                <div key={item.id} className={styles.order}>
                    <h2>Статус: { item.status}</h2>
                    <h2>Дата:</h2>
                    <h2>Цена: {item.price} руб.</h2>
                </div>
            ))}
        </div>
    );
}

export default Profile;
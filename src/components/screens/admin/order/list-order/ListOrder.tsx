import { FC, useState } from 'react';
import AdminNavigation from "@/src/components/ui/admin-navigation/AdminNavigation";
import { useQuery } from "@tanstack/react-query";
import { OrderService } from "@/src/services/order.service";
import Image from "next/image";
import Button from '@/src/components/ui/button/Button'
import AdminTable from "@/src/components/ui/admin-table/AdminTable/AdminTable";
import styles from './ListOrder.module.scss'

const ListOrder: FC = ({orders, isLoading}) => {


    // Initialize the state array with all items initially closed
    const [openStates, setOpenStates] = useState(orders.map(() => false));



    console.log(orders);

    // Function to handle opening/closing an item
    const handleItemClick = (index: number) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    return (
        <div className='wrapper'>
            <AdminNavigation />
            <h1 className='animate-fade'>Список заказов</h1>
            <div className='animate-scaleIn flex flex-col gap-10'>

                {orders.length === 0 ? <h2>Заказов нет</h2> : orders.map((item: any, index: number) => (
                    <div key={item.id} className={styles.order}>
                        <div className={styles.heading}>
                            <div>
                                <h2>Стоимость: <span>{item.price} руб.</span></h2>
                                <h2>Статус: <span>{item.status === 'PAYED' && <span>Оплачено</span>}</span></h2>
                            </div>
                            <Button onClick={() => handleItemClick(index)}>
                                Подробнее
                            </Button>
                        </div>
                        {openStates[index] ? <AdminTable tableItems={item || []} isLoading={isLoading}
                                     headerItems={['Название', 'Количество', 'Цена', 'Изображение']}
                                     removeHandler={() => {
                                     }}/> : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListOrder;

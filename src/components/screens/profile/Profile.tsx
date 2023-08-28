import {FC, useState} from 'react';
import styles from './Profile.module.scss'
import {useDispatch} from "react-redux";
import {useQuery} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";
import {useAuth} from "@/src/hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import  ContentPlaceholder  from "./ContentPlaceholder";
import cn from "classnames";

const Profile: FC = () => {
    const {user} = useAuth()
    const email = user?.email;





    const { data: orders, isLoading } = useQuery(['all orders'], () =>  OrderService.getAllOrders(email) );
    if(isLoading) return <div className='loader'>Загрузка</div>

    console.log(orders)
    return (
        <div className='wrapper animate-scaleIn'>
            <h1 className='mb-5'>Мои заказы</h1>

            <Example orders={orders} />
        </div>
    );
}

export default Profile;
//@ts-ignore
const Accordion = ({ i, expanded, setExpanded }) => {
    const isOpen = i === expanded;

    // By using `AnimatePresence` to mount and unmount the contents, we can animate
    // them in and out while also only rendering the contents of open accordions
    return (
        <>
            <motion.header
                initial={false}
                animate={{ backgroundColor: isOpen ? "#333" : "#57a53c" }}
                onClick={() => setExpanded(isOpen ? false : i)}
                className='flex items-center'
            >
                <h3 className='text-xl font-bold pl-5'>Идентификатор заказа: {i.id}</h3></motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <ContentPlaceholder orders={i} />
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};
//@ts-ignore
export const Example = ({orders}) => {
    // This approach is if you only want max one section open at a time. If you want multiple
    // sections to potentially be open simultaneously, they can all be given their own `useState`.
    const [expanded, setExpanded] = useState<false | number>(0);
//@ts-ignore
    return orders.map((i) => (
        <Accordion i={i} expanded={expanded} key={i.id} setExpanded={setExpanded} />
    ));
};

const accordionIds = [0, 1, 2, 3];
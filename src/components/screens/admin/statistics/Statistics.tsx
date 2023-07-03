import { FC } from 'react';
import styles from './Statistics.module.scss'
import CountUsers from "@/src/components/screens/admin/statistics/CoutnUsers";
import PopularProduct from "@/src/components/screens/admin/statistics/PopularProduct";
import cn from "classnames";

const Statistics: FC = () => {
    return (
        <div className={cn(styles.statistics, 'animate-scaleIn')}>
            <CountUsers />
            <PopularProduct />
        </div>
    );
}

export default Statistics;
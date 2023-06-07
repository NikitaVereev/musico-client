import { FC } from 'react';
import styles from './Aside.module.scss'

const Aside: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Фильтры</h1>
        </div>
    );
}

export default Aside;
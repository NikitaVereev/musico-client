import { FC } from 'react';
import {TChildren} from "@/src/interfaces/option.interface";
import styles from './Banner.module.scss'
import cn from "classnames";

const Banner: FC<TChildren> = ({children, className}) => {
    return (
        <div className={cn(styles.wrapper, className)}>
            {children}
        </div>
    );
}

export default Banner;
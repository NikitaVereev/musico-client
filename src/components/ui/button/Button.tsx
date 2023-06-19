import { FC } from 'react';
import {TChildren} from "@/src/interfaces/option.interface";
import cn from "classnames";
import styles from './Button.module.scss'

const Button: FC<TChildren> = ({children, className, onClick}) => {
    return (
        <button onClick={onClick} className={cn(styles.btn, className, styles.green)} >
            {children}
        </button>
    );
}

export default Button;
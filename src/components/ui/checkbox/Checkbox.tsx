import type {FC, PropsWithChildren} from 'react';
import styles from './Checkbox.module.scss'
import cn from "classnames";
import {ImCheckboxChecked, ImCheckboxUnchecked} from "react-icons/im";

interface ICheckbox{
    isChecked: boolean
    onClick: () => void
    className?:string
}

const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({isChecked, className, onClick, children}) => {
    return (
        <button className={cn(styles.checkbox, className)} onClick={onClick}>
            {isChecked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}

            <span>{children}</span>
            
        </button>
    );
}

export default Checkbox;
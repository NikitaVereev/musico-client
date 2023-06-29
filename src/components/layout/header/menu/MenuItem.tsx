import Link from 'next/link'
import { FC } from 'react'
import styles from '../Header.module.scss'




import { IMenuItem } from './menu.interface'
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import Button from '@/src/components/ui/button/Button'
const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {

    return (
        <li

        >
            <Button><MaterialIcon name={item.icon} />
                <Link href={item.link} className={styles.button}>


                </Link>
            </Button>
        </li>
    )
}

export default MenuItem

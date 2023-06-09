import { FC } from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import styles from '../Filter.module.scss'

const BrandsFilter: FC = () => {
    const categories = [
        {
            title: 'Жопа',
            slug: 'jepa'
        },
        {
            title: 'Жижа',
            slug: 'jija'
        },
        {
            title: 'Да как',
            slug: 'da-kak'
        },
        {
            title: 'Танцы',
            slug: 'dance'
        },
        {
            title: 'Будда',
            slug: 'budda'
        }
    ]
    return (
        <div>
            <h1>Бренды</h1>
            <ul className={styles.container}>
                {categories.map((item: any) => (<FormControlLabel
                    key={item.slug}
                    control={
                        <Checkbox
                            color='success'
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />}
                    label={item.title}
                />
                ))}
            </ul>
        </div>
    );
}

export default BrandsFilter;
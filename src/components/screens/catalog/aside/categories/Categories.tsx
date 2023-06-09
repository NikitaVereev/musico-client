import React, { FC } from 'react';

import { Checkbox, FormControlLabel } from '@mui/material';
import styles from './Categories.module.scss';

interface CategoriesProps {
    changeChecked: (categoryId: string) => void;
    category: {
        checked: boolean;
        id: string;
        company: string;
    };
    count: number;
}

const Categories: FC<CategoriesProps> = ({ changeChecked, category, count }) => {
    const { checked, id } = category;

    return (
        <li className={styles.itemWrapper}>
            <FormControlLabel
                control={
                    <Checkbox
                        className={styles.checkbox}
                        checked={checked}
                        color='success'
                        onChange={() => changeChecked(id)}
                    />
                }
                label={`${category.company.toUpperCase()} (${count})`}
            />
        </li>
    );
};

export default Categories;

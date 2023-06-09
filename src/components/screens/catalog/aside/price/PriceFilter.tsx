import React, { FC, useState } from 'react';
import styles from '../Filter.module.scss';
import { Slider, Button } from '@mui/material';

interface PriceFilterProps {
    products: Product[];
}

interface Product {
    id: number;
    name: string;
    price: number;
}

const PriceFilter: FC<PriceFilterProps> = ({ products }) => {
    const [isFrom, setIsFrom] = useState(0);
    const [isBefore, setIsBefore] = useState(1000000);
    const [value, setValue] = useState<number[]>([isFrom, isBefore]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const valuetext = (value: number) => {
        return `${value} р.`;
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        // @ts-ignore
        setIsFrom(newValue[0] as number);
        // @ts-ignore
        setIsBefore(newValue[1] as number);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'isFrom') {
            setIsFrom(parseInt(value));
            setValue([parseInt(value), isBefore]);
        } else if (name === 'isBefore') {
            setIsBefore(parseInt(value));
            setValue([isFrom, parseInt(value)]);
        }
    };

    const handleFilterProducts = () => {
        const filtered = products.filter(
            (product) => product.price >= isFrom && product.price <= isBefore
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <h1>Цена, р.</h1>
            <div className={styles.wrapper}>
                <div className={styles.priceContainer}>
                    <div>
                        <input
                            name="isFrom"
                            onChange={handleInputChange}
                            value={isFrom}
                            type="number"
                        />
                    </div>
                    <div>
                        <input
                            name="isBefore"
                            onChange={handleInputChange}
                            value={isBefore}
                            type="number"
                        />
                    </div>
                </div>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    //@ts-ignore
                    color="success"
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={1000000}
                />
                <Button variant="contained" onClick={handleFilterProducts}>
                    Применить фильтр
                </Button>
            </div>
            <h2>Товары в заданном диапазоне цены:</h2>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PriceFilter;

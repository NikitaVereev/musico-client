import React, { FC, useState } from 'react';
import styles from '../Filter.module.scss';
import { Slider, Button } from '@mui/material';

interface PriceFilterProps {
    handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
    applyFilters: () => void;
}

const PriceFilter: FC<PriceFilterProps> = ({ handleChangePrice, applyFilters }) => {
    const [isFrom, setIsFrom] = useState('');
    const [isBefore, setIsBefore] = useState('');
    const [value, setValue] = useState<number[]>([0, 1000000]);

    const valuetext = (value: number) => {
        return `${value} р.`;
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        setIsFrom(newValue[0].toString());
        setIsBefore(newValue[1].toString());
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        handleChangePrice(event);
        if (name === 'minPrice') {
            setIsFrom(value);
            setValue([parseInt(value), parseInt(isBefore)]);
        } else if (name === 'maxPrice') {
            setIsBefore(value);
            setValue([parseInt(isFrom), parseInt(value)]);
        }
    };

    const handleApplyFilters = () => {
        handleChangePrice({
            target: {
                name: 'minPrice',
                value: isFrom,
            },
        });

        handleChangePrice({
            target: {
                name: 'maxPrice',
                value: isBefore,
            },
        });

        applyFilters();
    };

    return (
        <div>

            <div className={styles.wrapper}>
                <div className={styles.priceContainer}>
                    <div>
                        <input
                            name="minPrice"
                            placeholder="Минимальная цена"
                            onChange={handleInputChange}
                            value={isFrom}
                            type="number"
                        />
                    </div>
                    <div>
                        <input name="maxPrice" onChange={handleInputChange} value={isBefore} type="number" />
                    </div>
                </div>
                <div className={styles.sliderContainer}>
                    <Slider
                        color='success'
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={0}
                        max={1000000}
                    />
                </div>
                <div className={styles.applyButtonContainer}>
                    <Button onClick={handleApplyFilters} variant="contained" color="success">
                        Применить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;

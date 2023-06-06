import { FC } from 'react';
import {product} from "@/product";
import Image from "next/image";
import styles from './Catalog.module.scss'

const Catalog: FC = () => {
    return (
        <div>
            Catalog
            <div>
                {product.map(item => <div key={item._id} className='card'>
                    <img
                        src={item.image[0]}
                        className='card__img' />
                    <h2 className='card__title'>{item.title}</h2>
                    <div className='card__content'>
                        <div className='card__sizeContainer'>
                            <p className='card__sizeTitle'>Size:</p>
                            <a href='https://vk.com/jurchun' className='card__sizeNumber'>0</a>
                            <span className='card__sizeNumber'>8</span>
                            <span className='card__sizeNumber'>9</span>
                            <span className='card__sizeNumber'>10</span>
                        </div>

                        <div className='card__colorContainer'>
                            <p className='card__colorTitle'>Color:</p>
                            <span className='card__colorCircle' style={{backgroundColor: '#9bdc28'}}></span>
                            <span className='card__colorCircle' style={{backgroundColor: '#03a9f4'}}></span>
                            <span className='card__colorCircle' style={{backgroundColor: '#e91e63'}}></span>
                        </div>
                    </div>
                    <a href='#' className='card__link'>В корзину</a>
                </div>)}

            </div>
        </div>
    );
}

export default Catalog;
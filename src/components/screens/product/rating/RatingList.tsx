import React, { FC } from 'react';
import styles from "@/src/components/screens/product/Product.module.scss";
import {MaterialIcon} from "@/src/components/ui/MaterialIcon";
import Image from "next/image";

//@ts-ignore
const RatingList: FC = ({data}) => {
    console.log(data)
    return (
        <div>
            {/*//@ts-ignore*/}
            {data.data.map(item => (
                <div key={item.id} className={styles.reviewsWrapper}>
                    <div className='flex items-center gap-3 '>
                        <h2>Имя</h2>
                        <div className={styles.rating}>

                            {(() => {
                                const options = []

                                for (let i = 0; i < item.rating; i++) {
                                    options.push(<MaterialIcon name='MdStarRate'/>);
                                }

                                return options;
                            })()}
                            <span>{item.rating} / 5</span>
                        </div>
                    </div>
                    <div>
                        {item.review}
                    </div>
                    <div>

                        {item.image && <div className='flex gap-2'>
                            {
                                //@ts-ignore
                                item.image.map(item => (
                                <>
                                    {console.log(item)}
                                    <Image src={item.url} key={item.id} width={140} height={140} alt={item.id}/></>
                            ))
                            }

                        </div>
                        }
                    </div>
                </div>))}

        </div>
    );
}

export default RatingList;
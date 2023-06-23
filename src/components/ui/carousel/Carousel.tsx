import { FC } from 'react';
import {ICarouselItem} from "@/src/components/ui/carousel/carousel.interface";
import {useTypedSelector} from "@/src/hooks/useTypedSelector";
import cn from "classnames";
import styles from './Carousel.module.scss'
import CSSTransition from '@/src/components/ui/CssTransitionGroup'
import CarouselNavigation from "@/src/components/ui/carousel/CarouselNavigation";
import { TransitionGroup} from "react-transition-group";
import Link from "next/link";

interface ICarousel {
    items: ICarouselItem[]
    className?: string
}

const Carousel: FC<ICarousel> = ({items, className = ''}) => {

    const {selectedItemIndex} = useTypedSelector(state => state.carousel)
    const selectedItem = items[selectedItemIndex]

    return (
        <section className={cn(className, 'relative ')}>
            <CarouselNavigation />
            <TransitionGroup className='relative h-56'>
                <CSSTransition timeout={500}
                               key={selectedItem.title}
                               classNames={{
                    enter: styles['item-enter'],
                    enterActive: styles['item-enter-active'],
                    exit: styles['item-exit'],
                    exitActive: styles['item-exit-active']
                }} unmountOnExit mountOnEnter
                >
                    <div className={styles.item}
                    style={selectedItem.image ? {
                        backgroundImage: `url(${selectedItem.image})`
                    } : {}}>
                        <h2>{selectedItem.title}</h2>
                        <p>{selectedItem.description}</p>
                        {selectedItem.link ? (
                            <Link href={selectedItem.link}>
                                Перейти
                            </Link>
                        ) : (
                            <Link href='/catalog'>
                                В каталог
                            </Link>
                        )}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </section>
    );
}

export default Carousel;
import React, { FC } from 'react';
import {IProduct} from "@/src/interfaces/product.interface";
import {useActions} from "@/src/hooks/useActions";
import {useCart} from "@/src/components/layout/header/cart/useCart";
import Button from '@/src/components/ui/button/Button'
import {FaShoppingCart} from "react-icons/fa";

const AddToCartButton: FC<{product: IProduct}> = ({product}) => {
    const {

        addToCart, removeFromCart} = useActions()
    const {items} = useCart()

    const currentElement = items.find(
        //@ts-ignore
        cartItem => cartItem.product.id === product.id
    )
    return (
        <div>
            <Button onClick={() => currentElement ? removeFromCart({id: currentElement.id}) : addToCart({
                //@ts-ignore
                product,
                quantity: 1,
                price: product.price
            })}>{currentElement ? <span>УДАЛИТЬ<FaShoppingCart /></span> : <span>ДОБАВИТЬ<FaShoppingCart /></span>}</Button>
        </div>
    );
}

export default AddToCartButton;
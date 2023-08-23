import { FC } from 'react';
import {IProduct} from "@/src/interfaces/product.interface";
import {useActions} from "@/src/hooks/useActions";
import {useCart} from "@/src/components/layout/header/cart/useCart";

const AddToCartButton: FC<{product: IProduct}> = ({product}) => {
    const {
        //@ts-ignore
        addToCart, removeFromCart} = useActions()
    const {items} = useCart()

    const currentElement = items.find(
        //@ts-ignore
        cartItem => cartItem.product.id === product.id
    )
    return (
        <div>
            <button onClick={() => currentElement ? removeFromCart({id: currentElement.id}) : addToCart({
                //@ts-ignore
                product,
                quantity: 1,
                price: product.price
            })}>{currentElement ? <span>Удалить</span> : <span>Добавить</span>}</button>
        </div>
    );
}

export default AddToCartButton;
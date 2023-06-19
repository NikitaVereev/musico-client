import { FC, useState } from 'react';
import { useTypedSelector } from '@/src/hooks/useTypedSelector';
import CartItem from '@/src/components/layout/header/cart/cart-item/CartItem';
import Button from '@/src/components/ui/button/Button';
import styles from '../Header.module.scss';
import Link from "next/link";
import {MdShoppingCart} from "react-icons/md";

const Cart: FC = () => {
  const state = useTypedSelector((state) => state.cart.items);
  const [openBasket, setOpenBasket] = useState(false);
  const totalPrice = state.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <li >
      <Button onClick={() => setOpenBasket(!openBasket)}>
        <MdShoppingCart />
        <span>{state.length === 0 ? '' : state.length}</span>
      </Button>

      {openBasket && <div className={styles.cartWrapper}>
          <div className='font-normal text-lg mb-5'>Корзина</div>

          <div className={styles.cart}>
            {state.length ? state.map((item) => (
                <CartItem key={item.id} item={item} />)) : <div>Пусто(</div>
            }
          </div>
          <div className={styles.totalPrice}>
            <div>Цена:</div>
            <div>{totalPrice}</div>
          </div>
          {!!state.length && (
              <div className='text-center mt-7 mb-5'>
                <Link  href='/checkout'>Перейти к покупке</Link>
              </div>
          )}

      </div>}
    </li>
  );
};

export default Cart;

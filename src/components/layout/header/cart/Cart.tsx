import { FC, useState } from 'react';
import { useTypedSelector } from '@/src/hooks/useTypedSelector';
import CartItem from '@/src/components/layout/header/cart/cart-item/CartItem';
import Button from '@/src/components/ui/button/Button';
import styles from '../Header.module.scss';
import Link from "next/link";
import {MdShoppingCart} from "react-icons/md";
import {useAuth} from "@/src/hooks/useAuth";

const Cart: FC = () => {

  const {user} = useAuth()
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
        {!!state.length && (
         <>
           <div className={styles.totalPrice}>
             <div>Цена:</div>
             <div>{totalPrice}</div>
           </div>

           <Button className='p-0 text-center w-full flex items-center justify-center mt-7 mb-5'>
             <Link className='py-3 relative'  href='/checkout'>{user ? 'Перейти к покупке' : 'Регистрация'}</Link>
           </Button>
         </>
          )}

      </div>}
    </li>
  );
};

export default Cart;

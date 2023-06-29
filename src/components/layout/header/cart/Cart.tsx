import { FC } from 'react';
import { useTypedSelector } from '@/src/hooks/useTypedSelector';
import CartItem from '@/src/components/layout/header/cart/cart-item/CartItem';
import Button from '@/src/components/ui/button/Button';
import styles from '../Header.module.scss';
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';
import { useAuth } from '@/src/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { OrderService } from '@/src/services/order.service';
import {IProduct} from "@/src/interfaces/product.interface";
import cn from "classnames";



const Cart: FC = ({setOpenBasket, openBasket}: any) => {
  const { user } = useAuth();
  const state = useTypedSelector((state) => state.cart.items);

  const email = user?.email;

  const { data: orders, isLoading } = useQuery( ["single"],() => email ? OrderService.getOrder(email) : null,

  );
    localStorage.setItem('cartItems', JSON.stringify(state));

  if(!user) localStorage.removeItem('cartItems')

  if (isLoading) return <div className='loader'>Загрузка</div>;


  return (
      <li>
        <Button onClick={() => setOpenBasket(!openBasket)}>
          <MdShoppingCart />
          <span>{ user && orders && orders.items.length === 0 ? '' : orders && orders.items.length}</span>
        </Button>


            <div className={cn(styles.cartWrapper, openBasket && styles.active)}>
              <div className='font-normal text-lg mb-5'>Корзина</div>

              <div className={styles.cart}>
                {user && orders && orders.items.length ? (
                     orders.items.map((item: {product: IProduct, id: string, quantity: number}) => (
                        <div key={item.id}>
                          <CartItem item={item} />
                        </div>
                    ))
                ) : (
                    <div>Пусто(</div>
                )}
              </div>

              {user && orders  && (
                  <>
                    <div className={styles.totalPrice}>
                      <div>Цена:</div>
                      <div>{orders.price}</div>
                    </div>

                    <Button className='p-0 text-center w-full flex items-center justify-center mt-7 mb-5'>
                      <Link className='py-3 relative' href='/checkout'>
                        {user ? 'Перейти к покупке' : 'Регистрация'}
                      </Link>
                    </Button>
                  </>
              )}
            </div>

      </li>
  );
};

export default Cart;
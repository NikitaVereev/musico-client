import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@/src/hooks/useTypedSelector';
import CartItem from '@/src/components/layout/header/cart/cart-item/CartItem';
import Button from '@/src/components/ui/button/Button';
import styles from '../Header.module.scss';
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';
import { useAuth } from '@/src/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { OrderService } from '@/src/services/order.service';
import {useActions} from "@/src/hooks/useActions";
import {IProduct} from "@/src/interfaces/product.interface";



const Cart: FC = () => {
  const {addToCart, clearCart} = useActions()
  const { user } = useAuth();
  const state = useTypedSelector((state) => state.cart.items);

  const [openBasket, setOpenBasket] = useState(false);
  const totalPrice = state.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const email = user?.email;





  const { data: orders, isLoading } = useQuery( ["single"],() => email ? OrderService.getOrder(email) : null,

  );


    localStorage.setItem('cartItems', JSON.stringify(state));


  if(!user) localStorage.removeItem('cartItems')

  if (isLoading) return <div className='loader'>Загрузка</div>;

  // if(!user) {
  //   clearCart()
  //
  //   return
  // }
console.log(orders)
  const handleAddToCart = (item: any) => {
    addToCart(item);
  };

  return (
      <li>
        <Button onClick={() => setOpenBasket(!openBasket)}>
          <MdShoppingCart />
          <span>{orders && orders.items.length === 0 ? '' : orders && orders.items.length}</span>
        </Button>

        {openBasket && (
            <div className={styles.cartWrapper}>
              <div className='font-normal text-lg mb-5'>Корзина</div>

              <div className={styles.cart}>
                {orders && orders.items.length ? (
                     orders.items.map((item: {product: IProduct, id: string, quantity: number}) => (
                        <div key={item.id}>
                          <CartItem item={item} />
                        </div>
                    ))
                ) : (
                    <div>Пусто(</div>
                )}
              </div>

              {orders  && (
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
        )}
      </li>
  );
};

export default Cart;
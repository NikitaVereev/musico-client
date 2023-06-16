import { FC, useState } from 'react';
import { useTypedSelector } from '@/src/hooks/useTypedSelector';
import { FaWindowClose, FaShoppingCart } from 'react-icons/fa';
import CartItem from '@/src/components/layout/header/cart/cart-item/CartItem';
import Button from '@/src/components/ui/button/Button';
import styles from '../Header.module.scss';

const Cart: FC = () => {
  const state = useTypedSelector((state) => state.cart.items);
  const [openBasket, setOpenBasket] = useState(false);
  const totalPrice = state.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <li className={openBasket ? styles.active : ''}>
      <Button onClick={() => setOpenBasket(!openBasket)}>
        <FaShoppingCart />
        <span>{state.length === 0 ? '' : state.length}</span>
      </Button>

      <div>
        <div className={styles.wrapper}>
          <div className={styles.popupTitle}>
            <h2>Корзина</h2>
            <button>
              <FaWindowClose onClick={() => setOpenBasket(!openBasket)} />
            </button>
          </div>
          <div className={styles.itemWrapper}>
            {state.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.totalPrice}>
            <h3>
              Цена: <span>{totalPrice}</span>
            </h3>
            <Button onClick={() => {}}>Перейти к покупке</Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Cart;

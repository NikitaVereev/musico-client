import { FC } from 'react';
import { ICart } from '@/src/components/store/cart/cart.interface';
import Image from 'next/image';
import styles from './CartItem.module.scss';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useActions } from '@/src/hooks/useActions';

const CartItem: FC<{ item: ICart }> = ({ item }) => {
  const { removeFromCart } = useActions();

  return (
    <div className={styles.item}>
      <Image
        src={item.product.fileUrl}
        alt={item.product.title}
        width={100}
        height={100}
      />
      <div className={styles.itemInfo}>
        <h4>{item.product.title}</h4>
        <span>{item.product.price}</span>
      </div>
      <RiDeleteBin6Fill onClick={() => removeFromCart({ id: item.id })} />
    </div>
  );
};

export default CartItem;

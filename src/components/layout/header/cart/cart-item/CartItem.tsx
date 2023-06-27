import { FC } from 'react';
import { ICart } from '@/src/components/store/cart/cart.interface';
import Image from 'next/image';
import styles from './CartItem.module.scss';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useActions } from '@/src/hooks/useActions';
import {useMutation} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";

const CartItem: FC<{ item: ICart }> = ({ item }) => {
  const { removeFromCart } = useActions();

  const {mutate: deleteItemFromCart} = useMutation({
      mutationFn: (data: string) => OrderService.deleteOrderItem(data),
      onSuccess: () => {
          console.log('Waky-waky')
      }
  })
    console.log(item)

    const handleClick = (orderId) => {
      deleteItemFromCart(item.id)
      removeFromCart({id: item.id})

    }

  return (
    <div className={styles.item}>
      <Image
        src={item.fileUrl}
        alt={item.title}
        width={100}
        height={100}
      />
      <div className={styles.itemInfo}>
        <h4>{item.title}</h4>
        <span>{item.price}</span>
      </div>
      <RiDeleteBin6Fill onClick={handleClick} />
    </div>
  );
};

export default CartItem;

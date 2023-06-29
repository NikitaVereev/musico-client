import { FC } from 'react';
import { ICart } from '@/src/components/store/cart/cart.interface';
import Image from 'next/image';
import styles from './CartItem.module.scss';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";

import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {useAuth} from "@/src/hooks/useAuth";

const CartItem: FC<{ item: ICart }> = ({ item }) => {

  const queryClient = useQueryClient()
    const {user} = useAuth()

  const {mutate: deleteItemFromCart} = useMutation({
      mutationFn: (data: string) => OrderService.deleteOrderItem(data),
      onSuccess: () => queryClient.invalidateQueries(["single"])
  })

    const {mutate: changeDecrement} = useMutation({
        mutationFn: (data: string) => OrderService.decrementQuantityOrderItem(data),
        onSuccess: () => queryClient.invalidateQueries(["single"])
    })

    const {isLoading: loadingCreated, isError, error, isSuccess, mutate} = useMutation({
        mutationFn: (createCartItem) => OrderService.createOrder(
            // @ts-ignore
            createCartItem),
        onSuccess: () => queryClient.invalidateQueries(["single"])
    })

    const handleClick = () => {
      deleteItemFromCart(item.id)
      console.log(item.id)

    }
    const handleIncrementItem = () => {
        //@ts-ignore
        mutate({email: user.email, idProduct: item.product.id})
    }
    const handleDecrementItem = () => {
        //@ts-ignore
        changeDecrement(item.id)
    }

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

          <div className={styles.quantityContainer}>
              <AiOutlinePlusCircle onClick={handleIncrementItem} />
              <span>{item.quantity}</span>
              <AiOutlineMinusCircle onClick={handleDecrementItem} />
          </div>
          <span>{item.product.price * item.quantity} руб.</span>
      </div>
      <RiDeleteBin6Fill onClick={handleClick} />
    </div>
  );
};

export default CartItem;

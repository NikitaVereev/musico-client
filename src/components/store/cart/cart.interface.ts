import { IProduct } from '@/src/interfaces/product.interface';

export interface ICart {
  id: string;
  product: IProduct;
  quantity: number;
}

export interface IInitialState {
  items: ICart[];
}

export interface IAddToCartPayload extends Omit<ICart, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICart, 'id'>{
  type: 'minus' | 'plus'
}
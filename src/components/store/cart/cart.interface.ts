import {IProduct} from "@/src/components/types/product.interface";

export interface ICart{
    _id: number
    product: IProduct
    quantity: number
}

export interface IInitialState{
    items: ICart[]
}

export interface IAddToCartPayload extends Omit<ICart, '_id'>{}
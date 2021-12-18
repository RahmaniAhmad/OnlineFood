import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/cartActions";
interface IItem {
  id: number;
  name: string;
  price: number;
  count: number;
}
export interface ICartState {
  totalPrice: number;
  list: Array<IItem>;
}

export interface AddToCartRequest {
  type: typeof ADD_TO_CART;
  payload: {
    id: number;
    name: string;
    count: number;
    price: number;
  };
}
export interface RemoveFromCartRequest {
  type: typeof REMOVE_FROM_CART;
  payload: {
    id: number;
  };
}

export type CartActions = AddToCartRequest | RemoveFromCartRequest;

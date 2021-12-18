import * as actions from "../actionTypes/cartActions";

import { AddToCartRequest, RemoveFromCartRequest } from "../types/cartTypes";
import { toast } from "react-toastify";
export const addToCart = (
  id: number,
  name: string,
  count: number,
  price: number
): AddToCartRequest => {
  toast.success("added");
  return {
    type: actions.ADD_TO_CART,
    payload: { id, name, count, price }
  };
};

export const removeFromCart = (id: number): RemoveFromCartRequest => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: { id }
  };
};

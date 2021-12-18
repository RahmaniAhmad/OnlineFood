import * as actionTypes from "../actionTypes/cartActions";
import {
  AddToCartRequest,
  CartActions,
  ICartState,
  RemoveFromCartRequest
} from "../types/cartTypes";

const initState: ICartState = {
  totalPrice: 0,
  list: []
};

const addToCartRequest = (state = initState, action: AddToCartRequest) => {
  const copyState = { ...state };
  if (copyState.list.find((f) => f.id === action.payload.id)) {
    const existedItem = copyState.list.find((f) => f.id === action.payload.id);
    existedItem.count++;
  } else {
    copyState.list.push(action.payload);
  }
  copyState.totalPrice += action.payload.price;
  return {
    ...state,
    ...{ list: copyState.list, totalPrice: copyState.totalPrice }
  };
};
const removeFromCartRequest = (
  state = initState,
  action: RemoveFromCartRequest
) => {
  const selectedItem = state.list.find((item) => item.id === action.payload.id);
  const newList = state.list.filter((item) => item.id !== action.payload.id);
  let totalPrice = state.totalPrice - selectedItem.price;
  if (newList.length === 0) totalPrice = 0;
  return {
    ...state,
    ...{ list: newList, totalPrice: totalPrice }
  };
};
const cartReducer = (state = initState, action: CartActions) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCartRequest(state, action);
    case actionTypes.REMOVE_FROM_CART:
      return removeFromCartRequest(state, action);
    default:
      return state;
  }
};

export default cartReducer;

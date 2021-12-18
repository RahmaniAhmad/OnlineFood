import { combineReducers } from "redux";
import BeerReducer from "../reducers/beerReducer";
import CartReducer from "../reducers/cartReducer";
export const rootReducer = combineReducers({ BeerReducer, CartReducer });
export type RootState = ReturnType<typeof rootReducer>;

import { applyMiddleware, compose, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import { watch } from "../saga";

const sagaMiddleware = createSagaMiddleware();
const enhancers = [applyMiddleware(sagaMiddleware)];
export const store = createStore(rootReducer, compose(...enhancers));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
sagaMiddleware.run(watch);

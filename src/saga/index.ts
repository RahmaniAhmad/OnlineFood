import { spawn } from "redux-saga/effects";

import beerSaga from "./beerSaga";

export function* watch() {
  yield spawn(beerSaga);
}

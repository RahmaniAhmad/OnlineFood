import * as actionTypes from "../store/actionTypes/beerActions";

import {
  FetchByIdBeerRequest,
  FetchBeerRequest
} from "../store/types/beerTypes";
import {
  fetchAllFaliure,
  fetchAllSuccess,
  fetchByIdFaliure,
  fetchByIdSuccess
} from "../store/actions/beerActions";
import { call, put } from "redux-saga/effects";
import { callFetchAllApi, callFetchById } from "../apis/beerApis";

import { AxiosResponse } from "axios";
import { takeLatest } from "redux-saga/effects";

export function* fetchAll({ payload }: FetchBeerRequest) {
  try {
    const response: AxiosResponse<any> = yield call(
      callFetchAllApi,
      payload.perPage,
      payload.currentPage
    );
    yield put(fetchAllSuccess(response.data));
  } catch (error) {
    yield put(fetchAllFaliure({ error: error }));
  }
}
export function* fetchById({ payload }: FetchByIdBeerRequest) {
  try {
    const response: AxiosResponse<any> = yield call(callFetchById, payload.id);
    yield put(fetchByIdSuccess(response.data[0]));
  } catch (error) {
    yield put(fetchByIdFaliure({ error: error }));
  }
}

export default function* etebarDorehSaga() {
  yield takeLatest(actionTypes.FETCH_BEER_REQUEST, fetchAll);
  yield takeLatest(actionTypes.FETCHBYID_BEER_REQUEST, fetchById);
}

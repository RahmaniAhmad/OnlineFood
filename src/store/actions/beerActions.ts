import * as actions from "../actionTypes/beerActions";

import {
  FetchByIdBeerFailurePayload,
  FetchByIdBeerRequest,
  FetchBeerFailurePayload,
  FetchBeerRequest
} from "../types/beerTypes";

import { toast } from "react-toastify";

export const fetchAll = (
  perPage: number,
  currentPage: number
): FetchBeerRequest => {
  return {
    type: actions.FETCH_BEER_REQUEST,
    payload: { perPage, currentPage }
  };
};

export const fetchAllSuccess = (data: any) => {
  return {
    type: actions.FETCH_BEER_SUCCESS,
    payload: { data: data }
  };
};
export const fetchAllFaliure = (payload: FetchBeerFailurePayload) => {
  return {
    type: actions.FETCH_BEER_FAILURE,
    payload
  };
};
export const fetchById = (id: number): FetchByIdBeerRequest => {
  return {
    type: actions.FETCHBYID_BEER_REQUEST,
    payload: { id }
  };
};

export const fetchByIdSuccess = (data: any) => {
  return {
    type: actions.FETCHBYID_BEER_SUCCESS,
    payload: { selectedItem: data }
  };
};
export const fetchByIdFaliure = (payload: FetchByIdBeerFailurePayload) => {
  return { type: actions.FETCHBYID_BEER_FAILURE };
};

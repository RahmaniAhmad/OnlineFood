import {
  FETCHBYID_BEER_FAILURE,
  FETCHBYID_BEER_REQUEST,
  FETCHBYID_BEER_SUCCESS,
  FETCH_BEER_FAILURE,
  FETCH_BEER_REQUEST,
  FETCH_BEER_SUCCESS
} from "../actionTypes/beerActions";

export interface IBeer {
  id: number;
  image_url: string;
  name: string;
  tagline: string;
  abv: string;
  Description: string;
  food_pairing: string;
}

export interface IBeerState {
  data: Array<IBeer>;
  selectedItem: IBeer;
  loading: boolean;
  error: string | null;
  refreshList: boolean;
}

/***fetch***/
export interface FetchBeerSuccessPayload {
  data: IBeer[];
}

export interface FetchBeerFailurePayload {
  error: string;
}
export interface FetchBeerRequest {
  type: typeof FETCH_BEER_REQUEST;
  payload: {
    perPage: number;
    currentPage: number;
  };
}

export type FetchBeerSuccess = {
  type: typeof FETCH_BEER_SUCCESS;
  payload: FetchBeerSuccessPayload;
};

export type FetchBeerFailure = {
  type: typeof FETCH_BEER_FAILURE;
  payload: FetchBeerFailurePayload;
};
/***fetch***/

/***fetchById***/
export interface FetchByIdBeerSuccessPayload {
  selectedItem: IBeer;
}

export interface FetchByIdBeerFailurePayload {
  error: string;
}
export interface FetchByIdBeerRequest {
  type: typeof FETCHBYID_BEER_REQUEST;
  payload: {
    id: number;
  };
}

export type FetchByIdBeerSuccess = {
  type: typeof FETCHBYID_BEER_SUCCESS;
  payload: FetchByIdBeerSuccessPayload;
};

export type FetchByIdBeerFailure = {
  type: typeof FETCHBYID_BEER_FAILURE;
  payload: FetchByIdBeerFailurePayload;
};
/***fetchById***/

export type BeerActions =
  | FetchBeerRequest
  | FetchBeerSuccess
  | FetchBeerFailure
  | FetchByIdBeerRequest
  | FetchByIdBeerSuccess
  | FetchByIdBeerFailure;

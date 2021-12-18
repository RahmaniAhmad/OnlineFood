import * as actionTypes from "../actionTypes/beerActions";
import {
  IBeer,
  IBeerState,
  BeerActions,
  FetchBeerRequest,
  FetchBeerSuccess,
  FetchBeerFailure,
  FetchByIdBeerRequest,
  FetchByIdBeerSuccess,
  FetchByIdBeerFailure
} from "../types/beerTypes";
const initSelectedItem: IBeer = {
  id: 0,
  image_url: "",
  name: "",
  tagline: "",
  abv: "",
  Description: "",
  food_pairing: ""
};
const initState: IBeerState = {
  data: [],
  selectedItem: initSelectedItem,
  loading: false,
  error: null,
  refreshList: true
};

const fetchRequest = (state = initState, action: FetchBeerRequest) => {
  return {
    ...state,
    ...{
      loading: true
    }
  };
};
const fetchSuccess = (state = initState, action: FetchBeerSuccess) => {
  return {
    ...state,
    ...{
      loading: false,
      data: action.payload.data,
      error: "",
      refreshList: false
    }
  };
};
const fetchFailure = (state = initState, action: FetchBeerFailure) => {
  return {
    ...state,
    ...{ loading: false, data: [], error: action.payload.error }
  };
};
const fetchByIdRequest = (state = initState) => {
  return { ...state, ...{ loading: true, selectedItem: initSelectedItem } };
};
const fetchByIdSuccess = (state = initState, action: FetchByIdBeerSuccess) => {
  return {
    ...state,
    ...{ loading: false, selectedItem: action.payload.selectedItem, error: "" }
  };
};
const fetchByIdFailure = (state = initState, action: FetchByIdBeerFailure) => {
  return {
    ...state,
    ...{ loading: false, data: [], error: action.payload.error }
  };
};

const beerReducer = (state = initState, action: BeerActions) => {
  switch (action.type) {
    case actionTypes.FETCH_BEER_REQUEST:
      return fetchRequest(state, action);
    case actionTypes.FETCH_BEER_SUCCESS:
      return fetchSuccess(state, action);
    case actionTypes.FETCH_BEER_FAILURE:
      return fetchFailure(state, action);

    case actionTypes.FETCHBYID_BEER_REQUEST:
      return fetchByIdRequest(state);
    case actionTypes.FETCHBYID_BEER_SUCCESS:
      return fetchByIdSuccess(state, action);
    case actionTypes.FETCHBYID_BEER_FAILURE:
      return fetchByIdFailure(state, action);

    default:
      return state;
  }
};

export default beerReducer;

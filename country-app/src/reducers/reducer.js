import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  country: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COUNTRY_SUCCESS:
      return {
        loading: false,
        country: action.payload,
        error: "",
      };

    case FETCH_COUNTRY_FAILURE:
      return {
        loading: false,
        country: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;

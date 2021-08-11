import {
  FETCH_COUNTRY_BY_ID,
  FETCH_COUNTRY_BY_ID_FAILURE,
  FETCH_COUNTRY_BY_ID_SUCCESS,
} from "../actions/types";

const initialState = {
  loading: false,
  country: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_BY_ID:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COUNTRY_BY_ID_SUCCESS:
      return {
        loading: false,
        country: action.payload,
        error: "",
      };

    case FETCH_COUNTRY_BY_ID_FAILURE:
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

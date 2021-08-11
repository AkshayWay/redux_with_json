import countryReducer from "./reducer";
import getReducerById from "./getreducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  countryReducer: countryReducer,
  getReducerById: getReducerById,
});

export default allReducers;

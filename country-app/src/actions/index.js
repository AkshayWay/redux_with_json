import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
  FETCH_COUNTRY_BY_ID,
  FETCH_COUNTRY_BY_ID_SUCCESS,
  FETCH_COUNTRY_BY_ID_FAILURE,
} from "./types";
import axios from "axios";
const apiUrl = "http://localhost:8080/country/countries";

const initialState = {
  loading: false,
  country: [],
  countryById: [],
  error: "",
};

const fetchCountryRequest = () => {
  return {
    type: FETCH_COUNTRY_REQUEST,
  };
};
const fetchCountrySuccess = (country) => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: country,
  };
};
const fetchCountryFailure = (error) => {
  return {
    type: FETCH_COUNTRY_FAILURE,
    payload: error,
  };
};

//Get by id
const fetchCountryById = () => {
  return {
    type: FETCH_COUNTRY_BY_ID,
  };
};
const fetchCountryByIdSuccess = (countryById) => {
  return {
    type: FETCH_COUNTRY_BY_ID_SUCCESS,
    payload: countryById,
  };
};
const fetchCountryByIdFailure = (error) => {
  return {
    type: FETCH_COUNTRY_BY_ID_FAILURE,
    payload: error,
  };
};

//GET by ID
const fetchCountryByIdFun = (ID) => {
  return function (dispath) {
    dispath(fetchCountryById());
    axios
      .get("http://localhost:8080/country/countries/" + ID)
      .then((response) => {
        const country = response;
        dispath(fetchCountryByIdSuccess(country));
      })
      .catch((error) => {
        dispath(fetchCountryByIdFailure(error.message));
      });
  };
};

//GET all data
const fetchCountry = (id) => {
  return function (dispath) {
    dispath(fetchCountryRequest());
    axios
      .get("http://localhost:8080/country/countries")
      .then((response) => {
        const country = response.data.countries;
        dispath(fetchCountrySuccess(country));
      })
      .catch((error) => {
        dispath(fetchCountryFailure(error.message));
      });
  };
};
export { fetchCountryByIdFun, fetchCountry };

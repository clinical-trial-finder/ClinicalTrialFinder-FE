import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// import { history } from "../helpers/history";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  // return axios
  return axiosWithAuth()
    .post("https://clinical-trial-finder.herokuapp.com/auth/login", creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      return true;
    })
    .catch(err => console.log(err.response));
};

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = creds => dispatch => {
  console.log(creds);
  dispatch({ type: SIGN_UP_START });
  // return axiosWithAuth()
  return axios
    .post("https://clinical-trial-finder.herokuapp.com/auth/register", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SIGN_UP_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = data => dispatch => {
  console.log("getData start", data);
  dispatch({ type: FETCH_DATA_START });
  return axiosWithAuth()
    .get("https://clinical-trial-finder-api.herokuapp.com/api/v1/studies/all")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err });
    });
};

export const SEARCH_DATA_START = "SEARCH_DATA_START";
export const SEARCH_DATA_SUCCESS = "SEARCH_DATA_SUCCESS";
export const SEARCH_DATA_FAILURE = "SEARCH_DATA_FAILURE";

export const searchTrial = param => dispatch => {
  const updatedParam = param.split("-").join("20%");
  console.log("searchtrial", updatedParam);
  dispatch({
    type: SEARCH_DATA_START
  });
  return axios
    .get(
      `https://clinical-trial-finder-api.herokuapp.com/api/v1/studies/search?description=${updatedParam}`
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: SEARCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: SEARCH_DATA_FAILURE, payload: err });
    });
};

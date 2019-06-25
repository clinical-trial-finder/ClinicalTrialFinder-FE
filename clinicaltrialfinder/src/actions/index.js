import axios from "axios";

import { history } from "../helpers/history";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// export const login = creds => dispatch => {
//   dispatch({ type: LOGIN_START });
//   return axiosWithAuth()
//     .post("/login", creds)
//     .then(res => {
//       localStorage.setItem("token", res.data.payload); // determine how the payload looks
//       dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
//       return true;
//     })
//     .catch(err => console.log(err.response));
// };

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

// export const signUp = creds => dispatch => {
//   dispatch({ type: SIGN_UP_START });
//   return axiosWithAuth()
//     .post("/signup", creds)
//     .then(res => {
//       localStorage.setItem("token", res.data.payload); // determine what the payload looks like
//       dispatch({ type: SIGN_UP_SUCCESS });
//       return true;
//     })
//     .catch(err => console.log(err.response));
// };

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = data => dispatch => {
  console.log("getData start", data); // don't know what data looks like
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("HEROKU")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data }); // find out what payload is set to
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err }); // find out if error is default
    });
};

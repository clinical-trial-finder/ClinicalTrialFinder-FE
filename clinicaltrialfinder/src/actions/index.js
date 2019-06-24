import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getTrials = trial => dispatch => {
  console.log("get trial running", trial); // figure out what data looks like
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

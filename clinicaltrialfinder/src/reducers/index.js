import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SEARCH_DATA_START,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAILURE
} from "../actions";

const initialState = {
  error: "",
  loggingIn: false,
  signedUp: false,
  searching: false,
  // token: localStorage.getItem("token"),
  conditions: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
        // token: action.payload
      };
    case SIGN_UP_START:
      return {
        ...state,
        error: "",
        loggingIn: false
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        error: "",
        signedUp: true
      };
    case SIGN_UP_FAILURE:
      return {
        ...state
      };
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        conditions: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    case SEARCH_DATA_START:
      return {
        ...state,
        error: "",
        searching: true,
        header: "Access-Control-Allow-Origin: *"
      };
    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searching: false,
        conditions: action.payload
      };
    case SEARCH_DATA_FAILURE:
      return {
        ...state,
        searching: false
      };

    default:
      return state;
  }
};

export default reducer;

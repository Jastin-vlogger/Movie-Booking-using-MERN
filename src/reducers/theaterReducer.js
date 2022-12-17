import {
    THEATER_LOGIN_REQUEST,
    THEATER_LOGIN_SUCCESS,
    THEATER_LOGIN_FAIL,
  } from "../constants/theaterConstant";
  export const theaterLogin = (state = {}, action) => {
    switch (action.type) {
      case THEATER_LOGIN_REQUEST:
        return { loading: true};
      case THEATER_LOGIN_SUCCESS:
        return { loading: false, theaterInfo: action.payload };
      case THEATER_LOGIN_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
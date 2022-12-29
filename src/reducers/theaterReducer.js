import {
  THEATER_LOGIN_REQUEST,
  THEATER_LOGIN_SUCCESS,
  THEATER_LOGIN_FAIL,
  THEATER_FETCH_REQUEST,
  THEATER_FETCH_SUCCESS,
  THEATER_FETCH_FAIL,
  THEATER_APPROVE_REQUEST,
  THEATER_APPROVE_SUCCESS,
  THEATER_APPROVE_FAIL,
  THEATER_SCREENADD_REQUEST,
  THEATER_SCREENADD_SUCESS,
  THEATER_SCREENADD_FAIL,
  GET_SCREEN_LIST_FAIL,
  GET_SCREEN_LIST_SUCCESSS,
  GET_SCREEN_LIST_REQUEST
} from "../constants/theaterConstant";
export const theaterLogin = (state = {}, action) => {
  switch (action.type) {
    case THEATER_LOGIN_REQUEST:
      return { loading: true };
    case THEATER_LOGIN_SUCCESS:
      return { loading: false, theaterInfo: action.payload };
    case THEATER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const fetchTheater = (state = { getTheaters: [] }, action) => {
  switch (action.type) {
    case THEATER_FETCH_REQUEST:
      return { loading: true, getTheaters: [] };
    case THEATER_FETCH_SUCCESS:
      return { loading: false, getTheaters: action.payload };
    case THEATER_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const approveTheater = (state = {}, action) => {
  switch (action.type) {
    case THEATER_APPROVE_REQUEST:
      return { loading: true };
    case THEATER_APPROVE_SUCCESS:
      return { loading: false, approvetheaters: action.payload };
    case THEATER_APPROVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const theaterScreenAdd = (state = {}, action) => {
  switch (action.type) {
    case THEATER_SCREENADD_REQUEST:
      return { loading: true };
    case THEATER_SCREENADD_SUCESS:
      return { loading: false, screenAdded: action.payload };
    case THEATER_SCREENADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const screenList = (state = { screens: [] }, action) => {
  switch (action.type) {
    case GET_SCREEN_LIST_REQUEST:
      return { loading: true,screens: [] };
    case GET_SCREEN_LIST_SUCCESSS:
      return { loading: false, screens: action.payload };
    case GET_SCREEN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

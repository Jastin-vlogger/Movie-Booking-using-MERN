import {
  GET_DATE_DETAILS_FAIL,
  GET_DATE_DETAILS_REQUEST,
  GET_DATE_DETAILS_SUCCESS,
} from "../constants/bookingConstant";

export const dateInfoReducer = (state = { dateInfo:[]}, action) => {
  switch (action.type) {
    case GET_DATE_DETAILS_REQUEST:
      return { loading: true, dateInfo: [] };
    case GET_DATE_DETAILS_SUCCESS:
      return { loading: false, dateInfo: action.payload };
    case GET_DATE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

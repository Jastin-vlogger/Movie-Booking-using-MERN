import {
  GET_DATE_DETAILS_FAIL,
  GET_DATE_DETAILS_REQUEST,
  GET_DATE_DETAILS_SUCCESS,
  GET_BOOKED_DETAILS_SUCESS,
  GET_BOOKED_DETAILS_FAIL,
  GET_BOOKED_DETAILS,
  ADD_TOTAL_AMOUNT_WHICH_BOOKED,
  GET_SEATS_AND_TOTAL_AMOUNT
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

export const dateInformation = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOKED_DETAILS_SUCESS:
      return { loading: false, dateInfo: action.payload };
    case GET_BOOKED_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case GET_SEATS_AND_TOTAL_AMOUNT:
      return {...state,...action.payload}
    case ADD_TOTAL_AMOUNT_WHICH_BOOKED:
      return {...state,...action.payload}
    default:
      return state;
  }
};

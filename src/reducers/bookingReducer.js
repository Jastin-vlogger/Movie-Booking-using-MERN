import {
  GET_DATE_DETAILS_FAIL,
  GET_DATE_DETAILS_REQUEST,
  GET_DATE_DETAILS_SUCCESS,
  GET_BOOKED_DETAILS_SUCESS,
  GET_BOOKED_DETAILS_FAIL,
  GET_BOOKED_DETAILS,
  ADD_TOTAL_AMOUNT_WHICH_BOOKED,
  GET_SEATS_AND_TOTAL_AMOUNT,
  ADD_DATE_AND_DAY_TO_STATE,
  ADD_DATE_AND_DAY_TO_STATE_FAIL,
  GET_SEATS_INFORMATION_REQUEST,
  GET_SEATS_INFORMATION_SUCCESS,
  GET_SEATS_INFORMATION_FAIL,
} from "../constants/bookingConstant";

export const dateInfoReducer = (state = { dateInfo: [] }, action) => {
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
      return { ...state, ...action.payload };
    case ADD_TOTAL_AMOUNT_WHICH_BOOKED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const selectDateInfo = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATE_AND_DAY_TO_STATE:
      return { date: action.payload };
    case ADD_DATE_AND_DAY_TO_STATE_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const seatInfomation = (state = {seat:[]}, action) => {
  switch (action.type) {
    case GET_SEATS_INFORMATION_REQUEST:
      return {loading:true, seat:[] };
    case GET_SEATS_INFORMATION_SUCCESS:
      return {loading:false, seat:action.payload};
    case GET_SEATS_INFORMATION_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

import {
  GET_DATE_DETAILS_FAIL,
  GET_DATE_DETAILS_REQUEST,
  GET_DATE_DETAILS_SUCCESS,
  GET_BOOKED_DETAILS_SUCESS,
  GET_BOOKED_DETAILS_FAIL,
  GET_BOOKED_DETAILS,
  GET_SEATS_AND_TOTAL_AMOUNT,
  GET_SEATS_AND_TOTAL_AMOUNT_FAIL,
  ADD_TOTAL_AMOUNT_WHICH_BOOKED_FAIL,
  ADD_TOTAL_AMOUNT_WHICH_BOOKED
} from "../constants/bookingConstant";
import axios from "../axios/axios";

export const handleSelectDate = (date, day, id) => async (dispatch) => {
  try {
    dispatch({ type: GET_DATE_DETAILS_REQUEST });
    console.log(date, day);
    const { data } = await axios.get(
      `/api/theater/getScreenInfo/${date}/${day}/${id}`
    );
    console.log(data);
    dispatch({ type: GET_DATE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_DATE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const handleSelectNameTime = (name, time) => async (dispatch) => {
  const data = {
    name,
    time,
  };
  try {
    dispatch({ type: GET_BOOKED_DETAILS_SUCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_BOOKED_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const handleAddingSeatingData = (seating) => (dispatch)=>{
  try {
    dispatch({type:GET_SEATS_AND_TOTAL_AMOUNT,payload:seating})
  } catch (error) {
    dispatch({
      type: GET_SEATS_AND_TOTAL_AMOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const handleAddTotalPrice = (totalAmount) => (dispatch)=>{
  try {
    dispatch({type:ADD_TOTAL_AMOUNT_WHICH_BOOKED,payload:totalAmount})
  } catch (error) {
    dispatch({
      type: ADD_TOTAL_AMOUNT_WHICH_BOOKED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

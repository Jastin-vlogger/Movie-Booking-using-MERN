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
import axios from "../axios/axios";

export const theaterLogin = (datas) => async (dispatch) => {
  try {
    dispatch({ type: THEATER_LOGIN_REQUEST });
    let { data } = await axios.post("/api/theater/register", datas);
    console.log(data);
    dispatch({ type: THEATER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: THEATER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchTheaters = (datas) => async (dispatch) => {
  try {
    dispatch({ type: THEATER_FETCH_REQUEST });
    let { data } = await axios.get("/api/theater/fetch", datas);
    console.log(data);
    dispatch({ type: THEATER_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: THEATER_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const approveTheaters = (status) => async (dispatch) => {
  try {
    dispatch({ type: THEATER_APPROVE_REQUEST });
    const { data } = await axios.put(`/api/theater/approveTheater`, status);
    console.log(data);
    dispatch({ type: THEATER_APPROVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: THEATER_APPROVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const addTheaterScreen = (screenInfo) => async (dispatch) => {
  try {
    dispatch({ type: THEATER_SCREENADD_REQUEST });
    const { data } = await axios.post('/api/theater/addscreen', screenInfo);
    console.log(data);
    dispatch({ type: THEATER_SCREENADD_SUCESS, payload: data });
  } catch (error) {
    dispatch({
      type: THEATER_SCREENADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getScreenList = (id) => async (dispatch) => {
  try {
    console.log(id)
    dispatch({ type: GET_SCREEN_LIST_REQUEST });
    const { data } = await axios.get(`/api/theater/getScreen/${id}`);
    console.log(data);
    dispatch({ type: GET_SCREEN_LIST_SUCCESSS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SCREEN_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

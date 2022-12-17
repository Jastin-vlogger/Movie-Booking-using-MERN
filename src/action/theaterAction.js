import {
    THEATER_LOGIN_REQUEST,
    THEATER_LOGIN_SUCCESS,
    THEATER_LOGIN_FAIL,
  } from "../constants/theaterConstant";
  import axios from "../axios/axios";
  
  export const theaterLogin = (datas) => async (dispatch) => {
    try {
      dispatch({ type: THEATER_LOGIN_REQUEST });
      let { data } = await axios.post("/api/theater/register",datas);
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
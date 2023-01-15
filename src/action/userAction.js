import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_OTP_REQUEST,
  USER_OTP_SUCCESS,
  USER_OTP_FAIL,
} from "../constants/userConstats";
import axios from "../axios/axios";

export const registration = (datas) => async (dispatch) => {
  console.log(datas);
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    let { data } = await axios.post("/api/users/signup", datas);
    console.log(data);
    dispatch({ type: USER_LOGIN_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const otpValidate = (datas) => async (dispatch) => {
  console.log(datas);
  try {
    dispatch({ type: USER_OTP_REQUEST });
    let { data } = await axios.post("/api/users/otp/", datas);
    console.log(data);
    dispatch({ type: USER_OTP_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_OTP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_OTP_REQUEST,
  USER_OTP_SUCCESS,
  USER_OTP_FAIL,
} from "../constants/userConstats";

// eslint-disable-next-line import/prefer-default-export
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    default:
      return state;
  }
};
export const userLoginOtpReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_OTP_REQUEST:
      return { loading: true };
    case USER_OTP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_OTP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

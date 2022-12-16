import { USER_LOGIN_REQUEST ,USER_LOGIN_SUCCESS} from '../constants/userConstats';

// eslint-disable-next-line import/prefer-default-export
export const userLoginReducer = (state =  {}, action) => {
  console.log(action)
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return {loading:false,userInfo:action.payload}
    default:
      return state;
  }
};

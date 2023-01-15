import { combineReducers, createStore, applyMiddleware } from "redux";
import { userLoginOtpReducer, userLoginReducer } from "./reducers/userReducer";
import {
  getMoviesReducer,
  movieInfo,
  movieInfoById,
  movieReviewById,
  theaterMovies,
} from "./reducers/movieReducer";
import {
  approveTheater,
  fetchTheater,
  theaterLogin,
  theaterScreenAdd,
  screenList,
} from "./reducers/theaterReducer";
import thunk from "redux-thunk";
import {
  dateInfoReducer,
  dateInformation,
  paymentSucess,
  seatInfomation,
  selectDateInfo,
} from "./reducers/bookingReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userInformation: userLoginOtpReducer,
  getMovies: getMoviesReducer,
  theaterLogin,
  getTheaters: fetchTheater,
  approveTheater,
  theaterScreenAdd,
  screenList,
  movieInfo,
  dateData: dateInfoReducer,
  dateInformationSelected: dateInformation,
  date: selectDateInfo,
  seats: seatInfomation,
  movie: movieInfoById,
  review: movieReviewById,
  payment: paymentSucess,
  filtermovie:theaterMovies,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
console.log(userInfoFromStorage)
const initialState = {
  userInformation: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;

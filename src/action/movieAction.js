import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAIL,
  GET_MOVIE_INFO_MOVIEPAGE_REQUEST,
  GET_MOVIE_INFO_MOVIEPAGE_SUCCESS,
  GET_MOVIE_INFO_MOVIEPAGE_FAIL,
  GET_MOVIE_ID_REQUEST,
  GET_MOVIE_ID_SUCCESS,
  GET_MOVIE_ID_FAIL,
  ADD_MOVIE_REVIEW_REQUEST,
  ADD_MOVIE_REVIEW_SUCCESS,
  ADD_MOVIE_REVIEW_FAIL,
  GET_MOVIE_REVIEW_BY_ID_REQUEST,
  GET_MOVIE_REVIEW_BY_ID_SUCCESS,
  GET_MOVIE_REVIEW_BY_ID_FAIL,
  GET_THEATER_MOVIE_REQUEST,
  GET_THEATER_MOVIE_SUCCESS,
  GET_THEATER_MOVIE_FAIL,
} from "../constants/movieConstants";
import axios from "../axios/axios";

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_REQUEST });
    let { data } = await axios.get("/api/users/movieInfo");
    console.log(data);
    dispatch({ type: GET_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const movieInfoStoreToState = (movie) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_INFO_MOVIEPAGE_SUCCESS, payload: movie });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_INFO_MOVIEPAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMovieById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_ID_REQUEST });
    let { data } = await axios.get(`/api/users/movieInfo/${id}`);
    console.log(data);
    dispatch({ type: GET_MOVIE_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const putMovies = (id, rating, message) => async (dispatch) => {
  const datas = {
    id,
    rating,
    message,
  };
  try {
    dispatch({ type: ADD_MOVIE_REVIEW_REQUEST });
    let { data } = await axios.post(`/api/users/addreviews`, datas);
    // console.log(data);
    // dispatch({ type: ADD_MOVIE_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_MOVIE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMovieReviewById = (id) => async (dispatch) => {
  console.log(id);
  try {
    dispatch({ type: GET_MOVIE_REVIEW_BY_ID_REQUEST });
    let { data } = await axios.get(`/api/users/movieReview/${id}`);
    console.log(data);
    dispatch({ type: GET_MOVIE_REVIEW_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_REVIEW_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTheaterMovies = () => async (dispatch) => {
  try {
    // dispatch({type:GET_THEATER_MOVIE_REQUEST})
    let { data } = await axios.get("/api/users/GetTheaterMovies");
    dispatch({ type: GET_THEATER_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_THEATER_MOVIE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

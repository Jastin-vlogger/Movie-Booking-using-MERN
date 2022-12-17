import {
    GET_MOVIE_REQUEST,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAIL,
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
  
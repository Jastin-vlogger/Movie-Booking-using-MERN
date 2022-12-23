import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAIL,
} from "../constants/movieConstants";
export const getMoviesReducer = (state = { movieInfo: [] }, action) => {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return { loading: true, movieInfo: [] };
    case GET_MOVIE_SUCCESS:
      return { loading: false, movieInfo: action.payload };
    case GET_MOVIE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

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
  GET_MOVIE_REVIEW_BY_ID_REQUEST,
  GET_MOVIE_REVIEW_BY_ID_SUCCESS,
  GET_MOVIE_REVIEW_BY_ID_FAIL
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

export const movieInfo = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIE_INFO_MOVIEPAGE_SUCCESS:
      return { loading: false, movieInformation: action.payload };
    case GET_MOVIE_INFO_MOVIEPAGE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const movieInfoById = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIE_ID_REQUEST:
      return { loading: true };
    case GET_MOVIE_ID_SUCCESS:
      return { loading: false, movie: action.payload };
    case GET_MOVIE_ID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const movieReviewById = (state = { review :[]}, action) => {
  switch (action.type) {
    case GET_MOVIE_REVIEW_BY_ID_REQUEST:
      return { loading: true };
    case GET_MOVIE_REVIEW_BY_ID_SUCCESS:
      return { loading: false, reiview: action.payload };
    case GET_MOVIE_REVIEW_BY_ID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

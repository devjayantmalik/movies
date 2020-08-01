import * as types from "./types";
import api from "../api";

export const fetchRandomMovies = (callback, error) => async (dispatch) => {
  // fetch the movies
  const res = await api.get("/get_random_movies.php");

  // handle the error
  if (res.status !== 200 || res.data.status === false) {
    if (!!error) {
      error("Failed to fetch data.");
      console.log(res.data.message);
    }

    return;
  }

  // handle the callback
  const movies = res.data.movies;
  if (!!callback) {
    callback();
  }

  // dispatch an action
  return dispatch({ type: types.FETCH_RANDOM_MOVIES, payload: movies });
};

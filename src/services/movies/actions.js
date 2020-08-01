import * as types from "./types";
import api from "../api";

export const fetchRecentMovies = (callback, error) => async (dispatch) => {
  // fetch the movies
  const res = await api.get("/get_recently_added.php");

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
  return dispatch({ type: types.FETCH_RECENT_MOVIES, payload: movies });
};

export const fetchMovieById = (id, callback, error) => async (
  dispatch,
  getState
) => {
  // fetch the movies
  const res = await api.get(`/get_movie_by_id.php?id=${id}`);

  // handle the error
  if (res.status !== 200 || res.data.status === false) {
    if (!!error) {
      error("Failed to fetch data.");
      console.log(res.data.message);
    }

    return;
  }

  // handle the callback
  const movie = res.data.movie;
  if (!!callback) {
    callback();
  }

  // Get the current state
  let state = getState().movies;
  state = [...state, movie];

  // dispatch an action
  return dispatch({ type: types.FETCH_RECENT_MOVIES, payload: state });
};

import axios from "axios";

import * as types from "./types";

const api = axios.create({
  baseURL: "http://localhost/web/movies-api",
});

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

export const fetchMovieByProduction = (id, callback, error) => async (
  dispatch
) => {
  // fetch the movies
  const res = await api.get(`/get_by_production.php?id=${id}`);

  // handle the error
  if (!!error) {
    if (res.status !== 200) {
      return error("Something went wrong.");
    }
    if (res.data.status === false) {
      return error(res.data.message);
    }
  }

  // handle the callback
  const movies = res.data.movies;
  if (!!callback) {
    callback();
  }

  // dispatch an action
  return dispatch({ type: types.FETCH_MOVIES_BY_PRODUCER, payload: movies });
};

import * as types from "./types";
import api from "../api";

export const fetchProducers = (callback, error) => async (
  dispatch,
  getState
) => {
  // fetch the movies
  const res = await api.get("/get_producers.php");

  // handle the error
  if (res.status !== 200 || res.data.status === false) {
    if (!!error) {
      error("Failed to fetch data.");
      console.log(res.data.message);
    }

    return;
  }

  // handle the callback
  const producers = res.data.producers;
  if (!!callback) {
    callback();
  }

  // Get the state
  let state = getState().producers;
  state = { ...state, producers: producers };

  // dispatch an action
  return dispatch({ type: types.FETCH_PRODUCERS, payload: state });
};

export const fetchMovieByProduction = (id, callback, error) => async (
  dispatch,
  getState
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

  // Get the state
  let state = getState().producers;
  state = { ...state, movies: movies };

  // dispatch an action
  return dispatch({ type: types.FETCH_MOVIES_BY_PRODUCER, payload: state });
};

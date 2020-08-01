import { SEARCH_BY_TITLE } from "./types";
import api from "../api";

export const searchByTitle = (title, callback, error) => async (dispatch) => {
  const res = await api.get(`/search_by_title.php?title=${title}`);

  if (!!error) {
    if (res.status !== 200) {
      console.log(res.statusText);
      return error(res.statusText);
    }

    if (res.data.status === false) {
      return error(res.data.message);
    }
  }

  // Handle the callback
  if (!!callback) {
    callback();
  }

  // Get the movies
  const movies = res.data.movies;

  // Dispatch action
  return dispatch({ type: SEARCH_BY_TITLE, payload: movies });
};

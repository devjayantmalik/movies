import { combineReducers } from "redux";
import moviesReducer from "./movies/reducer";
import searchReducer from "./search/reducer";
import cinemasReducer from "./cinemas/reducer";
import producersReducer from "./producers/reducer";

export default combineReducers({
  movies: moviesReducer,
  searches: searchReducer,
  cinemas: cinemasReducer,
  producers: producersReducer,
});

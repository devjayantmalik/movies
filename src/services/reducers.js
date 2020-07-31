import { combineReducers } from "redux";
import moviesReducer from "./movies/reducer";
import imagesReducer from "./images/reducer";

export default combineReducers({
  movies: moviesReducer,
  images: imagesReducer,
});

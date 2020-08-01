import * as types from "./types";

const INITIAL_STATE = {
  producers: [],
  movies: [],
};

export default (state = INITIAL_STATE, action) => {
  const list = Object.values(types);

  return list.indexOf(action.type) === -1 ? state : action.payload;
};

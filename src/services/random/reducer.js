import * as types from "./types";

export default (state = [], action) => {
  const list = Object.values(types);

  return list.indexOf(action.type) === -1 ? state : action.payload;
};

import { combineReducers } from "redux";
import { reducer } from "./reducers";

export const appReducer = combineReducers({
  movies: reducer
});

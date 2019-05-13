import { IAction, IStateMovies } from "src/models";
import * as constants from "../constants";

const initialState: IStateMovies = {
  error: null,
  isLoading: false,
  movies: null,
  order_movies: ""
};

export const reducer = (state = initialState, actions: IAction): any => {
  switch (actions.type) {
    case constants.LOAD_MOVIES_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case constants.LOAD_MOVIES_LIST_SUCCESS:
      return { ...state, isLoading: false, movies: actions.payload };
    case constants.LOAD_MOVIES_LIST_FAIL:
      return { ...state, isLoading: false, error: actions.payload };
    case constants.ORDER_MOVIES_BY_SELECTED_KEY:
      return { ...state, order_movies: actions.payload };
    default:
      return state;
  }
};

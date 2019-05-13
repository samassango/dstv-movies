import * as constants from "../constants";
import { IAction, IMovies, ISortOrder } from "../models";

import fetch from "cross-fetch";
import { api } from "src/api";

export const loadMoviesRequest = (): IAction => {
  return { type: constants.LOAD_MOVIES_LIST_REQUEST };
};

export const moviesIsLoading = (): IAction => {
  return { type: constants.LOAD_MOVIES_LIST_ISLOADING };
};

export const loadMoviesSuccess = (payload: IMovies): IAction => {
  return { type: constants.LOAD_MOVIES_LIST_SUCCESS, payload };
};

export const LoadMoviesFailed = (error: any): IAction => {
  return { type: constants.LOAD_MOVIES_LIST_FAIL, payload: error };
};

export const sortBySelectedOrder = (payload: ISortOrder): IAction => {
  return {
    payload,
    type: constants.ORDER_MOVIES_BY_SELECTED_KEY
  };
};

export const orderBySelected = (
  sortOrder: ISortOrder,
  payload: IMovies
): any => {
  const moviesItems = payload.components[1].items;
  let sortedMoviesItems = moviesItems;
  return (dispatch: any) => {
    dispatch(sortBySelectedOrder(sortOrder));
    try {
      if (sortOrder.valueToOrderBy === "rank") {
        sortedMoviesItems = moviesItems.sort((item1: any, item2: any) => {
          return item1.rank - item2.rank;
        });
      } else {
        if (sortOrder.valueToOrderBy === "releaseDate") {
          sortedMoviesItems = moviesItems.sort((item1: any, item2: any) => {
            return item1.releaseDate - item2.releaseDate;
          });
        }
      }

      payload.components[1].items = sortedMoviesItems;

      dispatch(loadMoviesSuccess(payload));
    } catch (error) {
      dispatch(LoadMoviesFailed(error));
    }
  };
};

export const loadMovies = () => {
  return (dispatch: any) => {
    dispatch(loadMoviesRequest());
    // return fetch("http://demo9595712.mockable.io/getTopFiveMovies", {
    return fetch(api.baseUrl + api.getTopFiveMovies, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(json => dispatch(loadMoviesSuccess(json)))
      .catch(error => dispatch(LoadMoviesFailed(error)));
  };
};

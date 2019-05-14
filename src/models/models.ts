export interface IComponents {
  type: string;
  items: any[];
}

export interface IMovies {
  type: string;
  components: IComponents[];
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface ISortOrder {
  label: string;
  valueToOrderBy: string;
}

export interface IStateMovies {
  isLoading: boolean;
  movies: any;
  error: any;
  order_movies: string;
}

export interface IMoviePoster {
  id?: number;
  type?: string;
  rank?: number;
  synopsis?: string;
  title?: string;
  imageUrl?: string;
  releaseDate?: number;
}

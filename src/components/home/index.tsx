import * as React from "react";
import "./index.css";

import { connect } from "react-redux";

import { IStateMovies } from "../../models";

import * as actions from "../../actions";
import MoviesList from "../movie-list";
import SelectOrder from "../select-order";

import { sortMovies } from "../../utils";

interface IStateMoviesProps {
  loadMovies: () => void;
  movies: any;
  isLoading: boolean;
  error: any;
  order_movies: any;
}
interface ILocalMoviesState {
  selectOrder: any[];
  moviesItem: any[];
}

class Home extends React.Component<IStateMoviesProps, ILocalMoviesState> {
  constructor(props: any) {
    super(props);
    this.state = {
      moviesItem: [],
      selectOrder: []
    };
    this.sortMovies = this.sortMovies.bind(this);
  }
  public async componentDidMount() {
    if (this.props.movies === null) {
      await this.props.loadMovies();
    }
    this.setState({
      moviesItem: this.props.movies.components[1].items,
      selectOrder: this.props.movies.components[0].items
    });
  }

  public sortMovies(valueBy: string) {
    this.setState({
      moviesItem: sortMovies(valueBy, this.props.movies.components[1].items)
    });
  }
  public render() {
    return (
      <div className="container">
        {this.props.movies !== null && <h1>{this.props.movies.type}</h1>}
        {this.props.movies !== null &&
          (this.props.movies.components !== undefined ||
            this.props.movies.components !== null) && (
            <div>
              <SelectOrder
                selectOrder={this.state.selectOrder}
                moviesPayload={this.props.movies}
                sortMovies={this.sortMovies}
              />
              <MoviesList moviesList={this.state.moviesItem} />
            </div>
          )}
        <div>{this.props.isLoading === true && <h4>Movies Loading...</h4>}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadMovies: () => dispatch(actions.loadMovies())
  };
};
const mapStateToProps = (state: IStateMovies) => {
  return {
    error: state.error,
    isLoading: state.isLoading,
    movies: state.movies.movies || null,
    order_movies: state.order_movies
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

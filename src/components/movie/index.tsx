import * as React from "react";
import "./index.css";

import { connect } from "react-redux";
import { IMoviePoster, IMovies, IStateMovies } from "src/models";
import MoviesCard from "../movie-card";

import { Link } from "react-router-dom";
interface IMovieState {
  id: number;
  movieData: IMoviePoster;
}
interface IMoviePosterProps {
  movies: IMovies;
  match: any;
}
class Movie extends React.Component<IMoviePosterProps, IMovieState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: -1,
      movieData: {}
    };
  }

  public componentDidMount() {
    const { id } = this.props.match.params;
    const movieData = this.props.movies.components[1].items.find(
      (data: any) => data.id === Number(id)
    );
    this.setState({ id: Number(id), movieData });
  }
  public render() {
    const url = "/";
    return (
      <div className="container">
        <div className="close-button">
          <Link to={url}>Back To Movies</Link>
        </div>
        {this.props.movies !== null && (
          <MoviesCard
            key={this.state.id}
            expand={true}
            poster={this.state.movieData}
          />
        )}
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state: IStateMovies) => {
  return {
    movies: state.movies.movies || null
  };
};
export default connect(
  mapStateToProps,
  null
)(Movie);

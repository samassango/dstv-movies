import * as React from "react";
import "./index.css";

import { connect } from "react-redux";
import { IMoviePoster } from "src/models";
interface IMovieState {
  id: number;
  movieData: IMoviePoster;
}
class Movie extends React.Component<any, IMovieState> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    // const { id } = this.props.match.params;
    // const movieData = this.props.movies.components[1].find(
    //   (data: any) => data.id === id
    // );
    // this.setState({ id, movieData });
  }
  public render() {
    return (
      <div className="container">
        View detail movie
        <br />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    movies: state.movies.movies
  };
};
export default connect(
  mapStateToProps,
  null
)(Movie);

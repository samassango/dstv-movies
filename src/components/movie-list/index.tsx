import * as React from "react";
import "./index.css";

import MoviesCard from "../movie-card";

// import { Link } from "react-router-dom";

interface IMoviesProps {
  moviesList: any[];
}

class MoviesList extends React.Component<IMoviesProps> {
  public render() {
    return (
      <div className="container">
        {this.props.moviesList.map(poster => {
          // const url: string = "/movie/" + poster.id;
          return (
            // <Link key={poster.id} to={url}>
            <MoviesCard key={poster.id} poster={poster} />
            // </Link>
          );
        })}
      </div>
    );
  }
}

export default MoviesList;

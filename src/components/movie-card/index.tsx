import * as React from "react";
import "./index.css";

import { IMoviePoster } from "src/models";

interface IMoviesCardProps {
  poster: IMoviePoster;
  key: number;
}

interface IMoviesState {
  expandable: boolean;
}

class MoviesCard extends React.Component<IMoviesCardProps, IMoviesState> {
  constructor(props: any) {
    super(props);
    this.state = {
      expandable: false
    };
    this.extraInfo = this.extraInfo.bind(this);
  }
  public extraInfo() {
    this.setState({ expandable: this.state.expandable ? false : true });
  }
  public render() {
    return (
      //   <div className="container">
      <div className="polaroid" onClick={this.extraInfo}>
        <img
          src={this.props.poster.imageUrl}
          alt="5 Terre"
          style={{ width: "20rem", hieght: "18rem" }}
        />
        <div className="container">
          <h4>{this.props.poster.title}</h4>
          <div className="ratings">
            <div>Type</div>
            <div>Rank</div>
            <div>Release Date</div>
            <div className="icons-style">{this.props.poster.type}</div>
            <div className="icons-style">{this.props.poster.rank}</div>
            <div className="icons-style">{this.props.poster.releaseDate}</div>
          </div>
          {this.state.expandable && (
            <div className="expandable">
              <p>{this.props.poster.synopsis}</p>
            </div>
          )}
        </div>
      </div>
      //   </div>
    );
  }
}

export default MoviesCard;

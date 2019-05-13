import * as React from "react";
import "./index.css";

import { IMovies } from "../../models";
import { ISortOrder } from "../../models";

interface ISelectOrderProps {
  selectOrder: ISortOrder[];
  moviesPayload: IMovies;
  sortMovies: (orderBy: string) => void;
}

class SelectOrder extends React.Component<ISelectOrderProps> {
  constructor(props: any) {
    super(props);
    this.orderByEventHandler = this.orderByEventHandler.bind(this);
  }
  public orderByEventHandler(orderBy: ISortOrder) {
    this.props.sortMovies(orderBy.valueToOrderBy);
    // this.props.orderBySelected(orderBy, this.props.moviesPayload);
  }
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          {this.props.selectOrder !== null &&
            this.props.selectOrder.map(orderItem => {
              return (
                <div key={orderItem.valueToOrderBy} className="order-by-button">
                  {"Order By >>> "}
                  <br />
                  <button
                    className="button"
                    onClick={this.orderByEventHandler.bind(this, orderItem)}
                  >
                    {orderItem.label}
                  </button>
                </div>
              );
            })}
        </p>
      </div>
    );
  }
}

export default SelectOrder;

import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showinfo: false,
  };
  handleInfo = () => {
    this.setState({
      showinfo: !this.state.showinfo,
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { RemoveTour } = this.props;

    return (
      <div className="tour-block">
        <div className="tour-block-img">
          <i onClick={() => RemoveTour(id)} className="fas fa-window-close"></i>
          <div className="content">
            <h2>{name} </h2>
            <h3>{city}</h3>
          </div>
          <img src={img} alt="//" />
        </div>
        <div className="tour-block-content">
          <strong>Info </strong>
          <i onClick={this.handleInfo} className="far fa-caret-square-down"></i>
          {this.state.showinfo ? <p>{info}</p> : null}
        </div>
      </div>
    );
  }
}

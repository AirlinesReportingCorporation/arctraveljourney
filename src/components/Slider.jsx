import React, { Component } from "react";
import ReactDOM from "react-dom";

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var num = this.props.num * 1080;
    console.log(num);
    return <div className="slider" style={{width: num + 'px'}}>{this.props.children}</div>;
  }
}

export default Slider;

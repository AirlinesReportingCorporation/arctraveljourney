import React, { Component } from "react";
import ReactDOM from "react-dom";

class Helloworld extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Helloworld;

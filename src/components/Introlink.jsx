import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import ReactDOM from "react-dom";

class Introlink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.historyPush = this.historyPush.bind(this);
  }

  handleClick() {
    this.historyPush();
  }

  historyPush() {
    this.props.history.push(this.props.to);
  }

  render() {
    return <a onClick={this.handleClick}>{this.props.children}</a>;
  }
}

export default withRouter(Introlink);

import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import ReactDOM from "react-dom";

class Customlink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.historyPush = this.historyPush.bind(this);
  }

  handleClick() {
    if (this.props.type == "start") {
      //window.scrollTo(0, 0);
      console.log("start");
    } else {
      window.scrollTo(0, 0);
    }

    setTimeout(this.historyPush(), 10000);

    //this.historyPush();
  }

  historyPush() {
    this.props.history.push(this.props.to);
  }

  render() {
    return <a onClick={this.handleClick}>{this.props.children}</a>;
  }
}

export default withRouter(Customlink);

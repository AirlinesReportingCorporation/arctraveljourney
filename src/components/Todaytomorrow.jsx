import React, { Component } from "react";
import ReactDOM from "react-dom";

class Todaytomorrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curState: "Today",
      prevState: "Tomorrow",
      curStyles: "todayBG",
      prevStyles: "tomorrowBG"
    }
    this.flipClick = this.flipClick.bind(this);
    console.log(this.props.tomorrow);
  }

  flipClick() {
    if (this.state.curState == "Today" && this.props.backSide != "") {
      this.setState({ curState: "Tomorrow" });
      this.setState({ prevState: "Today" });
    } else {
      this.setState({ curState: "Today" });
      this.setState({ prevState: "Tomorrow" });
    }
  }

  render() {
    let slideContent;
    let curStyles;
    let prevStyles;
    let html;

    if (this.state.curState == "Today") {
      slideContent = this.props.today;
      curStyles = "todayBG";
      prevStyles = "tomorrowBG";
    } else {
      slideContent = this.props.tomorrow;
      prevStyles = "todayBG";
      curStyles = "tomorrowBG";
    }

    return (<div className="todayTomorrowContainer">

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="todayTomorrowMain todayBG">
              <div className="todayTomorrowMainTitle">Today</div>
              <div className="todayTomorrowMainContent">
                {this.props.today}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="todayTomorrowMain tomorrowBG">
              <div className="todayTomorrowMainTitle">Tomorrow</div>
              <div className="todayTomorrowMainContent">
                {this.props.tomorrow}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Todaytomorrow;

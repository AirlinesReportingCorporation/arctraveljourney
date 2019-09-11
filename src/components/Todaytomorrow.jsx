import React, {Component} from "react";
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
      this.setState({curState: "Tomorrow"});
      this.setState({prevState: "Today"});
    } else {
      this.setState({curState: "Today"});
      this.setState({prevState: "Tomorrow"});
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
      <div className={'todayTomorrowMain ' + curStyles}>
        <div className="todayTomorrowMainTitle">{this.state.curState}</div>
        <div className="todayTomorrowMainContent">
          {slideContent}
        </div>
      </div>
      <div onClick={this.flipClick} className={"todayTomorrowSecondary animated pulse infinite " + prevStyles}>
        <div className="todayTomorrowSecondaryContent">
          <div className="todayTomorrowTouch">Touch to See</div>
          <div className="todayTomorrowSecondaryTitle">{this.state.prevState}</div>
        </div>
      </div>
    </div>);
  }
}

export default Todaytomorrow;

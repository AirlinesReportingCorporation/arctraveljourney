import React, {Component} from "react";
import ReactDOM from "react-dom";

class Flipslide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curState: "frontSide",
      styles: "fontSide sliderContent"
    }
    this.flipClick = this.flipClick.bind(this);
  }

  componentDidUpdate() {
    setTimeout(function() {}, 1000);
    this.state.styles = "frontSide sliderContent " + this.props.colorClass + " animated flipOutY";
    setTimeout(function() {}, 1000);
  }

  flipClick() {
    if (this.props.noclick == "true") {} else if (this.state.curState == "frontSide" && this.props.backSide != "") {
      this.setState({curState: "backSide"});
    } else {
      this.setState({curState: "frontSide"});
    }
  }

  render() {
    let slideContent;

    if (this.state.curState == "frontSide") {
      slideContent = this.props.frontSide;
      this.state.styles = "frontSide sliderContent " + this.props.colorClass + " animated flipInY";
    } else {
      slideContent = this.props.backSide;
      this.state.styles = "backSide sliderContent " + this.props.colorClass + " animated flipInY";
    }

    return (<div onClick={this.flipClick} className={this.state.styles}>
      {slideContent}
    </div>);
  }
}

export default Flipslide;

import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import ReactDOM from "react-dom";
import './Slidenav.scss';
import Customlink from './Customlink.jsx';
import {Drawer} from 'antd';

class Slidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arcContent: "",
      visible: false,
      arcButton: ""
    }
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.arrowClick = this.arrowClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  showDrawer() {
    this.setState({visible: true});
  };

  onClose() {
    this.setState({visible: false});
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = window.scrollY;

    var path = this.props.location.pathname;

    var content = <div className="animated pulse infinite arcBtn" onClick={this.showDrawer}>
      <img src="img/arcIcon.png" alt="ARC's Perspective"/>
    </div>;


    if(path == "/inspire/"){
      if((scrollTop >= 5500 && scrollTop <= 7400)){
        var dContent = <div><img className="homepageLogo" src=" img/homepage_logo.png" alt=""/><h1>Managing Complex Global Data</h1><p>ARC has the world’s most comprehensive air travel data, which organizations across the travel industry use to make more informed decisions about retailing strategy.</p>

        <p>As airline retailing continues to evolve and grow more complex, ARC will help organizations across the travel industry manage and analyze their data, helping them hone their retailing strategies. This could include the management of traveler profiles, where business travelers could opt in to share their preferences. This could enable even more personalized marketing efforts to inspire travel. </p></div>;


        this.setState({arcContent: dContent});
        this.setState({arcButton: content});

      }
      else {
        this.setState({arcButton: ""});
      }
    }
  }

  arrowClick(direction) {
    var slideHeight = 1920;
    var slideWidth = 1080;
    var slideCount = this.props.slideCount;
    var curPosTop = document.documentElement.scrollTop;
    var curPosLeft = $('.startPage').css("margin-left");
    curPosLeft = parseInt(curPosLeft) * -1;

    var min = 0;
    var max = slideCount * slideHeight;
    var closestTop = 0;
    var closestLeft = 0;

    if (direction == "up") {
      if (curPosTop >= slideHeight) {
        var rem = Math.ceil(curPosTop / slideHeight);
        closestTop = (rem - 1) * slideHeight;
      } else {
        closestTop = 0;
      }
      window.scroll({top: closestTop, left: closestLeft, behavior: 'smooth'});
    } else if (direction == "down") {
      if (curPosTop <= ((slideCount - 1) * slideHeight)) {
        var rem = Math.round(curPosTop / slideHeight);
        closestTop = (rem + 1) * slideHeight;
      } else {
        closestTop = (slideCount - 1) * slideHeight;
      }
      window.scroll({top: closestTop, left: closestLeft, behavior: 'smooth'});
    } else if (direction == "right") {
      if (curPosLeft < ((slideCount - 1) * slideWidth)) {
        var rem = Math.round(curPosLeft / slideWidth);
        closestLeft = (rem + 1) * slideWidth;
      } else if (curPosLeft == ((slideCount - 1) * slideWidth)) {
        closestLeft = curPosLeft;
      } else {
        closestLeft = (slideCount - 1) * slideWidth;
      }
      $('.startPage').animate({
        marginLeft: closestLeft * -1 + 'px'
      }, 400, "linear");
    } else if (direction == "left") {

      if (curPosLeft >= slideWidth) {
        var rem = Math.ceil(curPosLeft / slideWidth);
        closestLeft = (rem - 1) * slideWidth;
      } else {
        closestLeft = 0;
      }
      $('.startPage').animate({
        marginLeft: closestLeft * -1 + 'px'
      }, 400, "linear");
    }

  }

  render() {
    const showSlideCtrls = this.props.display;
    const slideDirection = this.props.slideDirection;

    let controls;
    if (showSlideCtrls) {
      if (slideDirection == "vertical") {
        controls = <div className="slideBtnContainer">
          <div onClick={() => this.arrowClick('up')} className="slideArrow slideArrow1"><img src="img/slideArrow.png" alt=""/></div>
          <div onClick={() => this.arrowClick('down')} className="slideArrow slideArrow2"><img src="img/slideArrow.png" alt=""/></div>
        </div>;
      } else if (slideDirection == "horizontal") {
        controls = <div className="slideBtnContainer">
          <div onClick={() => this.arrowClick('left')} className="slideArrow slideArrow3"><img src="img/slideArrow.png" alt=""/></div>
          <div onClick={() => this.arrowClick('right')} className="slideArrow slideArrow4"><img src="img/slideArrow.png" alt=""/></div>
        </div>;
      }

    }

    return (<div>
      <div className="slideControls">

        <Customlink to="/">
          <div className="navBtn">
            <img src="img/homeIcon.png" alt="Home Icon"/>
          </div>
        </Customlink>

        {controls}

        <Customlink to="/navigation/">
          <div className="navBtn">
            <img src="img/ellipsisIcon.png" alt="More"/>
          </div>
        </Customlink>

      </div>
      {this.state.arcButton}
      <Drawer className="arctake" placement="right" width="960px" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {this.state.arcContent}
          <img className="closeIcon" onClick={this.onClose} src="img/closeIcon.png" alt="Close"/>
        </div>
      </Drawer>
    </div>);
  }
}

export default withRouter(Slidenav);

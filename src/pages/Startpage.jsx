import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Drawer, Button} from 'antd';
import {useSwipeable, Swipeable} from 'react-swipeable'
import {withRouter} from 'react-router-dom';
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import './Startpage.scss';
import Slider from '../components/Slider.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Customlink from '../components/Customlink.jsx';

class Startpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      scrollPos: 0
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.tapBegin = this.tapBegin.bind(this);
    this.tapGo = this.tapGo.bind(this);
    this.tapGoX = this.tapGoX.bind(this);
    this.linkTo = this.linkTo.bind(this);
    this.wheel = this.wheel.bind(this);
  }

  tapBegin() {
    $('.startPage').animate({
      marginLeft: 1080 * -1 + 'px'
    }, 400, "linear");
  }

  tapGo() {
    $('.startPage').animate({
      marginLeft: 1080 * -4 + 'px'
    }, 400, "linear");
  }

  tapGoX(n) {
    $('.startPage').animate({
      marginLeft: 1080 * -n + 'px'
    }, 400, "linear");
  }

  wheel(e) {

    var fscrollPos = 0;

    var el = document.querySelector('.startPage').getBoundingClientRect();
    var width = el.width;
    var windowWidth = window.innerWidth;

    var scrollLeft = el.left;
    var scrollRight = el.right;

    var delta = this.state.scrollPos + (e.deltaY * 2);

    var diff = (scrollLeft + delta);

    if (diff > 0) {
      fscrollPos = 0;
    }
    else if ( -(width - windowWidth) >= delta ) {
      fscrollPos = -(width - windowWidth)
    }
    else {
      fscrollPos = delta;
    }

    //keep translate within element bounds
    if(fscrollPos > 0) {
      fscrollPos = 0;
    }
    if(fscrollPos < -(width)) {
      fscrollPos = -(width);
    }

    this.setState({scrollPos: fscrollPos})

  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);

    window.addEventListener('wheel', function(e) {
      e.preventDefault();
    }, {passive: false});

    var windowXpos = document.querySelector('.startPage').scrollLeft;
    console.log(windowXpos);

  }

  showDrawer() {
    this.setState({visible: true});
  };

  onClose() {
    this.setState({visible: false});
  };

  linkTo(link) {
    //console.log(this.props.history.push(link));
    this.props.history.push(link);
  }

  scrollHandler(e) {}

  render() {

    let marginl = 0;
    var anchor = this.props.location.anchor;
    var slideWidth = -1080;
    var n = 4;
    switch (anchor) {
      case "inspire":
        marginl = n * slideWidth;
        break;
      case "shop":
        marginl = (n + 1) * slideWidth;
        break;
      case "offer":
        marginl = (n + 2) * slideWidth;
        break;
      case "purchase":
        marginl = (n + 3) * slideWidth;
        break;
      case "pretrip":
        marginl = (n + 4) * slideWidth;
        break;
      case "trip":
        marginl = (n + 5) * slideWidth;
        break;
      case "outcome":
        marginl = (n + 6) * slideWidth;
        break;
      case "wrapup":
        marginl = (n + 7) * slideWidth;
        break;
      default:
        // code block
    }

    return (<div className="sliderContainer">
      <div className="startPage pagePaneContainer" style={{
          transform: 'translateX(' + this.state.scrollPos + 'px)'
        }} ref={(e) => this.slideMenu = e} onWheel={(e) => this.wheel(e)}>
        <Pageslide noArrow="false">
          <div className="verticalSlide slide1 ">
              <h1 className="animated slideInLeft delay-1s">The
                <br/>Travel
                <br/>Journey</h1>

              
            <img className="homepageLogo" src="https://www2.arccorp.com/globalassets/traveljourney/img/homepage_logo.png" alt=""/>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="verticalSlide textSlide textSlide1">
            <div className="textSlideContent contentLeft">
              <h1>The travel journey is complex, and it is becoming increasingly personalized.</h1>
              <p>Continue</p>
              <img className="textSlideArrow animated shake slowest infinite" src="https://www2.arccorp.com/globalassets/traveljourney/img/textSlideArrow.png" alt=""/>
              <img src="https://www2.arccorp.com/globalassets/traveljourney/img/startPageIcon2.png" alt=""/>
            </div>
          </div>

        </Pageslide>
        <Pageslide noArrow="false">
          <div className="verticalSlide textSlide textSlide2">
            <img src="https://www2.arccorp.com/globalassets/traveljourney/img/startPageIcon3.png" alt=""/>
            <h1>It begins with a spark of travel inspiration, spans the entirety of trip planning and continues through the trip itself.
            </h1>
            <p>Continue</p>
            <img className="textSlideArrow animated shake slowest infinite" src="https://www2.arccorp.com/globalassets/traveljourney/img/textSlideArrow.png" alt=""/>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="verticalSlide textSlide textSlide3">
            <div className="textSlideTop">
              <h1>See how the travel industry can create a more seamless, integrated travel journey, from beginning to end.
              </h1>/>
              <img src="https://www2.arccorp.com/globalassets/traveljourney/img/startPageIcon4.png" alt=""/>
            </div>
            <div className="textSlideBottom">
              <p>Explore the Travel Journey.</p>
              <button className="animated pulse slower infinite">Let's Go</button>
            </div>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className=" verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="row no-gutters">
                <div className="col-6">
                  <div className="section1">
                    <div className="stepNumber">Step 1</div>
                    <h1>Inspire.</h1>
                    <div className="sep"></div>
                    <p>The traveler is inspired
                      <br/>to take a trip.</p>

                  </div>
                </div>
                <div className="col-6">
                  <div className="section2">
                    <img src="https://www2.arccorp.com/globalassets/traveljourney/img/inspire1.png"/>
                    <p>Travel brands can spark inspiration.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="shopPage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="row no-gutters">
                <div className="col-6">
                  <div className="section1">
                    <div className="stepNumber">Step 2a</div>
                    <h1>Shop.</h1>
                    <div className="sep"></div>
                    <p>The traveler provides the
                      <br/>parameters for their desired trip.</p>

                  </div>
                </div>
                <div className="col-6">
                  <div className="section2">
                    <img src="https://www2.arccorp.com/globalassets/traveljourney/img/Shop.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="offerPage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="row no-gutters">
                <div className="col-6">
                  <div className="section1">
                    <div className="stepNumber">Step 2b</div>
                    <h1>Offer.</h1>
                    <div className="sep"></div>
                    <p>After the traveler searches for a flight,
                      <br/>they recieve a variety of offers.</p>

                  </div>
                </div>
                <div className="col-6">
                  <div className="section2">
                    <img src="https://www2.arccorp.com/globalassets/traveljourney/img/Offer.png"/>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="purchasePage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="row no-gutters">
                <div className="col-6">
                  <div className="section1">
                    <div className="stepNumber">Step 3</div>
                    <h1>Purchase.</h1>
                    <div className="sep"></div>
                    <p>The traveler purchases their airline tickets
                      <br/>(through a process that’s more complex than you might expect).</p>

                  </div>
                </div>
                <div className="col-6">
                  <div className="section2">
                    <img src="https://www2.arccorp.com/globalassets/traveljourney/img/Purchase.png"/>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="pretripPage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="row no-gutters">
                <div className="col-6">
                  <div className="section1">
                    <div className="stepNumber">Step 4</div>
                    <h1>Pre-Trip.</h1>
                    <div className="sep"></div>
                    <p>The traveler actively prepares
                      <br/>for their trip.</p>

                  </div>
                </div>
                <div className="col-6">
                  <div className="section2">
                    <img src="https://www2.arccorp.com/globalassets/traveljourney/img/Pretrip.png"/>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="tripPage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="row no-gutters">
                <div className="col-6">
                  <div className="section1">
                    <div className="stepNumber">Step 5</div>
                    <h1>Trip.</h1>
                    <div className="sep"></div>
                    <p>The traveler embarks on their journey.
                    </p>

                  </div>
                </div>
                <div className="col-6">
                  <div className="section2">
                    <img src="https://www2.arccorp.com/globalassets/traveljourney/img/Trip.png"/>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="outcomePage verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="row no-gutters">
                <div className="col-6">
                  <div className="section1">
                    <div className="stepNumber">Step 6</div>
                    <h1>Outcome.</h1>
                    <div className="sep"></div>
                    <p>The traveler's experience — positive, neutral or negative — informs their own future decisions, as well as those of friends, family, colleagues and social media connections with whom they share their experiences.</p>

                  </div>
                </div>
                <div className="col-6">
                  <div className="section2">
                    <img src="https://www2.arccorp.com/globalassets/traveljourney/img/Outcome.png"/>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </Pageslide>
        <Pageslide noArrow="false">
          <div className="textSlide verticalSlide wrapupSlide">
            <h2>The Journey Continues.</h2>
            <p>The travel journey repeats with every trip and travel experience. Travel brands can build momentum &mdash; and loyalty &mdash; by continuously advancing their offerings and delivering even better customer experiences.</p>
            <div className="wrapupArrow">



            </div>
          </div>
        </Pageslide>
      </div>

    </div>);
  }
}

export default withRouter(Startpage);

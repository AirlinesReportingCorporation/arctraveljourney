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

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

class Startpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      scrollPos: 0,
      paneWidth: "900vw"
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

    console.log("wheel");

    var fscrollPos = 0;

    var el = document.querySelector('.startPage').getBoundingClientRect();
    var width = el.width;
    var windowWidth = window.innerWidth;

    var scrollLeft = el.left;
    var scrollRight = el.right;

    var delta = this.state.scrollPos + (e.deltaY * 2);

    window.scrollTo(e.deltaY, 0);

    var diff = (scrollLeft + delta);

    if (diff > 0) {
      fscrollPos = 0;
    } else if (-(width - windowWidth) >= delta) {
      fscrollPos = -(width - windowWidth)
    } else {
      fscrollPos = delta;
    }

    //keep translate within element bounds
    if (fscrollPos > 0) {
      fscrollPos = 0;
    }
    if (fscrollPos < -(width)) {
      fscrollPos = -(width);
    }

    this.setState({scrollPos: fscrollPos})

  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname);

    window.addEventListener('wheel', function(e) {
      e.preventDefault();
    }, {passive: false});

    document.querySelector('div > .startPage  ').addEventListener('wheel', function(e) {
      document.querySelector('div > .startPage  ').scrollBy(e.deltaY, 0, "smooth");
    }, {passive: true});

    var windowXpos = document.querySelector('.startPage').scrollLeft;

    var totalWidth = 0;

    var children = document.querySelectorAll('.pageSlide');

    for (var i = 0; i < children.length; i++) {
      totalWidth += children[i].getBoundingClientRect().width;
      console.log(i + ":" + children[i].getBoundingClientRect().width);
    }

    this.setState({paneWidth: totalWidth});

    //new SimpleBar(document.querySelector('.startPage'));

  }

  componentDidUpate() {
    /*var totalWidth = 0;

    var children = document.querySelectorAll('.pageSlide');

    for (var i = 0; i < children.length; i++) {
      totalWidth += children[i].getBoundingClientRect().width;
      console.log(i + ":" + children[i].getBoundingClientRect().width);
    }

    this.setState({paneWidth: totalWidth});*/
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
    //onWheel={(e) => this.wheel(e)}
    return (<Parallax className="startPage pagePaneContainer" horizontal="horizontal" ref={ref => (this.parallax = ref)} pages={9} onWheel={(e) => this.wheel(e)}>

      <ParallaxLayer offset={.25} speed={.5}>
        <h2 className="slide1-subtitle">Explore</h2>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0}>
        <img className="slide1-logo" src="https://www2.arccorp.com/globalassets/traveljourney/img/homepage_logo.png" alt=""/>
      </ParallaxLayer>

      <ParallaxLayer offset={.25} speed={1} style={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <h1 className="slide1-title animated slideInLeft delay-1s">The
          <br/>Travel
          <br/>Journey</h1>
      </ParallaxLayer>

      <ParallaxLayer offset={.5} speed={.8} style={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <img className="slide1-arrow" src="https://www2.arccorp.com/globalassets/traveljourney/web/img/slide1-plane.png" alt=""/>
      </ParallaxLayer>

      <ParallaxLayer offset={.7} speed={.18} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/inspire-back1.png" alt="" className="backImage backImage1"/>
      </ParallaxLayer>

      <ParallaxLayer offset={.6} speed={.3} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/inspire-back2.png" alt="" className="backImage backImage2"/>
      </ParallaxLayer>

      <ParallaxLayer offset={.95} speed={.15} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/inspire-backWords.png" alt="" className="backImage backImageWords"/>
      </ParallaxLayer>

      <ParallaxLayer offset={.7} speed={.1} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <img className="mainImage" src="https://www2.arccorp.com/globalassets/traveljourney/img/inspire1.png"/>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={.5}>
        <Pageslide noArrow="false">
          <div className=" verticalSlide titleSlide">
            <div className="pagePaneContent">
              <div className="row no-gutters">
                <div className="col-12">
                  <div className="section1">
                    <div className="stepNumber">Step 1</div>
                    <h1>Inspire.</h1>
                    <div className="sep"></div>
                    <p>The traveler is inspired
                      <br/>to take a trip.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Pageslide>
      </ParallaxLayer>
      <ParallaxLayer offset={3.8} speed={.5}>
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
      </ParallaxLayer>
      <ParallaxLayer offset={2.8} speed={.5}>
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
      </ParallaxLayer>
      <ParallaxLayer offset={3.8} speed={.5}>
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
      </ParallaxLayer>
      <ParallaxLayer offset={4.8} speed={.5}>
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
      </ParallaxLayer>
      <ParallaxLayer offset={5.8} speed={.5}>
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
      </ParallaxLayer>
      <ParallaxLayer offset={6.8} speed={.5}>
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
      </ParallaxLayer>
      <ParallaxLayer offset={8} speed={1}>
        <Pageslide noArrow="false">
          <div className="textSlide verticalSlide wrapupSlide">
            <h2>The Journey Continues.</h2>
            <p>The travel journey repeats with every trip and travel experience. Travel brands can build momentum &mdash; and loyalty &mdash; by continuously advancing their offerings and delivering even better customer experiences.</p>
            <div className="wrapupArrow"></div>
          </div>
        </Pageslide>
      </ParallaxLayer>
    </Parallax>);
  }
}

export default withRouter(Startpage);

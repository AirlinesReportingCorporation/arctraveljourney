import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring';

import { Drawer, Button } from 'antd';

import { withRouter } from 'react-router-dom';
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import './Startpage.scss';
import Topnav from '../components/Topnav.jsx';
import smoothscroll from 'smoothscroll-polyfill';
import LazyLoad from 'react-lazyload';
import Startnav from '../components/Startnav.jsx';


smoothscroll.polyfill();

class Startpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      scrollPos: 0,
      paneWidth: "900vw",
      xy: [0, 0],
      mobile: false,
      revealId: 1,
      revealClass: "fadeIn"
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.linkTo = this.linkTo.bind(this);
    this.wheel = this.wheel.bind(this);
    this.setHorizontalWidth = this.setHorizontalWidth.bind(this);
    this.onResize = this.onResize.bind(this);
    this.scrollBy = this.scrollBy.bind(this);
    this.scrollReveal = this.scrollReveal.bind(this);
  }

  wheel(e) {

    //console.log("wheel");

    var fscrollPos = 0;

    var el = document.querySelector('.startPage').getBoundingClientRect();
    var container = document.querySelector('.startPage');
    var width = el.width;
    var windowWidth = window.innerWidth;

    var scrollLeft = el.left;
    var scrollRight = el.right;

    var delta = this.state.scrollPos + (e.deltaY * 2);

    container.scrollTo(e.deltaY, 0);

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

    this.setState({ scrollPos: fscrollPos })

  }

  scrollReveal(props, id, event, classname) {

    if (event === "enter") {
      if (classname === null || classname === "") {
        classname = "fadeIn";
      }
    }
    else if (event === "leave") {
      if (classname === null || classname === "") {
        classname = "fadeOut";
      }
    }

    this.setState({ revealId: id });
    this.setState({ revealClass: classname })
  }

  setHorizontalWidth() {
    var totalWidth = 0;

    var children = document.querySelectorAll('.horizontalSlide');

    for (var i = 0; i < children.length; i++) {
      totalWidth += children[i].getBoundingClientRect().width;
      //console.log(i + ":" + children[i].getBoundingClientRect().width);
    }

    this.setState({ paneWidth: totalWidth });
  }

  onResize() {
    console.log("====== Resize ======");
    if (window.innerWidth > 768) {
      this.setState({ mobile: false });
    }
    else {
      this.setState({ mobile: true });
    }
  }

  scrollBy(e) {
    if (!this.state.mobile) {
      document.querySelector('.startPageWrapper').scrollBy(e.deltaY * 1.5, 0, "smooth");
    }
  }

  componentDidMount() {

    this.props.routeUpdate(this.props.location.pathname);

    /*window.addEventListener('wheel', function(e) {
      e.preventDefault();
    }, {passive: false});*/

    document.querySelector('.startPage').addEventListener('wheel', this.scrollBy, { passive: true });

    window.addEventListener('resize', this.onResize);

    this.setHorizontalWidth();
    this.onResize();

  }

  componentWillUnmount() {
    document.querySelector('.startPage').removeEventListener('wheel', this.scrollBy, true);
    window.removeEventListener('resize', this.onResize, false);
  }

  componentDidUpate() {
    var totalWidth = 0;

    var children = document.querySelectorAll('.horizontalSlide');

    for (var i = 0; i < children.length; i++) {
      totalWidth += children[i].getBoundingClientRect().width;
      console.log(i + ":" + children[i].getBoundingClientRect().width);
    }

    this.setState({ paneWidth: (children.length * 960) });
  }

  showDrawer() {
    this.setState({ visible: true });
  };

  onClose() {
    this.setState({ visible: false });
  };

  linkTo(link) {
    //console.log(this.props.history.push(link));
    this.props.history.push(link);
  }

  scrollHandler(e) { }

  render() {
    //onWheel={(e) => this.wheel(e)}
    /*
      style={{
        "width" : this.state.paneWidth
      }}
    */

    return (<div className="startPageWrapper">
      <div className="startPage pagePaneContainer" style={{
        "width": !this.state.mobile ? this.state.paneWidth : ""
      }}>

        <Startnav />



        <div className="horizontalSlide horizontalSlide1">
          <div className="slide-subtitle">
            Explore
              </div>
          <h1 className="mainTitle">
            The <br />Travel <br />Journey
              </h1>
          <LazyLoad offset={100}><img className="slide1-arrow" src="https://www2.arccorp.com/globalassets/traveljourney/web/img/slide1-plane.png" alt="" /></LazyLoad>
        </div>


        <div className="horizontalSlide ">
          <LazyLoad offset={100}>
            <img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/inspire-back1.png" alt="" className="backImage backImage1" />
          </LazyLoad>

          <LazyLoad offset={100}>
            <img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/inspire-back2.png" alt="" className="backImage backImage2" />
          </LazyLoad>
          <LazyLoad offset={100}>
            <img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/inspire-backWords.png" alt="" className="backImage backImageWords" />
          </LazyLoad>
          <LazyLoad offset={100}>
            <img className="mainImage" src="https://www2.arccorp.com/globalassets/traveljourney/img/inspire1.png" />
          </LazyLoad>
        </div>

        <div className="horizontalSlide horizontalSlide--left half">
          <div className="slide-subtitle slide-subtitle--step">
            Step 1
            </div>
          <div className="slide-title slide-title--inspire">
            Inspire.
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/img/step1-inspire.png" alt="Inspire" /></LazyLoad>
          </div>
          <div className="slide-sep slide-sep--inspire">&nbsp;</div>
          <div className="slide-content">
            <strong>The traveler is inspired to take a trip.</strong> Inspiration can be found everywhere, and it can look different: business trips, family vacations, luxury getaways, etc.
          </div>
          <Link to="/inspire/">
            <button className="exploreBtn exploreBtn--inspire">
              Explore <i className="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>


        <div className="horizontalSlide horizontalSlide--shop">
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/shop-back2.png" alt="" className="backImage backImage2" /></LazyLoad>
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/shop-backWords.png" alt="" className="backImage backImageWords" /></LazyLoad>
          <LazyLoad offset={100}><img className="mainImage" src="https://www2.arccorp.com/globalassets/traveljourney/web/img/Shop-alt.png" /></LazyLoad>
        </div>

        <div className="horizontalSlide horizontalSlide--left  half">
          <div className="slide-subtitle slide-subtitle--step">
            Step 2A
        </div>
          <div className="slide-title slide-title--shop">
            Shop.
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/slide2-shop.png" alt="shop" /></LazyLoad>
          </div>
          <div className="slide-sep slide-sep--shop">&nbsp;</div>
          <div className="slide-content">
            <strong>The traveler provides the parameters for their desired trip.</strong>
          </div>
          <div className="slide-content">
            Learn how the shopping experience shapes the trip.
          </div>
          <Link to="/shop/">
            <button className="exploreBtn exploreBtn--shop">
              Explore <i className="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>

        <div className="horizontalSlide horizontalSlide--offer">
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/offer-backWords.png" alt="" className="backImage backImageWords" /></LazyLoad>
          <LazyLoad offset={100}><img className="mainImage" src="https://www2.arccorp.com/globalassets/traveljourney/web/img/offer-alt.png" /></LazyLoad>
        </div>

        <div className="horizontalSlide horizontalSlide--left  half">
          <div className="slide-subtitle slide-subtitle--step">
            Step 2B
        </div>
          <div className="slide-title slide-title--offer">
            Offer.
        </div>
          <div className="slide-sep slide-sep--offer">&nbsp;</div>
          <div className="slide-content">
            <strong>After the traveler searches for a flight, they receive a variety of offers. </strong>
          </div>
          <div className="slide-content">
            See how those offers are generated.
        </div>
          <Link to="/offer/">
            <button className="exploreBtn exploreBtn--offer">
              Explore <i className="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>

        <div className="horizontalSlide horizontalSlide--purchase">
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/purchase-backWords.png" alt="" className="backImage backImageWords" /></LazyLoad>
          <LazyLoad offset={100}><img className="mainImage" src="https://www2.arccorp.com/globalassets/traveljourney/web/img/purchase-alt.png" /></LazyLoad>
        </div>

        <div className="horizontalSlide horizontalSlide--left  half">
          <div className="slide-subtitle slide-subtitle--step">
            Step 3
        </div>
          <div className="slide-title slide-title--purchase">
            Purchase.
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/slide4-purchase.png" alt="purchase" /></LazyLoad>
          </div>
          <div className="slide-sep slide-sep--purchase">&nbsp;</div>
          <div className="slide-content">
            <strong>The traveler purchases their airlines tickets (through a process that's more complex than you might expect).</strong>
          </div>
          <div className="slide-content">
            Learn how the purchase works, and how we can enhance it.
        </div>
          <Link to="/purchase/">
            <button className="exploreBtn exploreBtn--purchase">
              Explore <i className="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>

        <div className="horizontalSlide horizontalSlide--pretrip">
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/pretrip-backWords.png" alt="" className="backImage backImageWords" /></LazyLoad>
          <LazyLoad offset={100}><img className="mainImage mainImage--vertical" src="https://www2.arccorp.com/globalassets/traveljourney/web/img/pretrip-alt.png" /></LazyLoad>
        </div>

        <div className="horizontalSlide horizontalSlide--left  half">
          <div className="slide-subtitle slide-subtitle--step">
            Step 4
        </div>
          <div className="slide-title slide-title--pretrip">
            Pre-Trip.
        </div>
          <div className="slide-sep slide-sep--pretrip">&nbsp;</div>
          <div className="slide-content">
            <strong>The traveler actively prepares for their trip</strong>
          </div>
          <div className="slide-content">
            See why this step of the travel journey is often underestimated.
        </div>
          <Link to="/pretrip/">
            <button className="exploreBtn exploreBtn--pretrip">
              Explore <i className="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>

        <div className="horizontalSlide horizontalSlide--trip">
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/trip-backWords.png" alt="" className="backImage backImageWords" /></LazyLoad>
          <LazyLoad offset={100}><img className="mainImage mainImage--vertical" src="https://www2.arccorp.com/globalassets/traveljourney/web/img/trip-alt.png" /></LazyLoad>
        </div>

        <div className="horizontalSlide horizontalSlide--left  half">
          <div className="slide-subtitle slide-subtitle--step">
            Step 5
        </div>
          <div className="slide-title slide-title--trip">
            Trip.
        </div>
          <div className="slide-sep slide-sep--trip">&nbsp;</div>
          <div className="slide-content">
            <strong>The traveler embarks on their journey.</strong>
          </div>
          <div className="slide-content">
            With dozens of touch points on the day of travel, brands have many opportunities to reduce friction.
        </div>
          <Link to="/trip/">
            <button className="exploreBtn exploreBtn--trip">
              Explore <i className="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>

        <div className="horizontalSlide horizontalSlide--outcome">
          <LazyLoad offset={100}><img src="https://www2.arccorp.com/globalassets/traveljourney/web/img/outcome-backWords.png" alt="" className="backImage backImageWords" /></LazyLoad>
          <LazyLoad offset={100}><img className="mainImage mainImage--vertical" src="https://www2.arccorp.com/globalassets/traveljourney/web/img/outcome-alt.png" /></LazyLoad>
        </div>

        <div className="horizontalSlide horizontalSlide--left  half">
          <div className="slide-subtitle slide-subtitle--step">
            Step 6
        </div>
          <div className="slide-title slide-title--outcome">
            Outcome.
        </div>
          <div className="slide-sep slide-sep--outcome">&nbsp;</div>
          <div className="slide-content">
            <strong>The traveler's experience &mdash; positive, neutral or negative &mdash; informs their own future decisions, as well as those of friends, family, colleagues and social media connections with whome they share their experiences.</strong>
          </div>
          <Link to="/outcome/">
            <button className="exploreBtn exploreBtn--offer">
              Explore <i className="fas fa-angle-right"></i>
            </button>
          </Link>

        </div>

      </div >
    </div >);
  }
}

export default withRouter(Startpage);

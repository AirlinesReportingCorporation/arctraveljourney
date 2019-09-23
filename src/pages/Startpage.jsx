import React from 'react'
import ReactDOM from 'react-dom'
import {useSpring, animated} from 'react-spring';

import {Drawer, Button} from 'antd';
import {useSwipeable, Swipeable} from 'react-swipeable'
import {withRouter} from 'react-router-dom';
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import './Startpage.scss';
import Slider from '../components/Slider.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Customlink from '../components/Customlink.jsx';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div class="animationContainer" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
  )
}

class Startpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      scrollPos: 0,
      paneWidth: "900vw",
      xy: [0, 0]
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

    this.setState({scrollPos: fscrollPos})

  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname);

    /*window.addEventListener('wheel', function(e) {
      e.preventDefault();
    }, {passive: false});*/

    document.querySelector('.startPage').addEventListener('wheel', function(e) {
      console.log("test");
      document.querySelector('.pageWrapper').scrollBy(e.deltaY, 0, "smooth");
    }, {passive: true});

    var windowXpos = document.querySelector('.startPage').scrollLeft;

    var totalWidth = 0;

    var children = document.querySelectorAll('.horizontalSlide');

    for (var i = 0; i < children.length; i++) {
      totalWidth += children[i].getBoundingClientRect().width;
      console.log(i + ":" + children[i].getBoundingClientRect().width);
    }

    this.setState({paneWidth: totalWidth});

    //new SimpleBar(document.querySelector('.startPage'));

  }

  componentDidUpate() {
    var totalWidth = 0;

    var children = document.querySelectorAll('.horizontalSlide');

    for (var i = 0; i < children.length; i++) {
      totalWidth += children[i].getBoundingClientRect().width;
      console.log(i + ":" + children[i].getBoundingClientRect().width);
    }

    this.setState({paneWidth: totalWidth});
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
    //onWheel={(e) => this.wheel(e)}
    return (<div className="startPage pagePaneContainer" style={{
        "width" : this.state.paneWidth
      }} horizontal="horizontal" pages={9}>

      <div className="horizontalSlide horizontalSlide1">
        <div className="row">
          <div className="col-md-12">
            <Card />
          </div>
        </div>
      </div>

      <div className="horizontalSlide horizontalSlide2">
        <div className="row">
          <div className="col-md-12">
            asdf
          </div>
        </div>
      </div>

    </div>);
  }
}

export default withRouter(Startpage);

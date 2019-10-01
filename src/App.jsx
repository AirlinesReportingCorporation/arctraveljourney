import 'react-app-polyfill/ie11';
import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader';
import Startpage from './pages/Startpage.jsx';



//navigation
import Navigation from './pages/Navigation.jsx';

//pages
import Inspire from './pages/Inspire.jsx';
import Shop from './pages/Shop.jsx';
import Offer from './pages/Offer.jsx';
import Purchase from './pages/Purchase.jsx';
import Pretrip from './pages/Pretrip.jsx';
import Trip from './pages/Trip.jsx';
import Outcome from './pages/Outcome.jsx';

function glide(val) {
  return val;
}

const pageTransitions = {
  atEnter: {
    offset: 200,
    opacity: 0
  },
  atLeave: {
    offset: glide(-100),
    opacity: glide(0)
  },
  atActive: {
    offset: glide(0),
    opacity: glide(1)
  }
};

function mapStyles(styles) {
  return { transform: `translateY(${styles.offset}%)` };
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routePath: "/",
      showSlideCtrls: true,
      slideCount: 1,
      slideDirection: "horizontal"
    };

    this.getRoute = this.getRoute.bind(this);
  }
  
  componentDidupdate(){
    console.log("did update");
  }

  //getRoute on route Navigation
  //update state for slide controls on navigation if needed
  getRoute(rPath, sCount) {
    this.setState({ routePath: rPath });
    if (rPath.indexOf("navigation") > -1) {
      this.setState({ showSlideCtrls: false });
    } else {
      this.setState({ showSlideCtrls: true });
    }

    this.setState({ slideCount: sCount });

    if (rPath == "/") {
      this.setState({ slideDirection: "horizontal" });
    }
    else {
      this.setState({ slideDirection: "vertical" });
    }

    window.scrollTo(0,0);
  }

  render() {

    var showSlideCtrls = (this.state.showSlideCtrls)
      ? '1'
      : '0';

    return (<div>
      <Router>
        <div className="pageWrapper">
          <Route path="/" exact render={(props) => <Startpage {...props} routeUpdate={this.getRoute} />} />
          <Route path="/navigation/" render={(props) => <Navigation {...props} routeUpdate={this.getRoute} />} />
          <Route path="/inspire/" render={(props) => <Inspire {...props} routeUpdate={this.getRoute} />} />
          <Route path="/shop/" render={(props) => <Shop {...props} routeUpdate={this.getRoute} />} />
          <Route path="/offer/" render={(props) => <Offer {...props} routeUpdate={this.getRoute} />} />
          <Route path="/purchase/" render={(props) => <Purchase {...props} routeUpdate={this.getRoute} />} />
          <Route path="/pretrip/" render={(props) => <Pretrip {...props} routeUpdate={this.getRoute} />} />
          <Route path="/trip/" render={(props) => <Trip {...props} routeUpdate={this.getRoute} />} />
          <Route path="/outcome/" render={(props) => <Outcome {...props} routeUpdate={this.getRoute} />} />
        </div>

      </Router>

    </div>)
  }
}

export default hot(module)(App);

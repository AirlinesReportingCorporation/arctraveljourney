import 'react-app-polyfill/ie11';
import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader';
import Startpage from './pages/Startpage.jsx';

//pages
import Inspire from './pages/Inspire.jsx';
import Shop from './pages/Shop.jsx';
import Offer from './pages/Offer.jsx';
import Purchase from './pages/Purchase.jsx';
import Pretrip from './pages/Pretrip.jsx';
import Trip from './pages/Trip.jsx';
import Outcome from './pages/Outcome.jsx';

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

    return (<div>
      <Router>
        <div className="pageWrapper">
          <Route path="/" exact render={(props) => <Startpage {...props} routeUpdate={this.getRoute} />} />
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

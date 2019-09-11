import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import './Navigation.scss';
import Slidenav from '../components/Slidenav.jsx';
import Customlink from '../components/Customlink.jsx';
import Inspire from './Inspire.jsx';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, 0);
  }

  render() {

    return (<div className="navigationPane">
      <div>
        <div className="navigationLink">
          <Link to="/">Intro</Link>
        </div>
        <div className="navigationLink">
          <div className="navStep">Step 1</div>
          <Link to={{
              pathname: '/',
              anchor: 'inspire'
            }}>Inspire</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 2a</div>
          <Link to={{
              pathname: '/',
              anchor: 'shop'
            }}>Shop</Link>
        </div>
        <div className="navigationLink">
          <div className="navStep">Step 2b</div>
          <Link to={{
              pathname: '/',
              anchor: 'offer'
            }}>
            Offer</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 3</div>
          <Link to={{
              pathname: '/',
              anchor: 'purchase'
            }}>Purchase</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 4</div>
          <Link to={{
              pathname: '/',
              anchor: 'pretrip'
            }}>Pre-trip</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 5</div>
          <Link to={{
              pathname: '/',
              anchor: 'trip'
            }}>Trip</Link>

        </div>
        <div className="navigationLink">
          <div className="navStep">Step 6</div>
            <Link to={{
                pathname: '/',
                anchor: 'outcome'
              }}>Outcome</Link>

        </div>
      </div>
    </div>);
  }
}

export default Navigation;

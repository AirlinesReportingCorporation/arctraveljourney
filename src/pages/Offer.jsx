import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import { Drawer } from 'antd';

import './Offer.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';
import Topnav from '../components/Topnav.jsx';
import Footer from '../components/Footer.jsx';

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      drawerContent: " "
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.exploreClick = this.exploreClick.bind(this);
  }

  exploreClick() {
    window.scroll({ top: 1920, left: 0, behavior: 'smooth' });
  }

  showDrawer(content) {
    this.setState({ drawerContent: content });
    this.setState({ visible: true });
    console.log(content);
  };

  onClose() {
    this.setState({ visible: false });
  };

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);

    ga('set', 'page', '/offer');
    ga('send', 'pageview');
  }

  render() {

    let drawerContent = this.state.drawerContent;

    if (drawerContent == "makeOffer") {
      drawerContent =
        <div className="row align-items-center">
          <div className="col-md-12">


            <div className="makeOffer drawerTitle">Making an Offer</div>
            <p>In the travel agency channel today, the GDS creates an offer that matches the traveler’s parameters based on airlines’ availability and fares. This is returned to the customer in seconds. According to Sabre, more than 132,000 searches take place in its GDS every minute.
            </p>
            <p>While GDSs generally manage offer creation for agencies today, in the future, these offers could also be created by airlines.
            </p>
          </div>
        </div>;

    } else if (drawerContent == "shakeOffer") {
      drawerContent = <div class="row align-items-center">
        <div className="col-md-12">
          <div className="shakeOffer drawerTitle">Shaking Up the Offer</div>
          <p>New Distribution Capability (NDC) is transforming the nature of offers. Today, offers are built within the framework of the 1950s-era, hand-written airline ticket.
        </p>
          <p>Sure, it’s been adapted slightly over the years, but it offers very little flexibility. That all changes with NDC.
        </p>
        </div>
      </div>;

    } else if (drawerContent == "NDC") {
      drawerContent = <div class="row align-items-center">
        <div className="col-md-12">
          <div className="drawerTitle ndc">NDC</div>
          <p>New Distribution Capability (NDC) is a schema — a means of communicating information. Today, airlines and travel agencies are limited in the information they can send and receive regarding airline tickets. This is because they use a legacy schema built on the traditional, 1950s-era handwritten airline ticket. It’s been adapted slightly over the years, but it provides very little flexibility.</p>
          <p>Air travel retailing has significantly advanced, and it has become far more customizable. The NDC schema enables airlines and travel agencies to communicate with far more flexibility, including with photos, customized bundles and/or personalized offers.
        </p>
        </div>
      </div>;

    }

    return (<div className="offerPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Topnav />
      <Pageslide>
        <div className="titleSlide">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="slide-subtitle slide-subtitle--step">Step 2b</div>
                <div className="slide-title slide-title--inspire">Offer.</div>
                <div class="slide-content"><strong>After the traveler searches for a flight, they receive a variety of offers.</strong> </div>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/offer.png" alt="Inspire Header" />
              </div>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="textSlide GradientDarkblue">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="textSlideContent">
                  After the traveler submits a shopping request, the industry&nbsp;
                  <span onClick={this.showDrawer.bind(this, 'makeOffer')}>makes an offer</span>&nbsp;
                  &mdash; or, more likely, many offers from many airlines.
                  <br /><br />New technology infrastructure and distribution strategies are&nbsp;
                  <span onClick={this.showDrawer.bind(this, 'shakeOffer')}>shaking up the offer</span>, which has the potential to include more than just an airline ticket.
                </div>
              </div>
              <div className="col-md-2">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/allcopyOfferTOP.png" alt="" />
              </div>
            </div>
          </div>

        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What’s
            <br />included<br />in an offer?
          </h2>
          <Todaytomorrow today={<div> In the travel agency channel, offers are generally restricted to the ticket itself. To include a seat upgrade or checked bag, the travel agency may need to contact the airline directly to make a separate transaction — or the traveler may choose to purchase these on the day of travel.</div>} tomorrow={<div> <span onClick={this.showDrawer.bind(this, 'NDC')}>NDC</span> creates (almost) infinite flexibility for what an offer can contain. Beyond the ticket itself, offers could include <strong> new products and bundles</strong>: things like airport transportation, lounge access or other products from any number of suppliers.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>Are all
            <br />offers created
            <br />equal?
          </h2>
          <Todaytomorrow today={<div> In today’s travel agency channel,
            the GDS constructs an offer based on airline availability,
            schedules and fares. While offers can fluctuate depending on those factors,
            they’re not customizable to the agency or traveler.</div>} tomorrow={<div> <span onClick={this.showDrawer.bind(this, 'NDC')}>NDC</span> creates the possibility of <strong> dynamic offers</strong>, which can be customized based on agency-airline relationships, loyalty or established traveler preferences. This will make it easier for the traveler to view content that is likely to be the best fit — and enables agencies to receive rates based on partnership agreements.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>Why are corporate
            <br />contracts such
            <br />
            a headache?
          </h2>
          <Todaytomorrow today={<div> The terms of corporate contracts are generally applied manually,
            after the transaction — which creates room for error.</div>} tomorrow={<div> <strong> Smart contracts</strong> will integrate contract terms up front, increasing accuracy and alignment while reducing room for error. This could also extend to corporate program policies, which could filter offers to display only those within policy.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="textSlide GradientPurple">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="textSlideContent">
                  While <span onClick={this.showDrawer.bind(this, 'NDC')}>NDC</span> presents vast opportunities, it will take a few years to fully come to fruition at scale. In the meantime, we are living in a <strong>hybrid environment</strong>, where existing processes need to reliably function in tandem with new capabilities.<br /><br /> Ultimately, an evolved retailing environment will deliver the right content to the right person at the right time.
                  <img className="offerBottom" src="https://www2.arccorp.com/globalassets/traveljourney/img/allcopyOfferBOTTOM.png" alt="" />

                </div>
              </div>
            </div>
          </div>

        </div>
      </Pageslide>
      <Pageslide>
        <div className="endSlide">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2>When the traveler is presented with great offers that match their parameters and preferences, they’re ready to buy.</h2>
                <Link to="/purchase/">
                  <button className="animated pulse slower infinite">Next Step: Purchase</button>
                </Link>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/offerend.jpg" alt="Offer End" />
              </div>
            </div>
          </div>

        </div>
      </Pageslide>
      <Footer />
      <Drawer placement="right" width="50%" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {drawerContent}

        </div>
      </Drawer>
    </div>);
  }
}

export default Offer;

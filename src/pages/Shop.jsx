import React, { Component } from "react";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import { Drawer } from 'antd';

import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';
import Topnav from '../components/Topnav.jsx';
import Footer from '../components/Footer.jsx';

class Shop extends React.Component {
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

  exploreClick() {
    window.scroll({ top: 1920, left: 0, behavior: 'smooth' });
  }

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
    ga('set', 'page', '/shop');
    ga('send', 'pageview');
  }

  render() {

    let drawerContent = this.state.drawerContent;

    if (drawerContent == "NDC") {
      drawerContent = <div>
        <div className="drawerTitle ndc">NDC</div>
        <p>New Distribution Capability (NDC) is a schema — a means of communicating information. Today, airlines and travel agencies are limited in the information they can send and receive regarding airline tickets. This is because they use a legacy schema built on the traditional, 1950s-era handwritten airline ticket. It’s been adapted slightly over the years, but it provides very little flexibility.</p>
        <p>Air travel retailing has significantly advanced, and it has become far more customizable. The NDC schema enables airlines and travel agencies to communicate with far more flexibility, including with photos, customized bundles and/or personalized offers.
        </p>
      </div>;

    } else if (drawerContent == "oneorder") {
      drawerContent = <div>
        <div className="drawerTitle oneorder">ONE Order</div>
        <p>Today, air travel purchases in the agency channel are fragmented. The airline ticket transaction is separate from baggage fees, in-flight wi-fi, lounge access and other ancillary purchases — all of which are systematically treated as individual tickets. </p><p>ONE Order will create a consolidated order structure that brings together disparate purchase data in a centralized location.
        </p>
        <p>In the future, tickets will be replaced by orders, which can contain any number of service items: tickets for multiple people, airline ancillary purchases, and presumably third-party products (e.g., rideshare credits).</p>
      </div>;

    }

    return (<div className="shopPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Topnav />
      <Pageslide>
        <div className="titleSlide">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="slide-subtitle slide-subtitle--step">Step 2a</div>
                <div className="slide-title slide-title--inspire">Shop.</div>
                <div className="slide-content"><strong>The traveler provides the parameters for their desired trip.</strong></div>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/shop.png" alt="Inspire Header" />
              </div>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="bulletSlide">
          <h1>The shop-and-offer cycle is like a conversation between the traveler and the seller.</h1>

          <div className="sliderTopContainer">
            <div className="row">
              <div className="col-lg-4">
                <Flipslide frontSide={<div > <h2>What Travelers Shop For</h2>
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/whatTheyShopFor.png" alt="Business Trip" />
                  <div className="touchText">Touch to see more</div>
                </div>} backSide={<div > <div>Travelers’ search parameters can be incredibly detailed — factoring in dates, cost, routes, connections, timing and brand loyalty. Business travelers also need to consider their corporate travel policy.
              </div> < div className="touchBackBtnContainer" > <div className="touchBackBtn">Touch to go back</div>
                  </div>
                </div>} colorClass="sliderGradientBlue"></Flipslide>
              </div>
              <div className="col-lg-4">
                <Flipslide frontSide={<div > <h2>Where Travelers Shop</h2>
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/whereTheyShop.png" alt="Business Trip" />
                  <div className="touchText">Touch to see more</div>
                </div>} backSide={<div > <div>Travelers can shop across a variety of channels. Corporate travelers often shop through an online booking tool (OBT) or their travel management company (TMC). Loyalty customers often shop directly on the airline website. Leisure customers may shop using an online travel agency (OTA) or a trusted travel advisor.
                <div className="touchBackBtnContainer">
                    <div className="touchBackBtn">Touch to go back</div>
                  </div>
                </div>
                </div>} colorClass="sliderGradientGreen"></Flipslide>
              </div>
              <div className="col-lg-4">
                <Flipslide frontSide={<div > <h2>How Travelers Shop</h2>
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/howTheyShop.png" alt="Business Trip" />
                  <div className="touchText">Touch to see more</div>
                </div>} backSide={<div > <div>Travelers often shop with different combinations of search parameters to explore the options available. It’s not uncommon for a customer to shop and re-shop across the span of days or weeks — even exploring other destinations — to find the best fit.<div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
                </div>
                </div>} colorClass="sliderGradientPurple"></Flipslide>
              </div>

            </div>
          </div>


        </div>
      </Pageslide>
      <Pageslide>
        <div className="quoteSlide">

          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="quotePhoto">
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/sarahQuote.png" alt="Sarah Boyd" />
                </div>
                <div className="quoteMeta">
                  SARAH BOYD<br />
                  Senior Manager, Airline Retailing, ARC
                </div>
              </div>
              <div className="col-lg-8">
                <div className="quoteText">
                  I think the ideal solution for the traveler would be that you can go online, or you can go to your agency, or whatever channel you want to shop in. You can get access to all of your discounts up front. Anything you are entitled for — maybe you're an elite flier and you get free extra-leg-room seating — that's included in your offer up front, and it works. And you don't have to go to multiple places to find that information.
                </div>
              </div>
            </div>
          </div>




        </div>

      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What products are available to the traveler?
          </h2>
          <Todaytomorrow today={<div> Different products are available in different purchase channels. Travelers may not have access to the same products through their agency or TMC as they would through the airline website.</div>} tomorrow={<div> Rich airline content,
            available in every sales channel, creates a <strong> consistent brand experience</strong>. Travelers have access to the same high-quality products, no matter where they buy.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>How can we make shopping easier?
          </h2>
          <Todaytomorrow today={<div> A lack of transparency makes it challenging for travelers to accurately compare fares. Some fares may include a checked bag or reserved seat, whereas others may upcharge for these amenities.</div>} tomorrow={<div> With <span onClick={this.showDrawer.bind(this, 'NDC')}>NDC</span>, the traveler has <strong> increased transparency</strong> and knows exactly what they’re getting for the price, which enables them to make more informed decisions about their purchase.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="endSlide">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2>Next Step: Offer</h2>
                <p>The customer's shopping parameters are just half of the shop-offer cycle. <br /><br />See what's involved in creating the offers that are returned to the customer. </p>
                <Link to="/offer/">
                  <button className="animated pulse slower infinite">Next Step: Offer</button>
                </Link>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/shopend.jpg" alt="Inspire End" />
              </div>
            </div>
          </div>
        </div>
      </Pageslide>
      <Footer />
      <Drawer placement="right" width="960px" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {drawerContent}
          
        </div>
      </Drawer>
    </div>);
  }
}

export default Shop;

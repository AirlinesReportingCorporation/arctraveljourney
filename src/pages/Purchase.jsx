import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import { Drawer } from 'antd';

import './Purchase.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';
import Topnav from '../components/Topnav.jsx';
import Footer from '../components/Footer.jsx';

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleBlue: false,
      visibleOne: false,
      drawerContent: " "
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.showDrawerOne = this.showDrawerOne.bind(this);
    this.showDrawerBlue = this.showDrawerBlue.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showDrawer(content) {
    this.setState({ drawerContent: content });
    this.setState({ visible: true });
  };

  showDrawerOne(content) {
    this.setState({ drawerContent: content });
    this.setState({ visibleOne: true });
  }

  showDrawerBlue() {
    this.setState({ visibleBlue: true });
  }

  onClose() {
    this.setState({ visible: false });
    this.setState({ visibleBlue: false });
    this.setState({ visibleOne: false });
  };

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
    ga('set', 'page', '/purchase');
    ga('send', 'pageview');
  }

  render() {

    let drawerContent = this.state.drawerContent;

    if (drawerContent == "order") {
      drawerContent = <div>
        <div className="order">Order Creation</div>
        <p>When a customer decides to book a ticket through a travel agency, an order is created. Today, the GDS creates the order based on input from the airline and travel agency. As a result, a ticket, passenger name record (PNR) and reservation are created and relayed to the airline and travel agency.
        </p>
        <div><img className="chartIMG" src="https://www2.arccorp.com/globalassets/traveljourney/img/ordercreationsChartBIG.png" alt="Order Creation" /></div>
      </div>;

    } else if (drawerContent == "payment") {
      drawerContent = <div>
        <div className="payment">Payment</div>
        <p>The traveler provides the agency with a form of payment — cash or credit card. ARC facilitates this payment to ensure it’s delivered to the airline.</p>
        <p>In the future, tickets will be replaced by orders, which can contain any number of service items: tickets for multiple people, airline ancillary purchases, and presumably third-party products (e.g., rideshare credits).</p>
        <div><img className="chartIMG" src="https://www2.arccorp.com/globalassets/traveljourney/img/paymentChartBIG.png" alt="Order Creation" /></div>
      </div>;
    } else if (drawerContent == "settlement") {
      drawerContent = <div>
        <div className="settlement">Settlement</div>
        <p>ARC facilitates the settlement process between thousands of travel agencies and hundreds of airlines. If the payment is in cash, ARC deducts that amount from the travel agency’s bank account. If it’s a credit card payment, ARC initiates the credit card billing, and the credit card brand delivers that amount to the airline.</p>
        <p>ARC’s position as an industry connector gives it a unique, industrywide view of payment, pricing and travel trends. The global travel community relies on this data to effectively benchmark their performance, create new travel routes and build better relationships with industry partners.</p>
        <div><img className="chartIMG" src="https://www2.arccorp.com/globalassets/traveljourney/img/settlementChartBIG.png" alt="Order Creation" /></div>
      </div>;
    } else if (drawerContent == "oneorder") {
      drawerContent = <div>
        <div className="drawerTitle oneorder">ONE Order</div>
        <p>Today, air travel purchases in the agency channel are fragmented. The airline ticket transaction is separate from baggage fees, in-flight wi-fi, lounge access and other ancillary purchases — all of which are systematically treated as individual tickets.
        </p>
        <p>ONE Order will create a consolidated order structure that brings together disparate purchase data in a centralized location.
        </p>
        <p>In the future, tickets will be replaced by orders, which can contain any number of service items: tickets for multiple people, airline ancillary purchases, and presumably third-party products (e.g., rideshare credits).</p>
      </div>;

    }

    return (<div className="purchasePage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Topnav />
      <Pageslide>
        <div className="titleSlide">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="slide-subtitle slide-subtitle--step">Step 3</div>
                <div className="slide-title slide-title--inspire">Purchase.</div>
                <div className="slide-content"><strong>The traveler purchases their airlines tickets (through a process that's more complex than you might expect).</strong> </div>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/purchase.png" alt="Inspire Header" />
              </div>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="quoteSlide">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="quoteText">
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/wordBubbles.png" alt="" />
                  <div className="quoteNew">When you buy an airline ticket from a travel agency or TMC, a series of complex, behind-the-scenes processes begins.</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </Pageslide>
      <Pageslide>
        <div className="customPurchaseSlide">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="customPurchaseSlideSub">Behind the Scenes:</div>
                <h1>How the Air Travel Purchase Works</h1>
                <p>The purchase is complex, with order creation, payment and settlement each necessitating a set of processes across parties.</p>
                <div className="stepOrderContainer">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="stepOrder" onClick={this.showDrawer.bind(this, 'order')}>
                        Step 1:<br />
                        <strong>Order Creation</strong>
                        <img src="https://www2.arccorp.com/globalassets/traveljourney/img/ordercreationsChartBIG.png" alt="Order Creation" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="stepOrder" onClick={this.showDrawer.bind(this, 'payment')}>
                        Step 2:<br />
                        <strong>Payment</strong>
                        <img src="https://www2.arccorp.com/globalassets/traveljourney/img/paymentChartBIG.png" alt="Payment" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="stepOrder" onClick={this.showDrawer.bind(this, 'settlement')}>
                        Step 3:<br />
                        <strong>Settlement</strong>
                        <img src="https://www2.arccorp.com/globalassets/traveljourney/img/settlementChartBIG.png" alt="Settlement" />
                      </div>
                    </div>
                  </div>



                </div>
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
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/shellyQuote.png" alt="Shelly Younger" />
                </div>
                <div className="quoteMeta">
                  SHELLY YOUNGER<br />
                  Senior Manager<br />Airline Retailing Strategy and Head of NDC, ARC
                </div>
              </div>
              <div className="col-lg-8">
                <div className="quoteText">
                  The easier it looks to the customer, the harder it is behind the scenes - and the more parties you need to get together to make that happen. There's not just one entity that can be the expert at all of those pieces of technology, nor do they want to be. They have businesses to run with different focuses. So, how do you make it look easy to the customer? You've got to collaborate with people.
                </div>
              </div>
            </div>
          </div>

        </div>

      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>Why aren’t the traveler’s airline ticket, baggage fee and in-flight wi-fi on one transaction?
          </h2>
          <Todaytomorrow today={<div>Legacy technology limits what can be considered a “ticket,” but airline products have since evolved to become more customizable. Systematically, the traveler’s baggage fee is treated like a separate ticket, otherwise known as an electronic miscellaneous document (EMD).</div>} tomorrow={<div> E-commerce platforms have furthered the concept of a <strong>single, unified order</strong> that can contain a variety of different items. <span onClick={
            this.showDrawerOne.bind(this, 'oneorder')
          } > ONE Order</span> will create a similar environment, wrapping disparate data together in one centralized, manageable place — reflecting any updates or status changes that may arise. This could include multiple travelers and numerous products beyond air.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2 className="ttP">How do travel agencies receive commission?
          </h2>
          <Todaytomorrow today={<div> Commissions are generally applied by the travel agency at time of purchase. To determine the accurate commission amount, agents use a GDS tool, or they have to calculate commission based on complex contracts and fare rules.  If the agency calculates an incorrect commission amount, they will later receive a debit memo from the airline.</div>} tomorrow={<div><strong>Smart contracts</strong> will integrate contract terms in the purchase process, up front, increasing accuracy and reducing room for error (and potentially eliminating debit memos). The industry will throw a huge party celebrating the elimination of debit memos and all the resources spent managing them.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2 className="ttP">Why don’t travelers have more flexible payment options?
          </h2>
          <Todaytomorrow today={<div> Travelers don’t have the same form-of-payment options in every channel. Support is often limited for emerging forms of payment (mobile wallets, peer-to-peer payment platforms, etc.) and multiple forms of payment for different passengers — both in direct and indirect sales channels. Even airline miles, now ubiquitous, are limited in their usage outside of the direct channel.  </div>} tomorrow={<div> <strong> Multiple forms of payment</strong> will be available in every sales channel. The customer can use a combination of airline miles, credit cards, cash, mobile wallet or alternative forms of payment in a single order.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>Could emerging technologies, such as blockchain, streamline the payment, settlement and reporting process?
          </h2>
          <Todaytomorrow today={<div> Entities throughout the industry are closely connected through various technology platforms, critical file exchanges and detailed processes that take place at a massive scale. We need to transform our technology to create a more flexible future, but evolution takes time.</div>} tomorrow={<div> ARC and its industry partners are researching and piloting <strong>emerging technology</strong>, such as blockchain, to increase efficiency and transparency. ARC is working closely with United Airlines on a blockchain pilot for corporate travel. </div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="blueSlide">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>To create a better traveler experience, the industry needs to transform its data and technology capabilities.
                </h2>
                <div className="blueContainer">
                  Here are some critical considerations for the global air travel community.
            <button onClick={this.showDrawerBlue}>Tap to View</button>
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
                <h2>Next Step: Pre-trip</h2>
                <p>Now that the traveler has purchased their tickets, we enter a glorious window of opportunity.</p>
                <Link to="/pretrip/">
                  <button className="animated pulse slower infinite">Next Step: Pre-trip</button>
                </Link>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/paymentend.jpg" alt="Inspire End" />
              </div>
            </div>
          </div>


        </div>
      </Pageslide>

      <Footer />

      <Drawer className="purchaseDrawer" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {drawerContent}
          </div>
      </Drawer>

      <Drawer className="oneorderDrawer" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visibleOne}>
        <div className="infoDrawer">
          {drawerContent}

        </div>
      </Drawer>

      <Drawer className="blueDrawer" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visibleBlue}>
        <div className="infoDrawer">
          <h2>ARC is actively addressing the following concerns to help airlines, travel agencies and technology companies navigate an increasingly complex landscape.<br /><br /> Here are some critical considerations for the global air travel community: </h2>

          <p><strong>Updated technology infrastructure</strong><br />Modernize technology platforms industrywide and phase out inefficient, limiting, legacy systems.</p>
          <p><strong>Enhanced payment platforms</strong><br />Align buying travel with other retail experiences.</p>
          <p><strong>Real-time data</strong><br />Data needs to flow between parties in real time, including status updates and order changes. </p>
          <p><strong>Order structure</strong><br />ONE Order will completely transform the structure of today’s airline ticket. </p>
          <p><strong>Hybrid environment</strong><br />Organizations throughout the industry will move forward at different paces. Technology and data systems need to be in place to accommodate a wide range of capabilities, translating among many versions to ensure seamless communication at scale.</p>
          <p></p>

        </div>
      </Drawer>

    </div>);
  }
}

export default Purchase;

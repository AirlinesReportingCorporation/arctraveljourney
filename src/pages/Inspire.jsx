import React, { Component } from "react";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import { Drawer } from 'antd';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';
import Topnav from '../components/Topnav.jsx';
import Footer from '../components/Footer.jsx';

class Inspire extends React.Component {
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

    ga('set', 'page', '/inspire');
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
        <p>Today, air travel purchases in the agency channel are fragmented. The airline ticket transaction is separate from baggage fees, in-flight wi-fi, lounge access and other ancillary purchases — all of which are systematically treated as individual tickets.
        </p>
        <p>ONE Order will create a consolidated order structure that brings together disparate purchase data in a centralized location.
        </p>
        <p>In the future, tickets will be replaced by orders, which can contain any number of service items: tickets for multiple people, airline ancillary purchases, and presumably third-party products (e.g., rideshare credits).</p>
      </div>;

    }

    return (<div className="inspirePage pagePaneContainer animated fadeIn" ref={(e) => this.slideMenu = e}>
      <Topnav />
      <Pageslide>
        <div className="titleSlide">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="slide-subtitle slide-subtitle--step">Step 1</div>
                <div className="slide-title slide-title--inspire">Inspire.</div>
                <div className="slide-content"><strong>The traveler is inspired to take a trip.</strong> Inspiration can be found everywhere, and it can look different: business trips, family vacations, luxury getaways, etc.</div>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/inspire1.png" alt="Inspire Header"/>
              </div>
            </div>
          </div>
        </div>
      </Pageslide>

      <Pageslide>
        <div className="bulletSlide">
          <h1>The inspiration to travel is everywhere, and it can come from a number of sources.</h1>
          <div className="sliderTopContainer">
            <div className="row">
              <div className="col-lg-4">
                <Flipslide frontSide={<div > <h2>Business Trip</h2>
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/businessTrip.png" alt="Business Trip" />
                  <div className="touchText">Touch to see more</div>
                </div>} backSide={<div > <div>Corporate travelers are as diverse as leisure travelers, with different needs and preferences. They may travel twice a year or 40 times a year. They may want to minimize their time away from home, or they may prefer extended “bleisure” trips.
              </div> < div className="touchBackBtnContainer" > <div className="touchBackBtn">Touch to go back</div>
                  </div>
                </div>} colorClass="sliderGradientBlue"></Flipslide>
              </div>
              <div className="col-lg-4">
                <Flipslide frontSide={<div > <h2>Family Vacation</h2>
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/familyVacation.png" alt="Business Trip" />
                  <div className="touchText">Touch to see more</div>
                </div>} backSide={<div > <div>Travel advisors are getting creative when planning family vacations. The 2019 Virtuoso Luxe Report identified multigenerational travel as the year’s top vacation trend. In particular, service-oriented travel, genealogy trips and family-friendly cruises are gaining popularity.
                <div className="touchBackBtnContainer">
                    <div className="touchBackBtn">Touch to go back</div>
                  </div>
                </div>
                </div>} colorClass="sliderGradientGreen"></Flipslide>
              </div>
              <div className="col-lg-4">
                <Flipslide frontSide={<div > <h2>Long-Awaited
                <br />Getaway</h2>
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/longAwaitedGetaway.png" alt="Business Trip" />
                  <div className="touchText">Touch to see more</div>
                </div>} backSide={<div > <div>Travel agencies specializing in luxury travel are on the rise. More than half of agency respondents in a recent Phocuswright study, co-sponsored by ARC, indicated that they specialize in river cruises, and 16% specialize in selling bespoke, a highly customized segment of luxury travel.<div className="touchBackBtnContainer">
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
                  <img src="https://www2.arccorp.com/globalassets/traveljourney/img/lauriQuote.png" alt="Lauri Reishus" />
                </div>
                <div className="quoteMeta">
                  LAURI REISHUS<br />
                  Executive Vice President and
            <br />Chief Operating Officer, ARC
              </div>
              </div>
              <div className="col-lg-8">
                <div className="quoteText">
                  Personalization is the next frontier for our industry. It requires massive customer data management, insights and analytics &mdash; but it holds great promise of getting the right product with the right price point to the right customer.
              </div>
              </div>
            </div>
          </div>
        </div>

      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>How can we get and maintain
            the traveler's attention?</h2>
          <Todaytomorrow today={<div> By analyzing travel data and identifying traveler trends,
            travel brands can create targeted promotions that break through the noise,
            ultimately inspiring active travel planning.</div>} tomorrow={<div> Industry initiatives like < span onClick={
              this.showDrawer.bind(this, 'NDC')
            } > NDC</span> and < span onClick={
              this.showDrawer.bind(this, 'oneorder')
            } > ONE Order</span> will generate richer data for <strong>smarter marketing</strong>. By leveraging historical purchase data,
            travel brands will be able to create more meaningful personalization.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="textSlide GradientDarkblue">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="textSlideContent">
                  Airline products are becoming more customizable.<br /><br />
                  Travelers are looking for more unique, one-of-a-kind experiences.<br /><br />
                  Consumers are navigating a marketing-saturated digital world.<br /><br />

                  <strong>In the right context, personalization is the most meaningful way to make your brand's voice heard.</strong>

                </div>
              </div>
              <div className="col-md-2">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/allcopyInspire.png" alt="" />
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
                <h2>Next Step: Shop</h2>
                <p>Messages that are clearly aligned with travelers' individual preferences are the ones that resonate - both today and in tomorrow's environment, which will be even more data-rich.</p>
                <Link to="/shop/">
                  <button className="animated pulse slower infinite">Explore: Shop</button>
                </Link>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/inspireend.jpg" alt="Inspire End" />
              </div>
            </div>

          </div>
        </div>
      </Pageslide>
      <Footer />
      <Drawer placement="right" width="50%" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          <div className="row align-items-center">
            {drawerContent}
          </div>
        </div>
      </Drawer>

    </div>);
  }
}

export default Inspire;

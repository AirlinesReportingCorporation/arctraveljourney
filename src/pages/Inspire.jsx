import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import $ from 'jquery';
import owlCarousel from "owl.carousel";
import {Drawer} from 'antd';

import './Inspire.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';

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
    window.scroll({top: 1920, left: 0, behavior: 'smooth'});
  }

  showDrawer(content) {
    this.setState({drawerContent: content});
    this.setState({visible: true});
    console.log(content);
  };

  onClose() {
    this.setState({visible: false});
  };

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);

    ga('set', 'page', '/inspire');
    ga('send', 'pageview');
  }

  render() {

    $('.owl-carousel').owlCarousel({
      center: true,
      autoplay: false,
      loop: true,
      nav: true,
      autoHeight: false,
      autoplayTimeout: 5000,
      autoplaySpeed: 2000,
      smartSpeed: 700,
      URLhashListener: true,
      autoplayHoverPause: true,
      stagePadding: 160,
      navText: [
        '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowLeft.png">', '<div class="swipeLeft"><img src="img/whiteSlideArrow.png"> Swipe</div>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        720: {
          items: 1
        }
      }
    });



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
      <Pageslide>
        <div className="bulletSlide">
          <h1>The inspiration<br/>to travel is<br/>everywhere,<br/>and it can come<br/>from a number<br/>of sources.</h1>
          <div className="owl-carousel owl-theme">
            <Flipslide frontSide={<div > <h2>Business Trip</h2>
              <img src="img/businessTrip.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Corporate travelers are as diverse as leisure travelers, with different needs and preferences. They may travel twice a year or 40 times a year. They may want to minimize their time away from home, or they may prefer extended “bleisure” trips.
              </div> < div className = "touchBackBtnContainer" > <div className="touchBackBtn">Touch to go back</div>
            </div>
          </div>} colorClass="sliderGradientBlue"></Flipslide>
            <Flipslide frontSide={<div > <h2>Family Vacation</h2>
              <img src="img/familyVacation.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Travel advisors are getting creative when planning family vacations. The 2019 Virtuoso Luxe Report identified multigenerational travel as the year’s top vacation trend. In particular, service-oriented travel, genealogy trips and family-friendly cruises are gaining popularity.
                <div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientGreen"></Flipslide>
            <Flipslide frontSide={<div > <h2>Long-Awaited
                <br/>Getaway</h2>
              <img src="img/longAwaitedGetaway.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Travel agencies specializing in luxury travel are on the rise. More than half of agency respondents in a recent Phocuswright study, co-sponsored by ARC, indicated that they specialize in river cruises, and 16% specialize in selling bespoke, a highly customized segment of luxury travel.<div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientPurple"></Flipslide>
          </div>
        </div>

      </Pageslide>
      <Pageslide>
        <div className="quoteSlide">
          <div className="quotePhoto">
            <img src="img/lauriQuote.png" alt="Lauri Reishus"/>
          </div>
          <div className="quoteMeta">
            LAURI REISHUS<br/>
            Executive Vice President and
            <br/>Chief Operating Officer, ARC
          </div>
          <div className="quoteText">
            Personalization is the next
            <br/>
            frontier for our industry.
            <br/>
            It requires massive customer
            <br/>
            data management, insights
            <br/>and analytics &mdash; but it holds
            <br/>
            great promise of getting
            <br/>
            the right product with the
            <br/>
            right price point to the
            <br/>
            right customer.
          </div>

        </div>

      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>How can we get
            <br/>and maintain<br/>
            the traveler's
            <br/>
            attention?</h2>
          <Todaytomorrow today={<div> By analyzing travel data and identifying traveler trends,
            travel brands can create targeted promotions that break through the noise,
            ultimately inspiring active travel planning.</div>} tomorrow={<div> Industry initiatives like < span onClick = {
              this.showDrawer.bind(this, 'NDC')
            } > NDC</span> and < span onClick = {
              this.showDrawer.bind(this, 'oneorder')
            } > ONE Order</span> will generate richer data for <strong>smarter marketing</strong>. By leveraging historical purchase data,
            travel brands will be able to create more meaningful personalization.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="textSlide GradientDarkblue">
          <div className="textSlideContent">
            Airline products are becoming more customizable.<br/><br/>
            Travelers are looking for more unique, one-of-a-kind experiences.<br/><br/>
            Consumers are navigating a marketing-saturated digital world.<br/><br/>

            <strong>In the right context, personalization is the most meaningful way to make your brand's voice heard.</strong>

            <img src="img/allcopyInspire.png" alt=""/>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="endSlide">
          <h2>Messages that are clearly aligned with travelers' individual preferences are the ones that resonate - both today and in tomorrow's environment, which will be even more data-rich.</h2>
          <Link to={{
              pathname: '/',
              anchor: 'shop'
            }}>
            <button className="animated pulse slower infinite">Next Step: Shop</button>
          </Link>
        </div>
      </Pageslide>
      <Drawer placement="right" width="960px" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {drawerContent}
          <img onClick={this.onClose} src="img/closeIcon.png" alt="Close"/>
        </div>
      </Drawer>

    </div>);
  }
}

export default Inspire;

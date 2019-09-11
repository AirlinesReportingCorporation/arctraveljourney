import React, {Component} from "react";
import ReactDOM from "react-dom";
import {MemoryRouter as Router, Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import $ from 'jquery';
import owlCarousel from "owl.carousel";
import {Drawer} from 'antd';

import './Outcome.scss';
import Slider from '../components/Pageslide.jsx';
import Slidenav from '../components/Slidenav.jsx';
import Pageslide from '../components/Pageslide.jsx';
import Flipslide from '../components/Flipslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';

class Outcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      drawerContent: " "
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
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
    ga('set', 'page', '/outcome');
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

    return (<div className="outcomePage pagePaneContainer" ref={(e) => this.slideMenu = e}>

      <Pageslide>
        <div className="bulletSlide">
          <h1>The trip may be
            <br/>over, but its
            <br/>impact is just
            <br/>beginning.</h1>
          <div className="owl-carousel owl-theme">
            <Flipslide frontSide={<div > <h2>Sharing the
                <br/>Experience</h2>
              <img src="img/sharingTheExperience.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Tweets. Snaps. Instagram photos. Recounting the trip to family members. Making recommendations to a colleague in the breakroom. Travelers share their experiences in all kinds of ways, potentially shifting others’ perceptions of certain brands or destinations.
              </div> < div className = "touchBackBtnContainer" > <div className="touchBackBtn">Touch to go back</div>
            </div>
          </div>} colorClass="sliderGradientBlue"></Flipslide>
            <Flipslide frontSide={<div > <h2>Repairing the
                <br/>Relationship</h2>
              <img src="img/repairingTheRelationship.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>Sometimes, trips don’t go according to plan. But travel brands still have an opportunity to make things right. Quickly and tactfully following up with an acknowledgement, apology or incentive can go a long way in repairing the traveler’s relationship with the brand.
                <div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientGreen"></Flipslide>
            <Flipslide frontSide={<div > <h2>Building Loyalty</h2>
              <img src="img/buildingLoyalty.png" alt="Business Trip"/>
              <div className="touchText">Touch to see more</div>
            </div>} backSide={<div > <div>The travel journey repeats itself, and every trip impacts the traveler’s perception of your brand. Make that impression last by following up and inspiring new travel, continuing the momentum. Smart personalization can make these follow-ups even more powerful.<div className="touchBackBtnContainer">
                  <div className="touchBackBtn">Touch to go back</div>
                </div>
              </div>
            </div>} colorClass="sliderGradientPurple"></Flipslide>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide big">
          <h2>How can we follow up <br/>with the traveler?
          </h2>
          <Todaytomorrow today={<div>Travel brands have access to their own sales and customer data and can use that information to follow up with other offers. Targeted promotions can be built based on the traveler’s historical purchase data — but that data may not be comprehensive or connected to the brand’s marketing tools. Data can be used in these follow-ups to make them relevant for future travel.</div>} tomorrow={<div> Travelers could opt in to create a profile of preferences, which could potentially be shared with other trusted sellers of travel. For example, a business traveler’s profile could be shared by the TMC and airline, enabling channel-agnostic data exchange and servicing. Their travel policy could be layered with that profile, informing smarter offer creation. Furthermore, <span onClick={this.showDrawer.bind(this, 'NDC')}>NDC</span> and <span onClick={this.showDrawer.bind(this, 'oneorder')}>ONE Order</span> will generate richer, more centralized data than what exists today.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>How can brands build lifetime loyalty?
          </h2>
          <Todaytomorrow today={<div> Airline loyalty programs incentivize customers to book on their preferred airline. Travel advisors, agencies and TMCs build loyalty by maintaining trusted relationships with their clients. Separate loyalty programs have the opportunity to become more interconnected.</div>} tomorrow={<div> Advancements in technology will increase efficiency, interconnectedness and personalization across the entire travel journey. Not only does this create a better travel experience, but it also enables brands to build trust over time, following up on previous experiences to build a richer, more meaningful relationship with the traveler across their lifetime.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="bulletSlide bulletSlide2">
          <h1>Travelers evolve over time.</h1>
          <p className="bulletSub"></p>
          <div className="owl-carousel owl-theme">
            <Flipslide noclick="true" frontSide={<div className = "firstFlipSlide" > Today’s twentysomething budget traveler may become an occasional business traveler in her late twenties.</div>} backSide={<div className = "firstFlipSlide" ></div>} colorClass="slideTransparent"></Flipslide>

            <Flipslide noclick="true" frontSide={<div className="customFlip"> In her thirties, she may become a frequent business traveler, taking the occasional family vacation with her kids.</div>} backSide={<div ></div>} colorClass="sliderGradientBlue"></Flipslide>

            <Flipslide noclick="true" frontSide={<div className="customFlip"> She could become a high-value international business travel in her forties and fifties.
            </div>} backSide={<div ></div>} colorClass="sliderGradientGreen"></Flipslide>

            <Flipslide noclick="true" frontSide={<div className="customFlip">Then, she could start taking her kids and their kids on family vacations. </div>} backSide={<div ></div>} colorClass="sliderGradientDarkblue"></Flipslide>

            <Flipslide noclick="true" frontSide={<div className="customFlip">Maybe her decades-long loyalty will be with <strong>your</strong> brand.
            </div>} backSide={<div ></div>} colorClass="sliderGradientPurple"></Flipslide>

          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="endSlide">
          <h2>The travel journey goes on, repeating with every trip and travel experience. <br/><br/>Continue the momentum by inspiring the traveler’s next trip.

          </h2>
          <Link to={{
              pathname: '/'
            }}>
            <button className="animated pulse slower infinite">Start Again</button>
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

export default Outcome;

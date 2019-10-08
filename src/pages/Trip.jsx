import React, { Component } from "react";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import { Modal, Drawer } from 'antd';

import Pageslide from '../components/Pageslide.jsx';
import Todaytomorrow from '../components/Todaytomorrow.jsx';
import Topnav from '../components/Topnav.jsx';
import Footer from '../components/Footer.jsx';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleBlue: false,
      drawerContent: " ",
      visibleModal: false,
      modalContent: " "
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.showDrawerBlue = this.showDrawerBlue.bind(this);
    this.onClose = this.onClose.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal(content) {
    this.setState({
      visibleModal: true,
      modalContent: content
    });
  };

  handleOk() {
    this.setState({
      visibleModal: false,
    });
  };

  handleCancel() {
    this.setState({
      visibleModal: false,
    });
  };

  showDrawer(content) {
    this.setState({ drawerContent: content });
    this.setState({ visible: true });
  };

  showDrawerBlue() {
    this.setState({ visibleBlue: true });
  }

  onClose() {
    this.setState({ visible: false });
    this.setState({ visibleBlue: false });
  };

  componentDidMount() {
    this.props.routeUpdate(this.props.location.pathname, this.slideMenu.children.length);
    ga('set', 'page', '/trip');
    ga('send', 'pageview');
  }

  render() {

    let drawerContent = this.state.drawerContent;
    let modalContent = this.state.modalContent;

    if (modalContent == "firstdeparture") {
      modalContent = <div><h2>First Flight Departure</h2> <p>Things don't always go according to plan. Flight delays are often inevitable, whether caused by inclement weather or an operational or technology issue.</p></div>;
    }
    else if (modalContent == "missed") {
      modalContent = <div><h2>Missed Connection</h2> <p>Delays push back the rest of the traveler's itinerary and can result in a missed connection. When a traveler needs to rebook, their options for changing their ticket vary depending on where the ticket was purchased.</p></div>;
    }
    else if (modalContent == "transportation") {
      modalContent = <div><h2>Transportation from Airport</h2> <p>If the traveler arranged a ride from the airport to their destination, their plans need to be adjusted. In the future, <strong>real-time data transmission</strong> will be valuable. If the traveler's arrival is delayed by four hours, the airline or agency could potentially relay status updates to the car company, making them aware of the traveler’s delay. Status updates could also be delivered to corporate travel managers, enhancing duty of care, and to the hotel, which may see an opportunity to enhance the traveler’s stay.</p></div>;
    }
    else if (modalContent == "rebook") {
      modalContent = <div><h2>Rebook</h2> <p>If the traveler purchased their ticket through a travel agency or TMC, either that agency or the airline may make changes to the ticket. If they purchased through the airline, a travel agency or TMC is not able to service the ticket. Channel-agnostic service will enable TMCs to service all their clients’ airline tickets, regardless of the purchase channel. This will require efficient, real-time transmission of data. </p></div>;
    }


    if (drawerContent == "order") {
      drawerContent = <div>
        <div className="order">Perfect World</div>
        <p>In a perfect world, the trip goes smoothly and according to plan. The traveler arrives at their destination on time, with the products and services they purchased. In an evolved distribution environment, these steps will be even more intuitive and streamlined.
        </p>
        <div className="tableContainer">
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Mobile Check-In</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Seat Selection</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Boarding Pass</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Airport Transportation</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Checked Bags</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>TSA</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Lounge Access</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Board the Flight</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Departure</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>In-Flight Food and Beverage</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>In-Flight Wi-Fi</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>In-Flight Entertainment</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Flight Arrives</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Get Checked Bags</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Go Through Customs</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Transportation from Airport</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Arrive at Destination</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>;

    } else if (drawerContent == "payment") {
      drawerContent = <div>
        <div className="payment">Delays & Missed Connections</div>
        <p>Flight delays happen, and they can create a cascading effect on the rest of a trip, especially if there's a connecting flight.</p>
        <div className="tableContainer tableLong">
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Mobile Check-In</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Seat Selection</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Boarding Pass</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Airport Transportation</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Checked Bags</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>TSA</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Lounge Access</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Board the Flight</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Board First Flight</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/warning.png" /></td>
                </tr>
                <tr>
                  <td>First Flight Departure</td>
                  <td><img className="animated infinite tada slow" onClick={this.showModal.bind(this, 'firstdeparture')} src="https://www2.arccorp.com/globalassets/traveljourney/img/warning.png" /></td>
                </tr>
                <tr>
                  <td>In-Flight Food and Beverage</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>In-Flight Wi-Fi</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>In-Flight Entertainment</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>First Flight Arrives</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/warning.png" /></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/warning.png" /></td>
                </tr>
                <tr>
                  <td>Missed Connection</td>
                  <td><img className="animated infinite tada slow" onClick={this.showModal.bind(this, 'missed')} src="https://www2.arccorp.com/globalassets/traveljourney/img/X.png" /></td>
                </tr>
                <tr>
                  <td>Rebook</td>
                  <td><img className="animated infinite tada slow" onClick={this.showModal.bind(this, 'rebook')} src="https://www2.arccorp.com/globalassets/traveljourney/img/warning.png" /></td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Board New Flight</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>New Flight Departs</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>New Flight Arrives</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Get Checked Bags</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Go Through Customs</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
                <tr>
                  <td>Transportation from Airport</td>
                  <td><img className="animated infinite tada slow" onClick={this.showModal.bind(this, 'transportation')} src="https://www2.arccorp.com/globalassets/traveljourney/img/warning.png" /></td>
                </tr>
                <tr>
                  <td>Arrive at Destination</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <p className="bottomP">Opening up service opportunities to agencies in a channel-agnostic environment alleviates strain for the airline, and it creates a more positive experience for the traveler. Brands can also speed resolution by maximizing the existing benefits of mobile technology and exploring emerging technologies, such as AI.</p>
      </div>
    } else if (drawerContent == "settlement") {
      drawerContent = <div>
        <div className="payment">Bundles & Corporate Policy</div>
        <p className="bundlesP">Purchasing bundles ahead of time can reduce friction on the day of travel. Corporate travel programs can reduce friction by creating flexible travel policies for frequent travelers. Amenities like in-flight wi-fi and lounge access can create a more seamless travel experience.</p>
        <div className="tableContainer tableBundles">
          <div className="tableHalf">
            <table>
              <tbody>
                <tr>
                  <td>Mobile Check-In</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Seat Selection</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                  <td className="checkMarkExtra">Economy Plus</td>
                </tr>
                <tr>
                  <td>Boarding Pass</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Airport Transportation</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                  <td className="checkMarkExtra">Pre-arranged</td>
                </tr>
                <tr>
                  <td>Checked Bags</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                  <td className="checkMarkExtra">Pre-arranged</td>
                </tr>
                <tr>
                  <td>TSA</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                  <td className="checkMarkExtra">TSA Pre&#10003;&reg;</td>
                </tr>
                <tr>
                  <td>Lounge Access</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                  <td className="checkMarkExtra">Pre-arranged</td>
                </tr>
                <tr>
                  <td>Find the Gate</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Board the Flight</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                  <td className="checkMarkExtra">Priority Boarding</td>
                </tr>
                <tr>
                  <td>Departure</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>In-Flight Food and Beverage</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                  <td className="checkMarkExtra">Pre-purchase</td>
                </tr>
                <tr>
                  <td>In-Flight Wi-Fi</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                  <td className="checkMarkExtra">Pre-purchase</td>
                </tr>
                <tr>
                  <td>In-Flight Entertainment</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Flight Arrives</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Get Checked Bags</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Go Through Customs</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Transportation from Airport</td>
                  <td><img src="https://www2.arccorp.com/globalassets/traveljourney/img/checkmark.png" /></td>
                  <td className="checkMarkExtra">Pre-arranged</td>
                </tr>
                <tr>
                  <td>Arrive at Destination</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
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

    return (<div className="tripPage pagePaneContainer" ref={(e) => this.slideMenu = e}>
      <Topnav />
      <Pageslide>
        <div className="titleSlide">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="slide-subtitle slide-subtitle--step">Step 5</div>
                <div className="slide-title slide-title--inspire">Trip.</div>
                <div className="slide-content"><strong>The traveler embarks on their journey.</strong> With dozens of touch points on the day of travel, brands have many opportunities to reduce friction.</div>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/trip.png" alt="Trip Header" />
              </div>
            </div>
          </div>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="textSlide GradientGreen">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10">
                <div className="textSlideContent">
                  The trip experience begins with mobile check-in 24 hours in advance and spans the traveler’s journey to and through the airport, as well as boarding, flight and transport to their destination.
                </div>

              </div>
              <div className="col-md-2">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/allcopyTrip.png" alt="" />
              </div>
            </div>
          </div>


        </div>
      </Pageslide>
      <Pageslide>
        <div className="todayTomorrowSlide">
          <h2>What if the traveler needs to make a last-minute change to their trip?</h2>
          <Todaytomorrow today={<div> Air travel is becoming more streamlined,
            but it is still fragmented in many ways. The customer expects an easy,
            seamless and customizable buying experience — yet making changes to a ticket can be challenging, and add-on purchases (checked bag, wi-fi, in-flight meal) are each made on a separate transaction.</div>} tomorrow={<div> Because personalized products have already been purchased at the point of sale,
            the traveler can enjoy a <strong> frictionless experience</strong>,
            which has been customized to their personal preferences. In a <span onClick={this.showDrawer.bind(this, 'oneorder')} >ONE Order</span> environment, ancillary purchases will be connected to the traveler’s order,
            so all their data will be centralized in one location.</div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="customTripSlide">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>The Day of Travel</h1>
                <p>With dozens of touch points on the day of travel, brands have an opportunity to create a more seamless experience for their travelers.</p>
                <div className="stepOrderContainer">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="stepOrder" onClick={this.showDrawer.bind(this, 'order')}>
                        <strong>In a Perfect World</strong>
                        <img src="https://www2.arccorp.com/globalassets/traveljourney/img/1.png" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="stepOrder" onClick={this.showDrawer.bind(this, 'payment')}>
                        <strong>Delays & Missed Connections</strong>
                        <img src="https://www2.arccorp.com/globalassets/traveljourney/img/2.png" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="stepOrder" onClick={this.showDrawer.bind(this, 'settlement')}>
                        <strong>Bundles & Corporate Policy</strong>
                        <img src="https://www2.arccorp.com/globalassets/traveljourney/img/3.png" alt="" />
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
        <div className="todayTomorrowSlide tts2 big">
          <h2>What could a channel-agnostic servicing environment look like?
          </h2>
          <Todaytomorrow today={<div> In cases of irregular operations (such as inclement weather, delays and cancellations), a traveler’s options for changing their ticket vary depending on where they purchased their ticket. If they purchased through a travel agency or TMC, either that agency or the airline may make changes to the ticket. If they purchased through the airline, a travel agency or TMC is not able to service the ticket.</div>} tomorrow={<div><strong>Channel-agnostic service</strong> will enable TMCs to service all their clients’ airline tickets, regardless of the purchase channel. This will require efficient, real-time transmission of data. Opening up customer service opportunities to agencies in a channel-agnostic environment alleviates strain for the airline, and it creates a more positive traveler experience. </div>}></Todaytomorrow>
        </div>
      </Pageslide>
      <Pageslide>
        <div className="blueSlide">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>In the future, corporate travel programs can work with their TMCs and online booking tools to create in-policy bundles for road warriors. ARC’s research identifies which policy changes can contribute to more productivity, retention, wellness and trip success.
                </h2>
                <div className="blueContainer">
                  See top priorities of road warriors.
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
                <h2>The traveler has happily arrived at their destination.
            <br /><br />After enjoying their trip, the traveler ventures back home. (But the journey’s not over yet!)
          </h2>
                <Link to="/outcome/">
                  <button className="animated pulse slower infinite">Next Step: Outcome</button> </Link>
              </div>
              <div className="col-md-6">
                <img src="https://www2.arccorp.com/globalassets/traveljourney/img/tripend.jpg" alt="Inspire End" />
              </div>
            </div>

          </div>
        </div>
      </Pageslide>
      <Footer />
      <Drawer className="tripDrawer" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visible}>
        <div className="infoDrawer">
          {drawerContent}

        </div>
      </Drawer>

      <Drawer className="blueDrawer blueDrawerTrip" placement="right" width="1080px" closable={true} onClose={this.onClose} visible={this.state.visibleBlue}>
        <div className="infoDrawer">
          <h2>Maximizing Trip Success, Retention and Wellness</h2>
          <p >To maximize trip success, travel program managers can start making small, conscious decisions that shift their policies from a cost-focused model to a more traveler-focused model.</p>
          <div className="blueList">
            <strong>Prioritize for:</strong><br />
            <ul>
              <li>Better Sleep</li>
              <li>Reducing personal travel time</li>
              <li>Allowing non-stops and better cabin policies</li>
              <li>Promoting healthier diets, more exercise</li>
              <li>Choosing better hotels</li>
              <li>Contracting with more punctual airlines</li>
            </ul>
          </div>

          <div className="blueList">
            <strong>Reimburse for:</strong> <br />
            <ul>
              <li>Faster airport security lines (e.g., TSA Pre&#10003;&reg;, Clear)</li>
              <li>Priority boarding</li>
              <li>Preferred seats</li>
              <li>Wi-fi</li>
              <li>Airport lounge access</li>
              <li>Gyms, exercise classes</li>
            </ul>
          </div>

          <p className="roadSource">Source: “Traveler Friction: Insights from U.S. Road Warriors,” 2016 ARC, American Express GBT and tClara” </p>

        </div>
      </Drawer>

      <Modal
        visible={this.state.visibleModal}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        centered
        width="800px"
      >
        {modalContent}
      </Modal>
    </div>);
  }
}

export default Trip;

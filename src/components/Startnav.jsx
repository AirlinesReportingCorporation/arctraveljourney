import React, { Component } from "react";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Startnav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navdisplay: "none"
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        if (this.state.navdisplay == "none") {
            this.setState({ navdisplay: "block" });
        }
        else {
            this.setState({ navdisplay: "none" });
        }
    }

    render() {
        return (<div className="startNav-container">
            <div className="startNav">
                <div className="nav-grip">
                    <i onClick={this.toggleNav} className="fas fa-bars"></i>
                </div>
            </div>
            <div className="topNavContainer animated fadeIn" style={{ display: this.state.navdisplay }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Link onClick={this.toggleNav} to="/">Intro</Link>
                            <Link onClick={this.toggleNav} to="/inspire/"><span>Step 1</span> Inspire</Link>
                            <Link onClick={this.toggleNav} to="/shop/"><span>Step 2a</span> Shop</Link>
                            <Link onClick={this.toggleNav} to="/offer/"><span>Step 2b</span> Offer</Link>

                        </div>
                        <div className="col-lg-6">
                            <Link onClick={this.toggleNav} to="/purchase/"><span>Step 3</span> Purchase</Link>
                            <Link onClick={this.toggleNav} to="/pretrip/"><span>Step 4</span> Pre-trip</Link>
                            <Link onClick={this.toggleNav} to="/trip/"><span>Step 5</span> Trip</Link>
                            <Link onClick={this.toggleNav} to="/outcome/"><span>Step 6</span> Outcome</Link>
                        </div>
                    </div>
                    <div className="topNavClose">
                        <i onClick={this.toggleNav} className="fas fa-times"></i>
                    </div>
                </div>

            </div>
        </div>);
    }
}

export default Startnav;

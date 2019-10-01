import React, { Component } from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<footer>
            <div className="footer-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-l-white.png" alt="ARC Logo" />
                        </div>
                        <div className="col-md-9 text-right" style={{textAlign: "right"}}>
                            &copy; 2019 Airlines Reporting Corporation (ARC). All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
    }
}

export default Footer;

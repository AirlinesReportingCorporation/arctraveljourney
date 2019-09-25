import React, {Component} from "react";
import ReactDOM from "react-dom";
import './Pageslide.scss';

class Pageslide extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    let noDownArrow = this.props.noArrow;
    let arrow = <div className="downArrow">
      <img className="animated bounce infinite slow" src="img/downArrow.png" alt=""/>
    </div>;

    if (noDownArrow) {
      arrow = "";
    }

    return <div className="pageSlide">
      {this.props.children}
    </div>;
  }
}

export default Pageslide;

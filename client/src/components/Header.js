import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Payments from "./Payments";

class Header extends Component {
  renderContent = () => {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: {auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  };
  render() {
    const { auth } = this.props;
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={auth ? "/surveys" : "/"} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);

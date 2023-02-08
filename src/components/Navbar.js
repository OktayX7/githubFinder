import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  render() {
    const url = "https://github.com";

    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href={url} className="navbar-brand">
            <i className={this.props.icon}></i>
            {this.props.title}
          </a>
        </div>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github m-3",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

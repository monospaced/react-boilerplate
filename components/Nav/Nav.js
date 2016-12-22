import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="Nav">
        <IndexLink to="/">Index</IndexLink> | <Link to="/about">About</Link>
      </nav>
    );
  }
}

module.exports = Nav;

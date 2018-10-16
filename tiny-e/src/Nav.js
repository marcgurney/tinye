import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo"><Link to="/" className="logo">Tiny-E</Link></div>
        <div className="user-session">[ placeholder ]</div>
      </div>
    );
  }
}

export default Nav;

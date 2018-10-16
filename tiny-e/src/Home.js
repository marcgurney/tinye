import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Featured Products!!</h1>
        <ul>
        	<li><Link to="/product/BACKS0001">Back Scratcher</Link></li>
        	<li><Link to="/product/COOK0001">Oven Mit</Link></li>
        	<li><Link to="/product/FLOWR0001">Elegant Vase</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;

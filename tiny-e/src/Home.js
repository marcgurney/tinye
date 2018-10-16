import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Featured Products!!</h1>
        <ul>
        	<li>product 1</li>
        	<li>product 2</li>
        	<li>product 3</li>
        </ul>
      </div>
    );
  }
}

export default Home;

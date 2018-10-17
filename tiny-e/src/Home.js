import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

class Home extends Component {
	constructor(props) {
    super(props);
    
    this.productId = props.match.params.sku;
    this.state = {
      fetching: true,
    };
  }
  
  componentDidMount() {
    this.props.db.collection('products').find({}, {limit: 3}).asArray().then(docs => {
      this.featuredItems = docs;
      this.setState({
        fetching: false,
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Featured Products!!</h1>
        {!this.state.fetching && (
          <ul className="featured-products-list">
	        	{this.featuredItems.map(({ sku, name, description, price }) => (
	        		<ProductItem name={name} sku={sku} description={description} price={price} imageURL="" />
	        	))}
	        </ul>
        )}
      </div>
    );
  }
}

export default Home;

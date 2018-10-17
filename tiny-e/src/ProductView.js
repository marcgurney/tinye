import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductView extends Component {
  constructor(props) {
    super(props);
    
    this.productId = props.match.params.sku;
    this.state = {
      fetching: true,
    };
  }

  componentDidMount() {
    this.props.db.collection('products').find({sku: this.productId}).first().then(doc => {
      this.item = doc;
      this.setState({
        fetching: false,
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="product">
        {!this.state.fetching && (
          <React.Fragment>
            <h1>{this.item.name}</h1>
            <p className="product-description">{this.item.description}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ProductView;

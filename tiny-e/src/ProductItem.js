import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ name, sku, description, price, imageURL }) => {
	return (
		<li className="product-item">
			<div className="product-item-header">
				<Link className="product-item-link" to={`/product/${sku}`}>{name}</Link>
				<div className="product-item-price">{price}</div>
			</div>
			<p className="product-item-description">{description}</p>
		</li>
	);
}

export default ProductItem

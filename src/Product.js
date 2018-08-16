import React from 'react';
import './App.css';

class Product extends React.Component {
  render() {
    return <h2>AS3 {this.props.price}</h2>;
  }
}

export default Product;

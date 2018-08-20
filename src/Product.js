import React from 'react';
import './App.css';

class Product extends React.Component {
  render() {
    const handleClick = () => {
      this.props.choice(this.props.product);
    };
    const isActive = this.props.active === this.props.product ? 'active' : '';
    return (
      <div className={isActive + ' product'}>
        <h2>
          {this.props.product.name} {this.props.product.price}
        </h2>
        <button onClick={handleClick.bind(this)}>Select Product</button>
      </div>
    );
  }
}

export default Product;

import React from 'react';
import './App.css';
import Button from './Button.js';
import PreAuth from './PreAuth.js';
import Product from './Product.js';

export const PriceContext = React.createContext(0);

class App extends React.Component {
  constructor() {
    super();
    this.state = {shown: false, active: null};
    this.mattresses = [
      {name: 'AS1', price: 999},
      {name: 'AS2', price: 1100},
      {name: 'AS3', price: 1300},
    ];
  }

  changePrice(mattress) {
    this.setState({active: mattress});
  }

  render() {
    const products = this.mattresses.map(mattress => {
      return (
        <Product
          key={mattress.name}
          active={this.state.active}
          product={mattress}
          choice={this.changePrice.bind(this)}
        />
      );
    });
    return (
      <div className="App">
        <div className="products-button">
          <div className="products">{products}</div>
          <Button
            onClick={() => this.setState({shown: true})}
            message="See financing offer"
          />
          <div className="Explanation">
            <p>
              This is the product details page. For this exercise, you can
              select one of three products, but typically, only one would be
              selected
            </p>
            <p>
              <strong>First, select a product.</strong> Then, click{' '}
              <strong>"See financing offer"</strong> to continue through the
              demo.
            </p>
          </div>
        </div>
        <PriceContext.Provider
          value={this.state.active !== null ? this.state.active.price : 0}>
          <PreAuth shown={this.state.shown} />
        </PriceContext.Provider>
      </div>
    );
  }
}

export default App;

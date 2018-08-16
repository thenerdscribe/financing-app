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
    this.mattresses = {as1: 999, as2: 1100, as3: 1300};
  }
  render() {
    return (
      <div className="App">
        <div>
          <Product price={this.mattresses.as3} />
          <Button
            onClick={() =>
              this.setState({shown: true, active: this.mattresses.as3})
            }
            message="See financing offer"
          />
        </div>
        <PriceContext.Provider value={this.state.active}>
          <PreAuth shown={this.state.shown} />
        </PriceContext.Provider>
      </div>
    );
  }
}

export default App;

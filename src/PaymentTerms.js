import React from 'react';
import Success from './Success.js';
import './App.css';

class PaymentTerms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {range: 3, downPayment: 300};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({range: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    if (this.state.submitted) {
      return <Success />;
    } else if (this.props.approved) {
      return (
        <div className="pop-up payment-terms approved">
          <h2>Congrats</h2>
          <p>Select your payment terms</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="paymentRates">How many months?</label>
            <input
              type="range"
              min="3"
              max="9"
              step="3"
              value={this.state.range}
              onChange={this.handleChange}
            />
            <div>{this.state.range} Months</div>
            <label htmlFor="downPayment">Down payment</label>
            <input
              type="number"
              id="downPayment"
              value={this.state.downPayment}
              onChange={event =>
                this.setState({downPayment: event.target.value})
              }
            />
            <div>
              $
              {(
                (this.props.value - this.state.downPayment) /
                this.state.range
              ).toFixed(2)}{' '}
              Monthly Payment
            </div>
            <input
              type="submit"
              value="Submit your order"
              onClick={() => {
                this.setState({submitted: true});
              }}
            />
          </form>
        </div>
      );
    } else {
      return (
        <div className="pop-up payment-terms rejected">
          <h2>Sorry</h2>
          <p>You don't current quality for this deal</p>
        </div>
      );
    }
  }
}

export default PaymentTerms;

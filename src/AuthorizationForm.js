import React from 'react';
import PaymentTerms from './PaymentTerms.js';
import { PriceContext } from './App.js';
import './App.css';

class AuthorizationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      ssn: '',
      readAgreement: false,
      dob: '',
      email: '',
      approved: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ waiting: true });

    setTimeout(() => {
      const approval = Math.random() <= 0.8 ? true : false;
      this.setState({
        waiting: false,
        approved: approval
      });
    }, 2000);
  }

  render() {
    if (this.state.approved !== null) {
      return (
        <PriceContext.Consumer>
          {value => (
            <PaymentTerms approved={this.state.approved} value={value} />
          )}
        </PriceContext.Consumer>
      );
    } else {
      return (
        <div className="pop-up">
          <h3>Submit your Application</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="email">Email Address</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <label htmlFor="fname">First Name</label>
              <input
                required
                type="text"
                name="fname"
                id="fname"
                value={this.state.fname}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <label htmlFor="lname">Last Name</label>
              <input
                required
                type="text"
                name="lname"
                id="lname"
                value={this.state.lname}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <label htmlFor="ssn">
                Last Four of Your Social Security Number
              </label>
              <input
                required
                type="number"
                name="ssn"
                id="ssn"
                value={this.state.ssn}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <label htmlFor="dob">Date of Birth</label>
              <input
                required
                type="date"
                name="dob"
                id="dob"
                value={this.state.dob}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <label htmlFor="readAgreement">Read our agreement</label>
              <input
                required
                type="checkbox"
                name="readAgreement"
                id="readAgreement"
                value={this.state.readAgreement}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Submit Application</button>{' '}
            {this.state.waiting
              ? 'Processing (This would be us sending the info to a pre-auth service.)'
              : ''}
          </form>
        </div>
      );
    }
  }
}

export default AuthorizationForm;

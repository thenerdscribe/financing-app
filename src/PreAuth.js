import React from 'react';
import Button from './Button.js';
import AuthorizationForm from './AuthorizationForm.js';
import './App.css';

class PreAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: null};
  }

  render() {
    if (this.state.response) {
      return <AuthorizationForm />;
    } else if (this.props.shown) {
      return (
        <div className="pop-up approval-notice">
          <h2>Apply now to get your mattress for only $300 down</h2>
          <p>Sample offer below</p>
          <ul>
            <li>$300 down on approved credit</li>
            <li>Flexible payment terms (3, 6, or 9 months)</li>
            <li>Auto-payment plus make a payment whenever you need</li>
          </ul>
          <p>
            While this screen isn't necessary, it will help customers understand
            our terms and give them more information before starting the
            application process.
          </p>
          <Button
            onClick={() => this.setState({response: true})}
            message="Get approved!"
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PreAuth;

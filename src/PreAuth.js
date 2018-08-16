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
          <p>This would be text about the offer details and how it works</p>
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

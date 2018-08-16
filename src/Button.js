import React from 'react';
import './App.css';

class Button extends React.Component {
  render() {
    return (
      <div className="apply-button">
        <button onClick={this.props.onClick}>{this.props.message}</button>
      </div>
    );
  }
}

export default Button;

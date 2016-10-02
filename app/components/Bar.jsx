import React from 'react';
import ReactDOM from 'react-dom';

/*
  topBarStyle
  logoContainerStyle
  navigationContainerStyle
*/

export default class Bar extends React.Component {
  render() {
    return (
      <div style={this.props.style.topBarStyle}>
        <div style={ths.props.style.logoContainerStyle}>
        </div>
        <div style={this.props.style.navigationContainerStyle}>
        </div>
      </div>
    );
  };
};

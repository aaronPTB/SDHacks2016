import React from 'react';
import ReactDOM from 'react-dom';

var topBarStyle = {
  position: "fixed",
  height: "50px",
  width: "100%",
  backgroundColor: "#002A3B",
  color: "#EEEEEE",
  boxShadow: "1px 1px",
}

var logoContainerStyle = {
  float: "left",
}

var navigationContainerStyle = {
  float: "right",
}

export default class Bar extends React.Component {
  render() {
    return (
      <div style='{topBarStyle}'>
        <div style='{logoContainerStyle}'>
        </div>
        <div style='{navigationContainerStyle}'>
        </div>
      </div>
    );
  }
}

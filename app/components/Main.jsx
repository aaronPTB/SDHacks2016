import React from 'react';
import ReactDOM from 'react-dom';
import Bar from "./Bar.jsx";

export default class Main extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div style={this.props.style.bigDivStyle}>
          <div>
            <h1>Hello, world!</h1>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import Bar from '../components/Bar.jsx';
import Main from '../components/Main.jsx';

import Styles from '../components/Styles.jsx'
//import covert from './convert.jsx';
//
ReactDOM.render(
  <View>
    <Bar style={Styles.bar}/>
    <Main style={Styles.main}/>
  </View>,
  document.getElementById('root')
);

console.log(Styles.container);

import React from 'react';
import ReactDOM from 'react-dom';

// named import
import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
  // React.createElement(HelloWorld),
  <HelloWorld />,
  document.querySelector('#root'),
);





// // function declaration
// function HelloWorld() {
//   return React.createElement('h1', null, 'Hello World!');
// }

// // function expression
// const HelloWorld2 = function() {
//   return React.createElement('h1', null, 'Hello World!');
// };




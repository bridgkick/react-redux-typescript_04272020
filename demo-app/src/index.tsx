import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'red' },
  { id: 2, name: 'white' },
  { id: 3, name: 'orange' },
  { id: 4, name: 'brown' },
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);

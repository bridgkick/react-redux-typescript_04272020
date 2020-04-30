import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { CalcToolContainer } from './containers/CalcToolContainer';
import { calcStore } from './stores/calcStore';

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);

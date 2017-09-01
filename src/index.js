import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from '../src/store/configureStore';
import Root from '../src/core/components/Root';
import '../src/main.scss';

const store = configureStore;

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

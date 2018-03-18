import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import Store from './redux/store';
import App from './modules/App';

import { getDiscussions } from './redux/action';

import './styles/main.styl';

if (module.hot) module.hot.accept();

// Get Discussions
Store.dispatch(getDiscussions());

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

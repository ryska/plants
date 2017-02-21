import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import plants from './data/plants';

const defaultState = {
  plants
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(plants, defaultState, enhancers);

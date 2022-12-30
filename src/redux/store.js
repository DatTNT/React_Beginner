import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootreducer'

import { composeWithDevTools } from 'redux-devtools-extension';

// Create store of redux
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
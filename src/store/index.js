import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk';

import countriesReducer from './countries/reducer';

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const reducers = combineReducers({ countriesReducer });

const store = createStore(reducers, composeEnhancer);

export default store;

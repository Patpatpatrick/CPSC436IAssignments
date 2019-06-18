import { combineReducers } from 'redux';

import fetchReducers from './fetchReducers.js';
import postReducers from './postReducers.js';
import delReducers from './delReducers';
export default combineReducers({ 
	fetchReducers,
	postReducers,
	delReducers
});

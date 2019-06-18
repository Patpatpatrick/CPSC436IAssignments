import { combineReducers } from 'redux';
// import messageReducer from './messageReducer.js';
import popMessageReducer from './popMessageReducer.js';
// import changeInputReducer from './changeInputReducer.js';
import fetchReducers from './fetchReducers.js';
import postReducers from './postReducers.js';
import delReducers from './delReducers';
export default combineReducers({ 
	// messageReducer,
	popMessageReducer,
	fetchReducers,
	postReducers,
	delReducers
	// changeInputReducer,
    //anotherKey: anotherReducer //all your reducers should be combined
});

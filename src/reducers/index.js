import { combineReducers } from 'redux';
import * as actions from '../actions';
const defaultState = {
	count : 1,
	unsubmittedMessage : {
		fromname: '',
		toname: '',
		category : 'A',
		textcontent : '',
		date : new Date().toLocaleString()
	},
	messageArray : [{
		fromname: 'LGY',
		toname: 'YGL',
		category : 'A',
		textcontent : 'Hello!',
		date : 'Mon Jun 03 2019 01:46:51 GMT-0700 (PDT)'
	}]
};
const messageReducer = (state = defaultState, action) => {
	switch(action.type){
		case actions.GEN_MESSAGE :
			// console.log(state);
			// console.log([...state.messageArray,state.unsubmittedMessage]);
			console.log(state.count);
			return {
				count : state.count + 1,
				unsubmittedMessage : state.unsubmittedMessage,
				messageArray: [...state.messageArray,state.unsubmittedMessage]
			};
		case actions.CLEAR_ALL:
			// console.log(state);
			return {
				count : 0,
				unsubmittedMessage : state.unsubmittedMessage,
				messageArray: []
			};
		case actions.CLEAR_ONE:
			return	{
				count : state.count - 1,
				unsubmittedMessage : state.unsubmittedMessage,
				messageArray: [...state.messageArray.slice(0,action.toDelIndex).concat(state.messageArray.slice(action.toDelIndex+1))]
			};
		case actions.CHANGE_INPUT :
			var newMessage = Object.assign({}, state.unsubmittedMessage, 
				{ 
					[action.keyToChange]: action.valueToUpdate,
					'date' : new Date()
				}
			);
			console.log(newMessage);
			return {
				count : state.count,
				unsubmittedMessage : newMessage,
				messageArray: state.messageArray
			};
		default:
			return state;
	}
};


export default combineReducers({ 
	messageProcess: messageReducer,
    //anotherKey: anotherReducer //all your reducers should be combined
});

// import defaultState from './defaultState';
// import * as changeInputActions from '../actions/changeInputAction';

// const changeInputReducer = (state = defaultState, action) => {
// 	switch(action.type){
// 		case changeInputActions.CHANGE_INPUT :
// 			var newMessage = Object.assign({}, state.unsubmittedMessage, 
// 				{ 
// 					[action.keyToChange]: action.valueToUpdate,
// 					'date' : new Date()
// 				}
// 			);
// 			console.log(newMessage);
// 			return {
// 				unsubmittedMessage : newMessage,
// 				popUp : state.popUp,
// 				popUpMessageIndex : state.popUpMessageIndex,
// 				messageArray: state.messageArray
// 			};
// 		default:
// 			return state;
// 	}
// };
// export default changeInputReducer;
// import * as messageArrayActions from '../actions/messageArrayActions';
// import defaultState from './defaultState';
// const messageReducer = (state = defaultState, action) => {
// 	switch(action.type){
// 		case messageArrayActions.GEN_MESSAGE :
// 			console.log("here");
// 			// console.log([...state.messageArray,state.unsubmittedMessage]);
// 			return {
// 				unsubmittedMessage : state.unsubmittedMessage,
// 				popUp:  state.popUp,
// 				popUpMessageIndex : state.popUpMessageIndex,
// 				messageArray: [...state.messageArray,state.unsubmittedMessage]
// 			};
// 		case messageArrayActions.CLEAR_ALL:
// 			// console.log(state);
// 			return {
// 				unsubmittedMessage : state.unsubmittedMessage,
// 				popUp:  state.popUp,
// 				popUpMessageIndex : state.popUpMessageIndex,
// 				messageArray: []
// 			};
// 		case messageArrayActions.CLEAR_ONE:
// 			return	{
// 				unsubmittedMessage : state.unsubmittedMessage,
// 				popUp: state.popUp,
// 				popUpMessageIndex : state.popUpMessageIndex,
				// messageArray: [...state.messageArray.slice(0,action.toDelIndex).concat(state.messageArray.slice(action.toDelIndex+1))]
// 			};
// 		default:
// 			return state;
// 	}
// };
// export default messageReducer;
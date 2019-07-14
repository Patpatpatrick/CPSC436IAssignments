import * as fetchActions from '../actions/fetchActions';
import defaultState from './defaultState';
const fetchReducers = (state = defaultState, action) => {
	switch(action.type){
		case fetchActions.ITEMS_HAS_ERRORED :
			return Object.assign({}, state, 
				{ 
                    fetchError: action.hasErrored,
                    fetching: false,
				}
			);
		case fetchActions.ITEMS_IS_LOADING:
			return Object.assign({}, state, 
				{ 
                    fetching:action.isLoading
				}
			);
		case fetchActions.FETCH_DATA_SUCCESS:
			console.log(action.items);
			return Object.assign({}, state, 
				{ 
					messageArray: action.items,
					fetchAddtionally: false,
				}
			);
		case fetchActions.FETCH_SINGLE_ITEM_SUCCESS:
			console.log(action.item);
			return Object.assign({}, state, 
				{ 
					popUp: true,
					popUpMessage: action.item,
					fetchAddtionally: false,
				}
			);
		case fetchActions.RESET_POP_UP_STATUS:
				return Object.assign({}, state, 
					{ 
						popUp: false,
						popUpMessage: {},
					}
				);
		case fetchActions.CHANGE_INPUT:
				var newMessage = Object.assign({}, state.popUpMessage, 
					{ 
						[action.keyToChange]: action.valueToUpdate,
					}
				);
				return Object.assign({}, state, 
					{ 
						popUpMessage : newMessage,
					}
				);
		default:
			return state;
	}
};
export default fetchReducers;
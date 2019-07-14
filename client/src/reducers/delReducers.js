import * as delActions from '../actions/delActions';
import defaultState from './defaultState';
const delReducers = (state = defaultState, action) => {
	switch(action.type){
		case delActions.DEL_HAS_ERRORED:
			return Object.assign({}, state, 
				{ 
                    delError: action.hasErrored,
                    deleting: false,
				}
			);
		case delActions.IS_DELETING:
			return Object.assign({}, state, 
				{ 
                    deleting:action.isDeleting
				}
			);
		case delActions.DELETE_DATA_SUCCESS:
			return Object.assign({}, state, 
				{ 
                    messageArray: [],
					delDone: true,
					fetchAddtionally: true
				}
			);
		case delActions.RESET:
			return Object.assign({}, state, 
				{ 
					fetchAddtionally: false
				}
			);
		default:
			return state;
	}
};
export default delReducers;
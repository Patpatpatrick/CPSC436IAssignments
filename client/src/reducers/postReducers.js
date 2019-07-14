import * as postActions from '../actions/postActions';
import defaultState from './defaultState';
const postReducers = (state = defaultState, action) => {
	switch(action.type){
		case postActions.POST_HAS_ERRORED :
			return Object.assign({}, state, 
				{ 
                    postError: action.hasErrored,
                    posting: false,
				}
			);
		case postActions.FORM_IS_POSTING:
			return Object.assign({}, state, 
				{ 
                    posting:action.isPosting
				}
			);
		case postActions.POST_DATA_SUCCESS:
			return Object.assign({}, state, 
				{ 
                    postSuccess: true,
					fetchAddtionally: true
				}
			);
		case postActions.RESET:
			return Object.assign({}, state, 
				{ 
					fetchAddtionally: false
				}
			);
		default:
			return state;
	}
};
export default postReducers;
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED'
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_SINGLE_ITEM_SUCCESS= 'FETCH_SINGLE_ITEM_SUCCESS'
export const RESET_POP_UP_STATUS = 'RESET_POP_UP_STATUS'
export const CHANGE_INPUT = 'CHANGE_INPUT';

export const hasErrored = (bool) => {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export const isLoading = (bool) => {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

// Redux-thunk, 
export const fetchData = (url) => {
    // it returns a function!!!!
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(isLoading(false));
                return response;
            })
            .then((response) => {
                return response.json();
            })
            .then((items) => {
                dispatch(fetchDataSuccess(items));
            })
            .catch(() => dispatch(hasErrored(true)));
    };
}

export const fetchSingleItem = (url) => {
    console.log('Here in fetchSingleItem');
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(isLoading(false));
                return response;
            })
            .then((response) => {
                return response.json();
            })
            .then((item) => {
                dispatch(fetchSingleDataSuccess(item));
            })
            .catch(() => dispatch(hasErrored(true)));
    };
}


export const fetchDataSuccess = (items) => {
    return {
        type: FETCH_DATA_SUCCESS,
        items // this is ES6 property, it means "items":items or items:items
    };
}

export const fetchSingleDataSuccess = (item) => {
    return {
        type: FETCH_SINGLE_ITEM_SUCCESS,
        item // this is ES6 property, it means "items":items or items:items
    };
}

export const resetPopUpStatus = () => {
    return {
        type: RESET_POP_UP_STATUS
    };
}
export const changePopedMessage = (key,value) => {
	return {
		type: CHANGE_INPUT,
		keyToChange: key,
		valueToUpdate : value
	};
};


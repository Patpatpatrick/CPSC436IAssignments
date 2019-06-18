export const DEL_HAS_ERRORED = 'DEL_HAS_ERRORED'
export const IS_DELETING = 'IS_DELETING'
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS'
export const RESET = 'RESET'

export const hasErrored = (bool) => {
    return {
        type: DEL_HAS_ERRORED,
        hasErrored: bool
    };
}

export const isDeleting = (bool) => {
    return {
        type: IS_DELETING,
        isDeleting: bool
    };
}

export const delData = (url) => {
    return (dispatch) => {
        dispatch(isDeleting(true));
        fetch(url, {
            method: 'DELETE'
          })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(isDeleting(false));
                return response;
            })
            .then(response => response.json())
            .then((success) => {
                alert(success.status);
                dispatch(delDataSuccess());
            })
            .catch(() => dispatch(hasErrored(true)));
    };
}


export const delDataSuccess = () => {
    return {
        type: DELETE_DATA_SUCCESS,
    };
}


export const resetDel = () => {
    return {
        type: RESET,
    };
}
export const POST_HAS_ERRORED = 'POST_HAS_ERRORED'
export const FORM_IS_POSTING = 'FORM_IS_POSTING'
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS'
export const RESET = 'RESET'

export const hasErrored = (bool) => {
    return {
        type: POST_HAS_ERRORED,
        hasErrored: bool
    };
}

export const isPosting = (bool) => {
    return {
        type: FORM_IS_POSTING,
        isPosting: bool
    };
}

export const uploadData = (url,data,meth) => {
    console.log('uploadData' + meth);
    return (dispatch) => {
        dispatch(isPosting(true));
        fetch(url, {
            method: meth,
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
          })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(isPosting(false));
                return response;
            })
            .then(response => response.json())
            .then((success) => {
                alert(success.status);
                dispatch(postDataSuccess());
            })
            .catch(() => dispatch(hasErrored(true)));
    };
}

export const postDataSuccess = () => {
    return {
        type: POST_DATA_SUCCESS,
    };
}

export const reset = () => {
    return {
        type: RESET,
    };
}
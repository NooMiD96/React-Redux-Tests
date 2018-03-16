import * as Actions from './actions';

export function fetchPosts(dataToSend) {
    return dispatch => {
        dispatch(Actions.DataRequest())
        return fetch('/data', {
                method: 'POST',
                body: JSON.stringify(dataToSend)
            }).then(response => dispatch(Actions.DataRequestSuccess('Loading...')));
    }
}

export function fetchGet() {
    return dispatch => {
        dispatch(Actions.DataRequest())
        return fetch('/data', {
                method: 'GET'
            }).then(response => response.json())
            .then(json => dispatch(Actions.DataRequestSuccess(json)));
    }
}
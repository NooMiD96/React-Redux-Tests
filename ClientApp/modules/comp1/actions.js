import * as t from './actionTypes';

export const CountInc = () => ({
    type: t.COUNT_INC
});

export const DataRequest = () => ({
    type: t.DATA_REQUEST
});

export const DataRequestSuccess = (data) => ({
    type: t.DATA_REQUEST_SUCCESS,
    payload: data
});
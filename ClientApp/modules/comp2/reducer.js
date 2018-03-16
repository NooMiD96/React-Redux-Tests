import { State } from './model'
import * as actionTypes from './actionTypes'

export default function reducer(state = State, action) {
    switch (action.type) {
        case actionTypes.COUNT_INC:
            return {
                ...state,
                count: state.count + 10
            }
        case actionTypes.DATA_REQUEST:
            return {
                ...state,
                gettedData: 'Loading...'
            }
        case actionTypes.DATA_REQUEST_SUCCESS:
            if(action.payload === 'Loading...')
                return { ...state };
            else {
                state.gettedData = action.payload;
                return state;
            }
        default:
            return state;
    }
}
import { State } from './model'
import * as actionTypes from './actionTypes'

export default function reducer(state = State, action) {
    switch (action.type) {
        case actionTypes.COUNT_INC:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.DATA_REQUEST:
            return {
                ...state,
                gettedData: 'Loading...'
            }
        case actionTypes.DATA_REQUEST_SUCCESS:
            if(state.gettedData === 'Loading...')
                return state;
            else
                return {
                    ...state,
                    gettedData: action.payload
                }
        default:
            return state;
    }
}
import { State } from './model'
import * as actionTypes from './actionTypes'

export default function reducer(state = State, action) {
    switch (action.type) {
        case actionTypes.COUNT_INC:
            return {
                ...state,
                count: state.count + 1
            }

        default:
            return state;
    }
}
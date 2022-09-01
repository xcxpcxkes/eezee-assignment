import { ADD_ITEMS, GET_QTY, SET_QTY } from './action'

import { initialState } from './appContext'

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEMS:
            return {
                ...state,
            }
        case GET_QTY:
            return {
                ...state,
                qty: localStorage.getItem('qty'),
            }
        case SET_QTY:
            return {
                ...state,
                qty: action.payload.qty,
            }
        default:
            throw new Error(`no such action: ${action.type}`)
    }
}

export default reducer

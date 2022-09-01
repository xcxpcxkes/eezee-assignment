import React, { useContext, useReducer } from 'react'
import reducer from './reducer'

import { GET_QTY, ADD_ITEM, SET_QTY, REMOVE_ITEM } from './action'

const quantity = localStorage.getItem('qty')

export const initialState = {
    qty: quantity ?? 0,
    items: [],
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // const addItem = (item, amount) => {
    //   dispatch({
    //     type: ADD_ITEM
    //   });
    // };

    // const removeItem = (item) => {
    //   dispatch({
    //     type: REMOVE_ITEM
    //   });
    // };

    const getQty = async () => {
        dispatch({ type: GET_QTY })
    }

    const setQty = async (qty) => {
        dispatch({ type: SET_QTY, payload: { qty } })
        addToLocalStorage(qty)
    }

    const addToLocalStorage = (qty) => {
        localStorage.setItem('qty', qty)
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                getQty,
                setQty,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider }

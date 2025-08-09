import type { AppReducerActions, TransactionItemsObject } from '../types/Types'

import type { Reducer } from "react";


const AppReducer: Reducer<TransactionItemsObject, AppReducerActions> = (state:TransactionItemsObject, action:AppReducerActions) => {
    switch(action.type) {
        case 'DELETE_ITEM':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_ITEM':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
};

export default AppReducer
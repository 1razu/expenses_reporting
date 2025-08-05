import type { AppReducerActions } from '../types/Types'



export default (state:any, action: AppReducerActions) => {
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
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import type { AppProviderProps, TransactionItemType, TransactionItemsObject } from "../types/Types";



// Initial state

const TransactionsState:TransactionItemsObject = {
    transactions: [
/*        {
            id: 1,
            label: 'dummy 1',
            cost: -100,
            category: 'Dummy cat',
            date: "2022-01-01"
        },
        {
            id: 2,
            label: 'dummy 2',
            cost: -200,
            category: 'Dummy cat',
            date: "2022-02-02"
        },
        {
            id: 3,
            label: 'dummy 3',
            cost: -200,
            category: 'Dummy cat',
            date: "2022-02-02"
        }
*/
    ]
}

// Create context
export const GlobalContext:React.Context<any> = createContext(TransactionsState);

// Provider component

export const GlobalProvider = ({ children }: AppProviderProps) => {
    const [state, dispatch] = useReducer(AppReducer, TransactionsState);

    //Actions
    function deleteItem(id:number) {
        console.log("deleted item: ",id)
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
            });
    };
    function addItem(item:TransactionItemType) {
        console.log("added item: ",item.id)
        dispatch({
            type: 'ADD_ITEM',
            payload: item
            });
    };

    return (<GlobalContext.Provider value={
        {
            transactions: state.transactions,
            deleteItem,
            addItem
        }
    }>
        {children}
    </GlobalContext.Provider>);
}

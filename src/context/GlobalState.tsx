import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import type { AppProviderProps, TransactionItem, TransactionItemsObject } from "../types/Types";


// Initial state

const initialTransactionsState:TransactionItemsObject = {
    transactions: [
        {
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
    ]
}

// Create context
export const GlobalContext:any = createContext(initialTransactionsState);

// Provider component

export const GlobalProvider = ({ children }: AppProviderProps) => {
    const [state, dispatch] = useReducer(AppReducer, initialTransactionsState);

    //Actions
    function deleteItem(id:number) {
        console.log("deleted item: ",id)
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
            });
    };
    function addItem(item:TransactionItem) {
        console.log("added item: ",item.id)
        dispatch({
            type: 'ADD_ITEM',
            payload: item
            });
    };

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteItem,
        addItem
    }}>
        {children}
    </GlobalContext.Provider>);
}

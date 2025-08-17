import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import type { AppProviderProps, TransactionItemType, TransactionItemsObject } from "../types/Types";



// Initial state

const TransactionsState:TransactionItemsObject = {
    transactions: [
{
            id: 1,
            type: "expense",
            label: 'dummy 1',
            amount: 100,
            category: 'Dummy cat',
            date: "2025-08-01"
        },
        {
            id: 2,
            type: "expense",
            label: 'dummy 2',
            amount: 200,
            category: 'Dummy cat',
            date: "2025-08-02"
        },
        {
            id: 3,
            type: "income",
            label: 'Aug Salary',
            amount: 2000,
            category: 'Salary',
            date: "2025-08-02"
        }
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

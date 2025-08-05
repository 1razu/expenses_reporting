import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import type { AppProviderProps, GlobalState } from "../types/Types";


// Initial state

const initialState: GlobalState = {
    transactions: []
    /*
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
    ] */
}

// Create context
export const GlobalContext = createContext<GlobalState>(initialState);

// Provider component

export const GlobalProvider = ({ children }: AppProviderProps) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}

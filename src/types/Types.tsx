import type { ReactNode } from "react";

// React Types

export type AppProviderProps = {
  children: ReactNode;
};



// Custom Types

export type AppReducerActions = {
  type: string
  payload: any
}

export type TransactionItem = {
  id: number
  label: string;
  cost: number;
  category: string;
  date: string;
};



export type TransactionItemsObject = {
  transactions: TransactionItem[];
};

export type TransactionItemProps = {
  transaction: TransactionItem;
};




export type ExpensesProps = {
  expenses: number;
};

export type BalanceValues = {
  expenses: number,
  income: number,
  balance: number
};


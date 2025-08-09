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

export type TransactionItemType = {
  id: number;
  type: string;
  label: string;
  amount: number;
  category: string;
  date: string;
};



export type TransactionItemsObject = {
  transactions: TransactionItemType[];
};

export type TransactionItemProps = {
  transaction: TransactionItemType;
};




export type ExpensesProps = {
  expenses: number;
};

export type BalanceValues = {
  expenses: number,
  income: number,
  balance: number
};


import type { ReactNode } from "react";


export type AppProviderProps = {
  children: ReactNode;
};

export type GlobalState = {
  transactions: TransactionItem[];
};

export type TransactionItem = {
  id: number
  label: string;
  cost: number;
  category: string;
  date: string;
};

export type Props = {
  transaction: TransactionItem;
};
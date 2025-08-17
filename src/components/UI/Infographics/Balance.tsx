//import React from 'react';
import { useContext } from 'react';
import type { ReactNode } from 'react';
import styles from './Balance.module.css';
import { GlobalContext } from '../../../context/GlobalState';
import type {BalanceValues, TransactionItemType} from '../../../types/Types'



export default function BalanceDetails():ReactNode{
    const {transactions} = useContext(GlobalContext);  
  
    // Extracts expense transaction amounts from Global Context 
    const expenseAmounts = transactions
        .filter((t: TransactionItemType) => t.type === "expense")
        .map((t: TransactionItemType) => t.amount);
    
    const incomeAmounts = transactions
        .filter((t: TransactionItemType) => t.type === "income")
        .map((t: TransactionItemType) => t.amount);

    // Returns an object with expenses, income and balance
    function balanceValues():BalanceValues{ 
        let expenses = 0;
        let income = 0;
        
        for (let i of expenseAmounts){ expenses += i }
        for (let i of incomeAmounts){ income += i }
        
        let balance = income - expenses;
        return {
            expenses: expenses,
            income: income,
            balance: balance
        }
    };
    
    // KPI components
    function TotalExpenses(){
        return <h4 className={styles.sum}> - { balanceValues().expenses }</h4>
    };
    function TotalIncome(){
        return <h4 className={styles.sum}> + {balanceValues().income}</h4>
    };
    function TotalBalance(){
        return <h4 className={styles.sum}>{balanceValues().balance}</h4>
    };


    return (
        <div className={styles.header}>
            <><h3 className={styles.sum}> Income</h3>
            <TotalIncome /></>
            <><h3 className={styles.sum}>Expenses</h3>
            <TotalExpenses /></>
            <><h3 className={styles.sum}> Balance</h3>
            <TotalBalance /></>
        </div>
    );
};

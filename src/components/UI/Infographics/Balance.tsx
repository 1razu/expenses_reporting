//import React from 'react';
import { useContext } from 'react';
import type { ReactNode } from 'react';
import styles from './Balance.module.css';
import { GlobalContext } from '../../../context/GlobalState';
import type {BalanceValues, TransactionItem} from '../../../types/Types'



export default function BalanceDetails():ReactNode{
    const {transactions} = useContext(GlobalContext);  
  
    // Extracts transaction amounts from Global Context 
    const amounts = transactions.map((t:TransactionItem) => t.cost);
    
    // Returns an object with expenses, income and balance
    function balanceValues():BalanceValues{ 
        let expenses = 0;
        for (let i of amounts){ expenses += i }
        
        let income = 1000;
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

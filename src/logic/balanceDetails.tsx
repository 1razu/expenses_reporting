/*

//import { submittedTransactions } from '../components/Forms/ExpenseEntryForms'
import { useState } from 'react';
import type { TransactionItem } from '../types/Types'


function useBalance() {
    const [balanceDetails, setBalanceDetails] = useState({
        income : 0,
        expenses : 0,
        balance : 0
    });

    function updateBalanceDetails(submittedTransactions: TransactionItem[]){
        let newExpenses = 0;
        
        for (const item of submittedTransactions) {
            newExpenses += item.cost}
        
        setBalanceDetails( prev => ({
        ...prev,
        expenses: newExpenses,
        }))
    };
    return { balanceDetails, updateBalanceDetails };
}



*/
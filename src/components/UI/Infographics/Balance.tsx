//import React from 'react';
// import { useState } from 'react';
import styles from './Balance.module.css';
import { useBalance} from '../../../logic/balanceDetails';


export default function BalanceDetails(){

    return (
        <div className={styles.header}>
            <Income />
            <Expenses />
            <Balance />
        </div>
    );
};


function Balance(){
    const { balanceDetails, updateBalanceDetails } = useBalance();
    return (
        <>
            <h3 className={styles.sum}>Balance</h3>
            <h4 className={styles.sum} > {balanceDetails.balance} €</h4>
        </>
    );
};


function Income() {
const { balanceDetails, updateBalanceDetails } = useBalance();
    return (
        <>
            <h3 className={styles.sum}>Income</h3>
            <h4 className={styles.sum}> {balanceDetails.income} €</h4>
        </>
    );
}

function Expenses() {
const { balanceDetails, updateBalanceDetails } = useBalance();
    return (
        <>
            <h3 className={styles.sum}>Expenses</h3>
            <h4 className={styles.sum}> {balanceDetails.expenses} €</h4>
        </>
    );
};

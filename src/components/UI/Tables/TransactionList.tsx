// import styles from './Transactions.module.css';
import { TransactionLine } from './TransactionLine';

import { useContext } from 'react';

import { GlobalContext } from "../../../context/GlobalState";


export default function TransactionList() {
  const {transactions} = useContext(GlobalContext);  
  
  console.log(transactions);

  return (
    <table>
      <thead>
        <tr>
          <th > Expense </th>
          <th > Cost </th>
          <th > Category </th>
          <th > Date </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => 
          (
            <TransactionLine key= {transaction.id} transaction={transaction} />
          )
         )}
      </tbody>
    </table>
  );
};
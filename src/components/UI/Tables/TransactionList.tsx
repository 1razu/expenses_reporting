// import styles from './Transactions.module.css';
import { TransactionLine } from './TransactionLine';

import { useContext } from 'react';

import { GlobalContext } from "../../../context/GlobalState";

import type {TransactionItemsObject} from '../../../types/Types';


export default function TransactionList() {
  const {transactions}:TransactionItemsObject = useContext(GlobalContext);  
  
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
        {transactions.map(t => 
          (
            <TransactionLine key= {t.id} transaction={t} />
          )
         )}
      </tbody>
    </table>
  );
};
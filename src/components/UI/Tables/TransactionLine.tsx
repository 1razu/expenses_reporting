
import {useContext, type ReactNode} from 'react';
import type { TransactionItemProps } from "../../../types/Types";
import styles from './TransactionLine.module.css';
import { GlobalContext } from "../../../context/GlobalState";
import dateHandler from '../../../logic/dateHandler';


export function TransactionLine({transaction}: TransactionItemProps){
  const { deleteItem } = useContext(GlobalContext);
  
  function ExpenseComponent(): ReactNode {
    if (transaction.type == "expense") {
      return <td className= {styles.expenseAmount}> - {transaction.amount} </td>
    }
    else {
    return <td className= {styles.incomeAmount}> {transaction.amount} </td>}
  }
  

  return (
    <>
        <tr>
        <td>  <button className={styles.deleteButton} onClick={ () => deleteItem(transaction.id) }> X </button> {transaction.label}</td>
        {ExpenseComponent()}
        <td>{transaction.category}</td>
        <td>{dateHandler.dateToShortString(transaction.date)}</td>
      </tr>
    </>
  );
};
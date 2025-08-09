
import {useContext} from 'react';
import type { TransactionItemProps } from "../../../types/Types";
import styles from './TransactionLine.module.css';
import { GlobalContext } from "../../../context/GlobalState";


export function TransactionLine({transaction}: TransactionItemProps){
  const { deleteItem } = useContext(GlobalContext);

  return (
    <>
        <tr>
        <td>  <button className={styles.deleteButton} onClick={ () => deleteItem(transaction.id) }> X </button> {transaction.label}</td>
        <td> - {transaction.cost}</td>
        <td>{transaction.category}</td>
        <td>{transaction.date}</td>
      </tr>
    </>
  );
};

// import React from 'react'
import type { Props } from "../../../types/Types"


export const TransactionLine = ({transaction}: Props) => {
  return (
    <>
        <tr>
        <td>{transaction.label}</td>
        <td>{transaction.cost}</td>
        <td>{transaction.category}</td>
        <td>{transaction.date}</td>
      </tr>
    </>
  );
};
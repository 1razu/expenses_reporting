// import { useState } from 'react';
// import styles from './SummaryTable.module.css';


export default function SummaryTable() {
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
          <tr>
            <td > Rent</td>
            <td> 900€</td>
            <td>Fixed Costs </td>
            <td>Aug 1st 2024</td>
          </tr>
      </tbody>
    </table>
  );
};
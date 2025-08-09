import { useContext, useState } from 'react';
import styles from './ExpenseEntryForms.module.css';
import type { TransactionItemType } from '../../types/Types'
import { GlobalContext } from '../../context/GlobalState';
import dateFormat from '../../logic/dateHandler';

// import { useBalance} from '../../logic/balanceDetails';


//____________CHOSING THE ENTRY METHOD


// Declaring possible entryForms
const entryForms = {
  expenseForm: {
    name:"Expense Form",
    component: ExpensesEntry,
    inactiveComponent:"Income form"},
  incomeForm :{ 
    name:"Income Form",
    component: IncomeEntry,
    inactiveComponent:"Expense Form"
    }
};

// Component that renders chosen form
// This is the only exported component

export default function CurrentForm() {
  const [currentEntryForm, setCurrentEntryForm] = useState<"expenseForm" | "incomeForm">("expenseForm");
  
  const toggleButton = () => {
      setCurrentEntryForm(prev =>
        prev === "expenseForm" ? "incomeForm" : "expenseForm"
      );
  };

  // the chosen component has to be stored in a variable so we can use React syntax in the return statement
  const FormComponent = entryForms[currentEntryForm]["component"]

  return (
    <div>
        <div className={styles.header}>
            <h2>Add an expense</h2> 
            <button className={styles.toggle} onClick={toggleButton}> Use {entryForms[currentEntryForm]["inactiveComponent"]}</button>
        </div>
        <br />
        <FormComponent />
    </div>)
};






// Single entry Form 

function IncomeEntry() {

  const { addItem } = useContext(GlobalContext); 
  
  // Set up state to build an item
  const [transactionItem, setTransactionItem] = useState({    
      id: Date.now(),
      type: "income",
      label: dateFormat.monthShortString+' salary',
      amount: 0,
      category: 'Salary',
      date: ''
  });

  const itemModified = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTransactionItem( prev => ({
      ...prev,
      [name]: name === 'amount' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(transactionItem);
    console.log('New income Item:', transactionItem);

    setTransactionItem({
      id: Date.now(),
      type: "expense",
      label: '',
      amount: 0,
      category: '',
      date: ''
    })
  };
  
  return (
  <form onSubmit={handleSubmit}>
      <label htmlFor="label"> Income Label</label><br />
      <input type="text" id="label" name="label" value={transactionItem.label} onChange={itemModified} required />
      
      <label htmlFor="amount">Income</label><br />
      <input type="number" id="amount" name="amount" value={transactionItem.amount} onChange={itemModified} required />

      <label htmlFor="category">Category</label><br />
      <input type="text" id="category" name="category" value={transactionItem.category} onChange={itemModified} required />

      <label htmlFor="date">date</label><br />
      <input type="date" id="date" name="date" value={transactionItem.date} onChange={itemModified} required />

      <button type="submit">Submit</button>
    </form>
  )


};

function ExpensesEntry() {
  
  const { addItem } = useContext(GlobalContext); 
  
  // Set up state to build an item
  const [transactionItem, setTransactionItem] = useState({    
      id: Date.now(),
      label: '',
      amount: 0,
      category: '',
      date: ''
  });

  const itemModified = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTransactionItem( prev => ({
      ...prev,
      [name]: name === 'amount' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(transactionItem);
    console.log('New expense Item:', transactionItem);

    setTransactionItem({
      id: Date.now(),
      label: '',
      amount: 0,
      category: '',
      date: ''
    })

  };

  
  return (
  <form onSubmit={handleSubmit}>
      <label htmlFor="label"> Expense Label</label><br />
      <input type="text" id="label" name="label" value={transactionItem.label} onChange={itemModified} required />
      
      <label htmlFor="amount">Cost</label><br />
      <input type="number" id="amount" name="amount" value={transactionItem.amount} onChange={itemModified} required />

      <label htmlFor="category">Category</label><br />
      <input type="text" id="category" name="category" value={transactionItem.category} onChange={itemModified} required />

      <label htmlFor="date">date</label><br />
      <input type="date" id="date" name="date" value={transactionItem.date} onChange={itemModified} required />

      <button type="submit">Submit</button>
    </form>
  )
};






// Expense Items
export const submittedTransactions: TransactionItemType[] = [];

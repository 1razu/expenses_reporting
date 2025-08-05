import { useContext, useState } from 'react';
import styles from './ExpenseEntryForms.module.css';
import type { TransactionItem } from '../../types/Types'
import { GlobalContext } from '../../context/GlobalState';

// import { useBalance} from '../../logic/balanceDetails';


//____________CHOSING THE ENTRY METHOD


// Declaring possible entryMethods
const entryMethods = {
  form: {
    name:"Form",
    component: ExpensesEntry,
    inactiveComponent:"File import"},
  file_import :{ 
    name:"File import",
    component: ExpensesFileDrop,
    inactiveComponent:"Form"
    }
};

// Component that renders chosen form
// This is the only exported component

export default function CurrentForm() {
  const [currentEntryMethod, setCurrentEntryMethod] = useState<"form" | "file_import">("form");
  
  const toggleButton = () => {
      setCurrentEntryMethod(prev =>
        prev === "form" ? "file_import" : "form"
      );
  };

  // the chosen component has to be stored in a variable so we can use React syntax in the return statement
  const FormComponent = entryMethods[currentEntryMethod]["component"]

  return (
    <div>
        <div className={styles.header}>
            <h2>Add an expense</h2> 
            <button className={styles.toggle} onClick={toggleButton}> Use {entryMethods[currentEntryMethod]["inactiveComponent"]}</button>
        </div>
        <br />
        <FormComponent />
    </div>)
};



//____________ENTRY METHOD COMPONENTS


// Files drop form

function ExpensesFileDrop() { 
return(
    <div className={styles.dropzone}>
        <p> Drop your CSV file here</p>
    </div>);
}


// Single entry Form 


function ExpensesEntry() {
  
  const { addItem } = useContext(GlobalContext); 
  
  // Set up state to build an item
  const [expenseItem, setExpenseItem] = useState({    
      id: Date.now(),
      label: '',
      cost: 0,
      category: '',
      date: ''
  });

  const itemModified = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExpenseItem( prev => ({
      ...prev,
      [name]: name === 'cost' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(expenseItem);
    console.log('New expense Item:', expenseItem);

    setExpenseItem({
      id: Date.now(),
      label: '',
      cost: 0,
      category: '',
      date: ''
    })

  };

  
  return (
  <form onSubmit={handleSubmit}>
      <label htmlFor="label"> Expense Label</label><br />
      <input type="text" id="label" name="label" value={expenseItem.label} onChange={itemModified} required />
      
      <label htmlFor="cost">Cost</label><br />
      <input type="number" id="cost" name="cost" value={expenseItem.cost} onChange={itemModified} required />

      <label htmlFor="category">Category</label><br />
      <input type="text" id="category" name="category" value={expenseItem.category} onChange={itemModified} required />

      <label htmlFor="date">date</label><br />
      <input type="date" id="date" name="date" value={expenseItem.date} onChange={itemModified} required />

      <button type="submit">Submit</button>
    </form>
  )
};






// Expense Items
export const submittedTransactions: TransactionItem[] = [];

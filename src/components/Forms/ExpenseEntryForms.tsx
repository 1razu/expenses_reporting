import { useState } from 'react';
import styles from './ExpenseEntryForms.module.css';


//____________CHOSING THE ENTRY METHOD


// Declaring possible entryMethods
const entryMethods = {
  form: {
    name:"Form",
    component: ExpensesEntry},
  file_import :{ 
    name:"File import",
    component: ExpensesFileDrop
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
        <div className='header'>
            <h2>Add an expense</h2> 
            <button className='toggle' onClick={toggleButton}> Add through {entryMethods[currentEntryMethod]["name"]}</button>
        </div>
        <FormComponent />
    </div>)
};



//____________ENTRY METHOD COMPONENTS


// Files drop form

function ExpensesFileDrop() { 
return(
    <div className={styles.dropzone}>
        <p>Drop your CSV file here</p>
    </div>);
}


// Single entry Form 



function ExpensesEntry() {
    return (
<form>
  <label htmlFor="label">Label</label><br />
  <input type="label" id="label" name="label" required />
  
  <label htmlFor="cost">Cost</label><br />
  <input type="number" id="cost" name="cost" required />

  <label htmlFor="category">Category</label><br />
  <input type="text" id="category" name="category" required />

  <label htmlFor="date">date</label><br />
  <input type="date" id="date" name="date" required />

  <button type="submit">Submit</button>
</form>
)
};
import styles from './ExpenseEntryForms.module.css'


// Files drop form

export default function ExpensesFileDrop() { 
return(
    <div className={styles.dropzone}>
        <p> Drop your CSV file here</p>
    </div>);
}
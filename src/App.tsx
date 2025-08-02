import './App.css'
import CurrentForm from './components/Forms/ExpenseEntryForms'
import NavBar from './components/UI/Navigation/NavBar'
import SummaryTable from './components/UI/Tables/SummaryTable'

function App() {
  return (
    <div className='main-content'>
    <NavBar />
      <div>
        <h1>Expenses tracker</h1> 
        <div className='content-columns'>
          <div className='form-area'>
            <CurrentForm />
          </div>
          <div className='summary'>
          <h2>Summary</h2>
          <SummaryTable />
          </div>
        </div>
      </div>
    </div>
  )
};

export default App

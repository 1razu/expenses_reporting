import './App.css'
import CurrentForm from './components/Forms/ExpenseEntryForms'
import NavBar from './components/UI/Navigation/NavBar'


function App() {
  return (
    <div className='main-content'>
      <NavBar></NavBar>
      <h1>Expenses tracker</h1> 
      <CurrentForm/>
    </div>
  )
}

export default App

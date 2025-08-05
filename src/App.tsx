import './App.css'
import CurrentForm from './components/Forms/ExpenseEntryForms'
import NavBar from './components/UI/Navigation/NavBar'
import Transactions from './components/UI/Tables/Transactions'
import BalanceDetails from './components/UI/Infographics/Balance'

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className='main-content'>
      <NavBar />
        <div>
          <h1>Expenses tracker</h1> 
          <BalanceDetails />
          <div className='content-columns'>
            <div className='form-area'>
              <CurrentForm />
            </div>
            <div className='summary'>
            <h2>Transactions</h2>
            <Transactions />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
};

export default App

import { useState, useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsContext } from './context/TransactionsContext'

Modal.setAppElement('#root')

function App() {

  const {transactions} = useContext(TransactionsContext)

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  
  return (
    <>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard transactions={transactions}/>

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
    </>
  )
}

export default App

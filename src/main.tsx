import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createServer} from 'miragejs'
import App from './App.tsx'
import './index.css'

createServer({
  routes(){
    this.namespace = 'api'
    this.post('/transactions',)

    this.get('/transactions', () => {
      return [
        {
          id: '1',
          title: 'Transaction one',
          amount: 1500,
          type: 'Income',
          category: 'Service',
          date: '12/10/2023'
        },
        {
          id: '2',
          title: 'Alimentação',
          amount: 2000.30,
          type: 'Outcome',
          category: 'Food',
          date: '13/10/2023'
        }
      ]
    })
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

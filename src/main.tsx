import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createServer, Model, Response} from 'miragejs'
import App from './App.tsx'
import './index.css'
import { Transaction } from './interfaces/Transaction.ts'
import { TransactionsProvider } from './hooks/useTransactions.tsx'

createServer({

  models: {
    transaction: Model.extend<Partial<Transaction>>({})
  },

  seeds(server) {
    server.create('transaction', {
      id: '1',
      title: 'Freelance website',
      type: 'Income',
      category: 'Dev',
      amount: 3000,
      date: new Intl.DateTimeFormat('pt-BR').format(new Date()),
    });

    server.create('transaction', {
      id: '2',
      title: 'Aluguel',
      type: 'Outcome',
      category: 'Casa',
      amount: 1000,
      date: new Intl.DateTimeFormat('pt-BR').format(new Date()),
    });
  },

  routes(){
    this.namespace = 'api'
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.delete('/transactions/:id', (schema, request) => {
      const id = request.params.id
      const transaction = schema.find('transaction', id)

      if (transaction) {
        transaction.destroy()
        return new Response(204)
      }
      else {
        return new Response(404, {}, {error: 'Transação não encontrada'})
      }
    })
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </StrictMode>,
)

import { useState, useEffect } from 'react'
import Style from './style.module.scss'
import { Transaction } from '../../interfaces/Transaction'
import { api } from '../../services/api'

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transaction[]>()

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data))
    })

    return (
        <table className={Style.container}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>

                {transactions && transactions.map((transaction) => {
                    return (
                        <TableRow transaction={transaction} />
                    )
                })}
             
            </tbody>
        </table>
    )
}

interface TableRowProps{
    transaction: Transaction
}

function TableRow({transaction}: TableRowProps){
    return (
        <>
            <tr>
                <td>{transaction.title}</td>
                <td 
                    className={transaction.type == 'Income' ? Style.income : Style.outcome}
                >
                    R$ {transaction.amount}
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.date}</td>
            </tr>
        </>
    )
}
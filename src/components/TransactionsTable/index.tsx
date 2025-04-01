import { useContext } from 'react'

import { TransactionsContext, useTransactions } from '../../hooks/useTransactions'

import { Transaction } from '../../interfaces/Transaction'

import { format } from '../../services/numberFormat'

import Style from './style.module.scss'

import deleteImg from '../../assets/delete.png'

export function TransactionsTable(){

    const {transactions} = useContext(TransactionsContext)

    return (
        <table className={Style.container}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>

                {transactions && transactions.map((transaction) => {
                    return (
                        <TableRow transaction={transaction} key={transaction.id}/>
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
    
    const {removeTransaction} = useTransactions()

    return (
        <>
            <tr>
                <td>{transaction.title}</td>
                <td 
                    className={transaction.type == 'Income' ? Style.income : Style.outcome}
                >
                    R$ {format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.date}</td>
                <td>
                    <button onClick={() => removeTransaction(transaction.id)} className={Style.deleteButton}>
                        <img src={deleteImg} alt="Excluir transação" />
                    </button>
                </td>
            </tr>
        </>
    )
}
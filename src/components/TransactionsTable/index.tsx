import Style from './style.module.scss'
import { Transaction } from '../../interfaces/Transaction'
import { format } from '../../services/numberFormat'


interface TransactionsTableProps{
    transactions: Transaction[]
}

export function TransactionsTable({transactions}: TransactionsTableProps){

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
            </tr>
        </>
    )
}
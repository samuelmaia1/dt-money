import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import Style from './style.module.scss'
import { Transaction } from '../../interfaces/Transaction'

interface DashboardProps{
    transactions: Transaction[]
}

export function Dashboard({transactions}: DashboardProps){
    
    return (
        <>
            <div className={Style.container}>
                <Summary transactions={transactions}/>
                <TransactionsTable transactions={transactions}/>
            </div>
        </>
    )
}
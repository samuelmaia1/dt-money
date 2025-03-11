import { useState, useEffect } from 'react'
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import Style from './style.module.scss'
import { api } from '../../services/api'
import { Transaction } from '../../interfaces/Transaction'

export function Dashboard(){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        api.get('transactions')
        .then(response => setTransactions(response.data))
        setIsLoading(false)
    }, [])
    return (
        <>
            <div className={Style.container}>
                <Summary transactions={transactions}/>
                <TransactionsTable transactions={transactions}/>
            </div>
        </>
    )
}
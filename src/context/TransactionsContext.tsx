import { createContext, useState, useEffect, SetStateAction, Dispatch, ReactNode } from "react";
import { Transaction } from "../interfaces/Transaction";
import { api } from "../services/api";

interface TransactionsContextProps{
    children: ReactNode
}

interface TransactionsProviderValue{
    transactions: Transaction[],
    setTransactions: Dispatch<SetStateAction<Transaction[]>>,
    addTransaction: (transaction: Transaction) => void
}

export const TransactionsContext = createContext<TransactionsProviderValue>({} as TransactionsProviderValue)

export const TransactionsProvider = ({children}: TransactionsContextProps) => {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => {
            setTransactions(response.data.transactions)})
    }, [])

    function addTransaction(transaction: Transaction) {
        api.post('/transactions', transaction)
        setTransactions((prev) => {return [...prev, transaction]})
    }

    return (
        <TransactionsContext.Provider value={{transactions, setTransactions, addTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}
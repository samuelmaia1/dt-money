import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { Transaction } from "../interfaces/Transaction";
import { api } from "../services/api";

interface TransactionsContextProps{
    children: ReactNode
}

interface TransactionsProviderValue{
    transactions: Transaction[],
    addTransaction: (transaction: Transaction) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsProviderValue>({} as TransactionsProviderValue)

export function TransactionsProvider({children}: TransactionsContextProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {

        api.get('transactions')
        .then(response => {
            setTransactions(response.data.transactions)})

    }, [])

    async function addTransaction(newTransaction: Transaction) {

        const response = await api.post('/transactions', newTransaction)
        const {transaction} = response.data

        setTransactions((prev) => {return [...prev, transaction]})

    }

    return (
        <TransactionsContext.Provider value={{transactions, addTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    return useContext(TransactionsContext)
}
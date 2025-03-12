import Style from './style.module.scss'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Transaction } from '../../interfaces/Transaction'
import { useEffect, useState } from 'react'
import { format } from '../../services/numberFormat'

interface SummaryProps{
    transactions: Transaction[]
}

export function Summary({transactions}: SummaryProps){
    const [incomes, setIncomes] = useState<number>(0)
    const [outcomes, setOutcomes] = useState<number>(0)

    useEffect(() => {
        console.log(transactions)
        transactions.forEach((item) => {
            if (item.type === 'Income')
                setIncomes((prev) => {return prev + item.amount})
            else if (item.type === 'Outcome')
                setOutcomes((prev) => {return prev + item.amount})
        })
    },[transactions])

    return (
        <>
            <div className={Style.container}>

                <div className={Style.summaryShape}>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt="" />
                    </header>
                    <strong>R$ {format(incomes)}</strong>
                </div>

                <div className={Style.summaryShape}>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeImg} alt="" />
                    </header>
                    <strong>- R$ {format(outcomes)}</strong>
                </div>

                <div className={`${Style.total} ${Style.summaryShape}`}>
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="" />
                    </header>
                    <strong>{incomes >= outcomes ? `R$ ${format(incomes - outcomes)}` : `- R$ ${format(-1 * (incomes - outcomes))}`}</strong>
                </div>
            </div>
        </>
    )
}
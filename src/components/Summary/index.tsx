import Style from './style.module.scss'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { format } from '../../services/numberFormat'
import { useTransactions } from '../../hooks/useTransactions'

export function Summary(){

    const {summary} = useTransactions()

    const {income, outcome, total} = summary

    return (
        <>
            <div className={Style.container}>

                <div className={Style.summaryShape}>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt="" />
                    </header>
                    <strong>R$ {format(income)}</strong>
                </div>

                <div className={Style.summaryShape}>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeImg} alt="" />
                    </header>
                    <strong>- R$ {format(outcome)}</strong>
                </div>

                <div className={`${Style.total} ${Style.summaryShape}`}>
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="" />
                    </header>
                    <strong>{income >= outcome ? `R$ ${format(total)}` : `- R$ ${format(-1 * total)}`}</strong>
                </div>
            </div>
        </>
    )
}
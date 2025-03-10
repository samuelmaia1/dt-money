import Style from './style.module.scss'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
    return (
        <>
            <div className={Style.container}>

                <div className={Style.summaryShape}>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt="" />
                    </header>
                    <strong>R$ 1.000,00</strong>
                </div>

                <div className={Style.summaryShape}>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeImg} alt="" />
                    </header>
                    <strong>- R$ 400,00</strong>
                </div>

                <div className={`${Style.total} ${Style.summaryShape}`}>
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="" />
                    </header>
                    <strong>R$ 600,00</strong>
                </div>
            </div>
        </>
    )
}
import logoImg from '../../assets/logo.svg'
import Style from './style.module.scss'

export function Header(){
    return (
        <header className={Style.header}>
            <div className={Style.content}>
                <img src={logoImg} alt="dt-money" />
                <button type="button">
                    Nova transação
                </button>
            </div>
        </header>
    )
}
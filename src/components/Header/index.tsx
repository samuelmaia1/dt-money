
import logoImg from '../../assets/logo.svg'
import Style from './style.module.scss'

interface HeaderProps{
    onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: HeaderProps){
    return (
        <header className={Style.header}>
            <div className={Style.content}>
                <img src={logoImg} alt="dt-money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </div>
        </header>
    )
}
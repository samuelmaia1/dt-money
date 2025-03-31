import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import Style from './style.module.scss'

export function Dashboard(){
    
    return (
        <>
            <div className={Style.container}>
                <Summary />
                <TransactionsTable />
            </div>
        </>
    )
}
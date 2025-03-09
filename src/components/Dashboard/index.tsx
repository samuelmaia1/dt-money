import { Summary } from '../Summary'
import Style from './style.module.scss'

export function Dashboard(){
    return (
        <>
            <div className={Style.container}>
                <Summary />
            </div>
        </>
    )
}
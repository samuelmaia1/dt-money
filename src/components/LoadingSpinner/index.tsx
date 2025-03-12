import Style from './style.module.scss'

export function LoadingSpinner(){
    return <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className={Style.spinner}>
        
        </div>
    </div>
}
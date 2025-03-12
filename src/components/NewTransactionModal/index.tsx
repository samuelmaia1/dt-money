import Style from './style.module.scss'
import Modal from 'react-modal'
import closeImg from '../../assets/closebtn.svg'
import { FormEvent, useState } from 'react'
import { LoadingSpinner } from '../LoadingSpinner'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api'

interface NewTransactionModalProps{
    isOpen: boolean, 
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('Income')
    
    const [isLoading, setIsLoading] = useState(false)

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        const data = {
            title,
            category,
            value,
            type
        }

        api.post('/transactions', data)
    }

    return (
        <Modal
          isOpen={isOpen}  
          onRequestClose={onRequestClose}  
          overlayClassName={Style.reactModalOverlay}
          className={Style.reactModalContent}
        >
            <button 
                type="button" 
                onClick={onRequestClose}
                className={Style.reactModalClose}
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <div className={Style.container}>
                <h2>Cadastrar transação</h2>

                <form onSubmit={handleCreateNewTransaction}>

                    <input 
                        type="text" 
                        placeholder='Título'
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />

                    <input 
                        type="number" 
                        placeholder='Valor'
                        value={value}
                        onChange={event => setValue(Number(event.target.value))}
                    />

                    <div className={Style.transactionTypeContainer}>
                        <button
                            type='button'
                            style={{
                                background: type === 'Income' ? '#223129' : 'transparent',
                                color: type === 'Income' ? '#ffffff' : 'var(--text-title)'
                            }}
                            onClick={() => setType('Income')}
                        >
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                            
                        </button>

                        <button
                            type='button'
                            style={{
                                background: type === 'Outcome' ? '#352528' : 'transparent',
                                color: type === 'Outcome' ? '#ffffff' : 'var(--text-title)'
                            }}
                            onClick={() => setType('Outcome')}
                        >
                            <img src={outcomeImg} alt="Saída" />
                            <span>Saída</span>
                        </button>
                    </div>

                    <input 
                        type="text" 
                        placeholder='Categoria'
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />

                    <button type="submit" className={Style.buttonSubmit}>
                        {!isLoading ? 'Cadastrar' : <LoadingSpinner />}
                    </button>
                </form>
            </div>
        </Modal>
    )
}
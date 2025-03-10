import Style from './style.module.scss'
import Modal from 'react-modal'
import closeImg from '../../assets/closebtn.svg'

interface NewTransactionModalProps{
    isOpen: boolean, 
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
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

                <form>

                    <input 
                        type="text" 
                        placeholder='Título'
                    />

                    <input 
                        type="number" 
                        placeholder='Valor'
                    />

                    <input 
                        type="text" 
                        placeholder='Categoria'
                    />

                    <button type="submit" className={Style.buttonSubmit}>
                        Cadastrar
                    </button>
                </form>
            </div>
        </Modal>
    )
}
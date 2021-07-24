import React from 'react';
import { 
    Container,
    ModalBody
} from './styled';

export default ({status, setStatus, children }) => {
    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalBG')) {
            setStatus(false);
        }
    }

    return (
        <Container 
         className="modalBG"
         status={status} 
         onClick={handleModalClick}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    )
}
import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
    return (
        <Container>
            <Toast hasDescription>
                <FiAlertCircle />
                <div>
                    <strong>Error aqui</strong>
                    <p>Corpo do seu erro aqui</p>
                </div>

                <button type="button">
                    <FiXCircle />
                </button>
            </Toast>
            <Toast hasDescription type="error">
                <FiAlertCircle />
                <div>
                    <strong>Error aqui</strong>
                    <p>Corpo do seu erro aqui</p>
                </div>

                <button type="button">
                    <FiXCircle />
                </button>
            </Toast>
            <Toast hasDescription type="success">
                <FiAlertCircle />
                <div>
                    <strong>Error aqui</strong>
                    <p>Corpo do seu erro aqui</p>
                </div>

                <button type="button">
                    <FiXCircle />
                </button>
            </Toast>
            <Toast hasDescription type="success">
                <FiAlertCircle />
                <div>
                    <strong>Error aqui</strong>
                </div>

                <button type="button">
                    <FiXCircle />
                </button>
            </Toast>
        </Container>
    );
};

export default ToastContainer;

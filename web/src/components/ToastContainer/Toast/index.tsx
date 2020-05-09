import React, { useEffect } from 'react';
import {
    FiAlertCircle,
    FiCheckCircle,
    FiInfo,
    FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
    toast: ToastMessage;
    styles: object;
}

const Toast: React.FC<ToastProps> = ({ toast, styles }) => {
    const { removeToast } = useToast();
    const icons = {
        info: <FiInfo size={24} />,
        error: <FiAlertCircle size={24} />,
        success: <FiCheckCircle size={24} />,
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id);
        }, 3000);

        return () => clearTimeout(timer);
    }, [removeToast, toast]);

    return (
        <Container
            type={toast.type}
            hasDescription={!!toast.description}
            style={styles}
        >
            {icons[toast.type || 'info']}
            <div>
                <strong>{toast.title}</strong>
                {toast.description && <p>{toast.description}</p>}
            </div>

            <button type="button" onClick={() => removeToast(toast.id)}>
                <FiXCircle />
            </button>
        </Container>
    );
};

export default Toast;

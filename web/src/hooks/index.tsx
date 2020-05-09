import React from 'react';

import { AuthProvier } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
    return (
        <AuthProvier>
            <ToastProvider>{children}</ToastProvider>
        </AuthProvier>
    );
};

export default AppProvider;

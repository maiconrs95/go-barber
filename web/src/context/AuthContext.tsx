import React, { useState, createContext, useCallback } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: object;
    singIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export const AuthProvier: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@GoBarber:token');
        const user = localStorage.getItem('@GoBarber:user');

        if (token && user) {
            return {
                token,
                user: JSON.parse(user),
            };
        }

        return {} as AuthState;
    });

    const singIn = useCallback(async ({ email, password }) => {
        const response = await api.post('/sessions', { email, password });

        const { token, user } = response.data;

        localStorage.setItem('@GoBarber:token', token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, singIn }}>
            {children}
        </AuthContext.Provider>
    );
};

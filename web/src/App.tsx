import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
    const darkTheme = {
        main: {
            bg: {
                color: '#312e38',
            },
        },
        input: {
            bg: {
                color: '#232129',
            },
            placeholder: {
                color: '#666360',
            },
        },
        text: {
            light: '#f4ede8',
        },
        btn: {
            text: {
                color: '#312e38',
            },
            bg: {
                color: '#ff9000',
            },
        },
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <Routes />
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;

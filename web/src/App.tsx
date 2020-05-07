import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
    const darkTheme = {
        primary: '#ff9000',
        secondary: '#312e38',
        error: '#c53030',
        main: {
            bg: {
                color: '#312e38',
            },
        },
        input: {
            bg: {
                color: '#232129',
            },
        },
        text: {
            light: '#f4ede8',
            placeholder: '#666360',
        },
        btn: {
            text: {
                color: '#312e38',
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

import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <BrowserRouter>
        <Routes />
        <GlobalStyle />
    </BrowserRouter>
);

export default App;

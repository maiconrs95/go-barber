import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Go-Barber" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="E-mail" type="text" />
                    <input placeholder="Password" type="password" />

                    <button type="submit">Entrar</button>

                    <a href="void(0)">Esqueci minha senha</a>
                </form>
                <a href="void(0)">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background>Background</Background>
        </Container>
    );
};

export default SignIn;

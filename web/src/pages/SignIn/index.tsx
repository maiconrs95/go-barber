import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Go-Barber" />

                <form>
                    <h1>Faça seu logon</h1>

                    <Input
                        icon={FiMail}
                        placeholder="E-mail"
                        type="text"
                        name="email"
                    />
                    <Input
                        icon={FiLock}
                        placeholder="Password"
                        type="password"
                        name="password"
                    />

                    <Button type="submit">Entrar</Button>

                    <a href="void(0)">Esqueci minha senha</a>
                </form>
                <Link to="/signup">
                    <FiLogIn />
                    Criar conta
                </Link>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;

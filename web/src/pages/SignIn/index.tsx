import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    const handleSubmit = useCallback(async (data) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email('E-mail inválido'),
                password: Yup.string().min(6, 'No minímo 6 caracteres'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Go-Barber" />

                <Form onSubmit={handleSubmit}>
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
                </Form>
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

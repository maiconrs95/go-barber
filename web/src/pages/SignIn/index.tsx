import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    const schema = Yup.object().shape({
        email: Yup.string()
            .required('Obrigatório')
            .matches(/^\S+@\S+$/i, 'E-mail inválido'),
        password: Yup.string().required('Obrigatório').min(6, 'Minimo 6'),
    });

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
        mode: 'onBlur',
    });

    const onSubmit = useCallback((data: object) => {
        console.log(data);
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Go-Barber" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Faça seu logon</h1>

                    <Input
                        placeholder="E-mail"
                        type="text"
                        name="email"
                        icon={FiMail}
                        error={errors.email?.message}
                        register={register}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        icon={FiLock}
                        error={errors.password?.message}
                        register={register}
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

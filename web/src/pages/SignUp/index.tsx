import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';

import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    const schema = Yup.object().shape({
        name: Yup.string()
            .required('Nome obrigatório')
            .min(5, 'Minimo 5 caracteres')
            .max(20, 'Máximo 20 caracteres'),
        email: Yup.string()
            .required('E-mail obrigatório')
            .matches(/^\S+@\S+$/i, 'E-mail inválido'),
        password: Yup.string()
            .required('Senha obrigatório')
            .min(6, 'Minimo 6 caracteres'),
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
            <Background />
            <Content>
                <img src={logoImg} alt="Go-Barber" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Faça seu logon</h1>

                    <Input
                        placeholder="Nome"
                        type="text"
                        name="name"
                        icon={FiUser}
                        error={errors.name?.message}
                        register={register}
                    />
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
                </form>
                <Link to="/">
                    <FiArrowLeft />
                    Já possuo uma conta
                </Link>
            </Content>
        </Container>
    );
};

export default SignIn;

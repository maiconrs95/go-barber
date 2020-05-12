import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

const SignIn: React.FC = () => {
    const { addToast } = useToast();
    const history = useHistory();

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

    const onSubmit = useCallback(
        async (data: object) => {
            try {
                await api.post('/users', data);

                addToast({
                    type: 'success',
                    title: 'Usuário criado com sucesso',
                    description: 'Você já pode fazer seu log on no go barber.',
                });

                history.push('/');
            } catch (e) {
                addToast({
                    type: 'error',
                    title: 'Erro no cadastro',
                    description:
                        'Ocorreu um erro ao fazer cadastro, tente novamente.',
                });
            }
        },
        [addToast, history],
    );

    return (
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
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
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default SignIn;

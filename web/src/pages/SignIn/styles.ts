import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: ${({ theme }) => theme.text.light};
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${({ theme }) => shade(0.2, theme.text.light)};
            }
        }
    }

    > a {
        color: ${({ theme }) => theme.btn.bg.color};
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;
        transition: color 0.2s;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${({ theme }) => shade(0.2, theme.btn.bg.color)};
        }
    }
`;

export const Background = styled.div`
    flex: 1;

    background: url(${signInBackground}) no-repeat center;
    background-size: cover;
`;
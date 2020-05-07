import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused?: boolean;
    isFilled?: boolean;
    isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: ${({ theme }) => theme.input.bg.color};
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid ${({ theme }) => theme.input.bg.color};
    color: ${({ theme }) => theme.text.placeholder};

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    svg {
        margin-right: 16px;
    }

    ${(props) =>
        props.isErrored &&
        css`
            border-color: ${({ theme }) => theme.error};
        `}
    ${(props) =>
        props.isFocused &&
        css`
            color: ${({ theme }) => theme.primary};
            border-color: ${({ theme }) => theme.primary};
        `}
    ${(props) =>
        props.isFilled &&
        css`
            color: ${({ theme }) => theme.primary};
        `}

    input {
        color: ${({ theme }) => theme.text.light};
        flex: 1;
        border: 0;
        background-color: transparent;

        &::placeholder {
            ${({ theme }) => theme.text.placeholder};
        }
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: ${({ theme }) => theme.error};
        color: #fff;

        &::before {
            border-color: ${({ theme }) => theme.error} transparent;
        }
    }
`;

import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFielled: boolean;
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
        props.isFocused &&
        css`
            color: ${({ theme }) => theme.primary};
            border-color: ${({ theme }) => theme.primary};
        `}
    ${(props) =>
        props.isFielled &&
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

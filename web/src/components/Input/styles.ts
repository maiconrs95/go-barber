import styled from 'styled-components';

export const Container = styled.div`
    color: ${({ theme }) => theme.input.placeholder};
    background: ${({ theme }) => theme.input.bg.color};
    border: 2px solid ${({ theme }) => theme.input.bg.color};

    border-radius: 10px;
    padding: 16px;
    width: 100%;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    svg {
        margin-right: 16px;
        ${({ theme }) => theme.input.placeholder};
    }

    input {
        color: ${({ theme }) => theme.text.light};
        flex: 1;
        border: 0;
        background-color: transparent;

        &::placeholder {
            ${({ theme }) => theme.input.placeholder};
        }
    }
`;

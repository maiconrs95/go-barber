import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: ${({ theme }) => theme.btn.bg.color};
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    color: ${({ theme }) => theme.btn.text.color};
    font-weight: 500;
    margin-top: 16px;
    transition: background 0.2s;

    &:hover {
        background: ${({ theme }) => shade(0.2, theme.btn.bg.color)};
    }
`;

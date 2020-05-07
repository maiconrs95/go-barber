import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    cursor: pointer;

    span {
        position: absolute;
        background: ${({ theme }) => theme.primary};
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.4s;

        bottom: calc(100% + 12px);
        width: 160px;
        left: 50%;
        transform: translateX(-50%);

        color: ${({ theme }) => theme.secondary};

        &::before {
            content: '';
            border-style: solid;
            border-color: ${({ theme }) => theme.primary} transparent;
            border-width: 4px 4px 0 4px;
            top: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`;

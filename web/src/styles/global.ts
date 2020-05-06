import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        &.dark {
            --main-bg-color: #312e38;
            color: #fff;
        }

        &.light {
            --main-bg-color: #F0F2F5;
            color: #222;
        }
    }

    body {
        background-color: var(--main-bg-color);
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong, b {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;

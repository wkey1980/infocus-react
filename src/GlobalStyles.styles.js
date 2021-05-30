import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${'' /* * {
        outline: 1px solid red;
    } */}

    html {
        font-size: 100%;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
    }

    a,
    a:visited,
    a:hover {
        text-decoration: none;
    }
`;

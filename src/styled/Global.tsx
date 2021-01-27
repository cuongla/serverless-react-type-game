import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --main-bg-color: ${(props: any) => props.theme.mainBgColor};
    --main-text-color: ${(props: any) => props.theme.mainTextColor};
    --accent-color: #e16365;
}
* {
    box-sizing: border-box;
    color: var(--main-text-color);
    margin: 0;
    font-family: sans-serif;
    font-weight: 300;
}
h1, h2 {
    margin-bottom: 2rem;
}
`
import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
}
button {
    border: 3px solid #28d997;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    cursor: pointer;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color: #23d997;
        color: white;
    }
}

h2 {
    color: white;
    font-weight: lighter;
    font-size: 3rem;
}

p {
    padding: 3rem 0rem;
    color: white;
    font-size: 1.2rem;
    line-height: 150%;
}

h4 {
    color: #28d997;
    font-weight : bold;
}




`;

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --yellow-dark: #c47f17;
    --yellow: #dbac2c;
    --yellow-light: #f1e9c9;
    --purple-dark: #4b2995;
    --purple: #8047f8;
    --purple-light: #ebe5f9;
    --base-title: #272221;
    --base-subtitle: #403937;
    --base-text: #574f4d;
    --base-label: #8d8686;
    --base-hover: #d7d5d5;
    --base-button: #e6e5e5;
    --base-card: #f3f2f2;
    --background: #fafafa;
    --white: #fff;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`

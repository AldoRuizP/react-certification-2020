import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom';
import App from './components/App';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  :root {
    --bg: #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --footer-size: 120px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms;
    --wizeline-red: #E93D44;
    --wizeline-red-light: #F2575D;
    --wizeline-black: #262E30;
    --wizeline-gray: #DDDDDD;
    --wizeline-gray-dark: #9A9A9A;
    --wizeline-blue-light: #28B2BF;
    --wizeline-blue-dark: #00718C;
    --wizeline-gold: #F5B335;
    --wizeline-magenta: #902E57;
    --wizeline-dark: #001113;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: var(--text-color);
    text-decoration: none;
  }
  a:visited {
    color: var(--text-color);
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F5F0ED;
    color: #3D5361;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100vh;
    overflow: auto;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sofia Sans', sans-serif;
    overflow-y: ${({ overflow }) => overflow};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.color.default};
    animation: fadeIn 1s;

    @keyframes fadeIn {
      from {
        opacity: 0;
        margin-top: -10%;
      }
      to {
        opacity: 1;
        margin-top: 0px;
      }
    }
  }

  button {
    cursor: pointer;
  }
`;

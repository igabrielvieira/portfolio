import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 700px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
  }

  ul li {
    display: inline-block;
    font-weight: bold;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    font-style: none;
    color: ${({ theme }) => theme.colors.color.default};
    transition: 0.2s ease-in;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.color.hover};
  }

  a + a {
    margin-left: 64px;
  }

  .js {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 36px;
  }

  a button {
    background-color: none;
    border: none;
  }
`;

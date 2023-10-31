import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundFooter};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  a {
    color: #FFFFFF;
    text-decoration: none;
  }
`;

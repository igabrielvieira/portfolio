import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  color: #000;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: white;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  position: relative;

  @media screen and (max-width: 415px) {
    width: 80%;
  }

  .modalHeader {
    display: flex;
    justify-content: space-between;

    h1 {
      position: absolute;
      right: 20px;
      top: 5px;
      color: #FB5757;
      cursor: pointer;
    }
  }

  h2 {
    margin-bottom: 8px;
  }

  p + p{
    margin-top: 24px;
    margin-bottom: 16px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 415px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  .buttonLeft {
    color: #FFFFFF;
    width: 170px;
    height: 35px;
    border-radius: 10px;
    background: #000;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s;
    border: none;
    border-bottom: 5px solid transparent;

    @media screen and (max-width: 300px) {
      width: 80%;
    }

    .arrowImg {
      width: 16px;
      opacity: 0;
      transition: 0.2s;
    }
  }

  .buttonLeft:hover {
    border-bottom: 5px solid #414141;

    .arrowImg {
      opacity: 1;
      margin-left: 13px;
    }
  }

  .buttonRight {
    color: #FFFFFF;
    width: 190px;
    height: 35px;
    border-radius: 10px;
    background: #000;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s;
    border: none;
    border-bottom: 5px solid transparent;

    @media screen and (max-width: 300px) {
      width: 80%;
    }

    .arrowImg {
      width: 16px;
      opacity: 0;
      transition: 0.2s;
    }
  }

  .buttonRight:hover {
    border-bottom: 5px solid #414141;

    .arrowImg {
      opacity: 1;
      margin-left: 8px;
    }
  }

`;

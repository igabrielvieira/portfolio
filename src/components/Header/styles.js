import styled from 'styled-components';

export const Container = styled.div`
  width: 630px;
  margin: 180px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .upNow {
      background-color: #000;
      width: 45px;
      height: 45px;
      position: fixed;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 30px;
      right: 30px;
      opacity: 0.5;
      transition: 0.2s;
      z-index: 3;

      img {
        transform: rotate(-90deg);
        width: 22px;
      }
    }

    .upNow:hover {
      opacity: 0.8;
    }

  @media screen and (max-width: 650px) {
    width: 500px;
    justify-content: center;
    gap: 30px;
    margin-top: 100px;
  }

  @media screen and (max-width: 500px) {
    width: 400px;
    justify-content: center;
    gap: 30px;
  }

  @media screen and (max-width: 400px) {
    width: 350px;
    justify-content: center;
    gap: 15px;
  }

  @media screen and (max-width: 360px) {
    width: 300px;
    justify-content: center;
    gap: 15px;
  }

  @media screen and (max-width: 280px) {
    flex-direction: column;
    width: 100%;
  }

  .photoSide img {
    width: 236px;
    border-radius: 500px;
    border: 2px solid #FFFFFF;
    background: lightgray 50% / cover no-repeat;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 650px) {
      width: 156px;
    }

    @media screen and (max-width: 360px) {
      width: 106px;
    }

    @media screen and (max-width: 300px) {
      width: 76px;
    }
  }

  .infoSide {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 32px;
      font-weight: bold;

      @media screen and (max-width: 650px) {
        font-size: 22px;
      }

      @media screen and (max-width: 400px) {
        font-size: 18px;
      }

      @media screen and (max-width: 300px) {
        font-size: 14px;
      }
    }

    h3 {
      margin-bottom: 16px;
      font-size: 22px;

      @media screen and (max-width: 650px) {
        font-size: 18px;
      }

      @media screen and (max-width: 400px) {
        font-size: 12px;
        margin-bottom: 8px;
      }
    }

    span {
      font-size: 18px;

      @media screen and (max-width: 650px) {
        font-size: 14px;
      }

      @media screen and (max-width: 400px) {
        font-size: 12px;
      }
    }

    .infoImg {
      margin-top: 10px;
    }

    .infoImg img {
      width: 34px;
      transition: 0.2s ease-in;
      cursor: pointer;

      @media screen and (max-width: 650px) {
        width: 24px;
      }

      @media screen and (max-width: 400px) {
        width: 22px;
      }

      &:hover {
        opacity: 0.5;
      }
    }

    a + a {
      margin-left: 16px;

      @media screen and (max-width: 650px) {
       margin-left: 8px;
      }
    }
  }
`;

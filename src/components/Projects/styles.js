import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  padding-bottom: 74px;
  margin: 130px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80em;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: 20px;
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));

  @media screen and (max-width: 1300px) {
    width: 95%;
  }

  h1 {
    margin-bottom: 48px;
  }

  .cards {
    display: flex;
    gap: 34px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 880px) {
      flex-direction: column;
    }
  }

  .card {
    padding: 25px;
    width: 360px;
    height: 450px;
    background-color: ${({ theme }) => theme.colors.backgroundCardProjects};
    border-radius: 20px;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 1230px) {
      width: 320px;
    }

    @media screen and (max-width: 1100px) {
      width: 250px;
      height: 500px;
    }

    @media screen and (max-width: 880px) {
      width: 80%;

      .imgBanner {
        margin: 0 auto;
        width: 80%;
      }
    }

    @media screen and (max-width: 600px) {
      width: 80%;

      .imgBanner {
        margin: 0 auto;
        width: 100%;
      }
    }

    h2 {
      margin-top: 12px;
      margin-bottom: 8px;
    }

    img {
      border-radius: 10px;
      border: 1px solid #FFF;
    }

    .line {
      width: 28px;
      height: 0.5px;
      background: #000;
      margin-bottom: 16px;

      a {
        opacity: 0;
      }

      @media screen and (max-width: 1000px) {
        display: none;
      }
    }

    .imgTechsCardOne {
      display: flex;
      margin-top: 45px;

      @media screen and (max-width: 1100px) {
        flex-direction: column;
      }

      a {
        text-decoration: none;
        color: #FFFFFF;
      }

      img {
        width: 34px;
        transition: 0.2s ease-in;
        border: none;
        border-radius: 0px;
      }

      img:hover {
        opacity: 0.5;
      }

      img + img {
        margin-left: 5px;
      }

      .buttonRepository {
        margin-left: 92px;
        color: #FFFFFF;
        width: 105px;
        height: 35px;
        border-radius: 10px;
        background: #000;
        display: flex;
        align-items: center;
        padding-left: 10px;
        transition: 0.2s;
        border: none;
        border-bottom: 5px solid transparent;

        @media screen and (max-width: 1230px) {
          margin-left: 50%;
        }

        @media screen and (max-width: 1100px) {
          margin-left: 0;
          margin-top: 15px;
        }

        .arrowImg {
          width: 16px;
          opacity: 0;
          transition: 0.2s;
        }
      }

      .buttonRepository:hover {
        border-bottom: 5px solid #414141;

        .arrowImg {
          opacity: 1;
          margin-left: 8px;
        }
      }
    }

    .imgTechsCardTwo {
      display: flex;
      margin-top: 60px;

      @media screen and (max-width: 1100px) {
        flex-direction: column;
      }

      a {
        text-decoration: none;
        color: #FFFFFF;
      }

      img {
        width: 34px;
        transition: 0.2s ease-in;
        border: none;
        border-radius: 0px;
      }

      img:hover {
        opacity: 0.5;
      }

      img + img {
        margin-left: 5px;
      }

      .buttonRepository {
        margin-left: 90px;
        color: #FFFFFF;
        width: 105px;
        height: 35px;
        border-radius: 10px;
        background: #000;
        display: flex;
        align-items: center;
        padding-left: 10px;
        transition: 0.2s;
        border: none;
        border-bottom: 5px solid transparent;

        @media screen and (max-width: 1230px) {
          margin-left: 50%;
        }

        @media screen and (max-width: 1100px) {
          margin-left: 0;
          margin-top: 40px;
        }

        .arrowImg {
          width: 16px;
          opacity: 0;
          transition: 0.2s;
        }
      }

      .buttonRepository:hover {
        border-bottom: 5px solid #414141;

        .arrowImg {
          opacity: 1;
          margin-left: 8px;
        }
      }
    }

    .imgTechsCardThree {
      display: flex;
      margin-top: 20px;

      @media screen and (max-width: 1100px) {
        flex-direction: column;
      }

      a {
        text-decoration: none;
        color: #FFFFFF;
      }

      img {
        width: 34px;
        transition: 0.2s ease-in;
        border: none;
        border-radius: 0px;

        @media screen and (max-width: 1230px) {
          width: 28px;
        }
      }

      img:hover {
        opacity: 0.5;
      }

      img + img {
        margin-left: 5px;
      }

      .buttonRepository {
        margin-left: 15px;
        color: #FFFFFF;
        width: 105px;
        height: 35px;
        border-radius: 10px;
        background: #000;
        display: flex;
        align-items: center;
        padding-left: 10px;
        transition: 0.2s;
        border: none;
        border-bottom: 5px solid transparent;

        @media screen and (max-width: 1230px) {
          margin-left: 15%;
        }

        @media screen and (max-width: 1100px) {
          margin-left: 0;
          margin-top: 25px;
        }

        .arrowImg {
          width: 16px;
          opacity: 0;
          transition: 0.2s;
        }
      }

      .buttonRepository:hover {
        border-bottom: 5px solid #414141;

        .arrowImg {
          opacity: 1;
          margin-left: 8px;
        }
      }
    }
  }

  .card:hover {
    margin-top: -30px;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.15);
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  padding-bottom: 74px;
  margin: 0 auto;
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

  .contentAbout {
    display: flex;
    gap: 70px;
    align-items: center;

    @media screen and (max-width: 650px) {
      flex-direction: column;
      gap: 50px;
    }

    .leftSide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;

        a {
          text-decoration: none;
          color: #FFFFFF;
        }

        .buttonCurriculum {
          color: #FFFFFF;
          width: 140px;
          height: 35px;
          border-radius: 10px;
          background: #000;
          display: flex;
          align-items: center;
          padding-left: 10px;
          transition: 0.2s;
          border: none;
          border-bottom: 5px solid transparent;

          .arrowImg {
            width: 16px;
            opacity: 0;
            transition: 0.2s;
          }
        }

        .buttonCurriculum:hover {
          border-bottom: 5px solid #414141;

          .arrowImg {
            opacity: 1;
            margin-left: 13px;
          }
        }

      .profilePicture {
        width: 300px;
        border-radius: 300px;
        border: 10px solid #FFFFFF;
        background: lightgray 50% / cover no-repeat;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 1000px) {
          width: 100%;
        }
      }
    }

    p {
      width: 600px;
      font-size: 18px;
      font-weight: 100;

      @media screen and (max-width: 1000px) {
        width: 100%;
        font-size: 14px;
        width: 400px;
      }

      @media screen and (max-width: 430px) {
        width: 100%;
      }
    }
  }
`;

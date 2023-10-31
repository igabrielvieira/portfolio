import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  padding: 20px;
  padding-bottom: 74px;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: 130px;
  width: 80em;
  overflow: hidden;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 1300px) {
    width: 95%;
  }

  .slidesContainer {
    white-space: nowrap;
    position: relative;
  }

  .slidesContainer:before,
  .slidesContainer:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }

  .slidesContainer:before {
    left: -50px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(34, 34, 34, 1));
  }

  .slidesContainer:after {
    right: -50px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(34, 34, 34, 1));
  }


  .slidesContainer:hover .itens {
    animation-play-state: paused;
  }

  h1 {
    margin-bottom: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes slide {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }

  .itens {
    display: inline-block;
    animation: 15s slide infinite linear;

    img {
      width: 110px;
      height: 110px;
      margin-left: 50px;
    }
  }
`;

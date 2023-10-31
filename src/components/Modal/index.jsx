import PropTypes from 'prop-types';

import { Container, Overlay } from './styles';

import arrow from '../../assets/icons/arrow-icon.svg';

export default function Modal({ closedModal, handleCloseModal }) {
  return (
    !closedModal && (
      <Overlay>
        <Container>
          <div className="modalHeader">
            <h2>
              Seja bem-vindo ao meu portfólio!
            </h2>

            <a onClick={handleCloseModal}>
              <h1>x</h1>
            </a>
          </div>

          <p>
            Aqui você encontrará todas as informações sobre mim e meus projetos.
          </p>

          <p>
            Confira abaixo alguns links que você pode precisar.
          </p>

          <div className="buttons">
            <a href="https://www.linkedin.com/in/gabrielvieira30/" target="_blank" rel="noreferrer">
              <button className="buttonLeft">
                <span>
                  acesse meu linkedin
                </span>
                <img className="arrowImg" src={arrow} alt="Seta" />
              </button>
            </a>

            <a href="https://github.com/igabrielvieira/portfolio" target="_blank" rel="noreferrer">
              <button className="buttonRight">
                <span>
                  repositório deste portfólio
                </span>
                <img className="arrowImg" src={arrow} alt="Seta" />
              </button>
            </a>
          </div>
        </Container>
      </Overlay>
    )
  );
}

Modal.propTypes = {
  closedModal: PropTypes.any,
  handleCloseModal: PropTypes.any,
}

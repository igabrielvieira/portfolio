import PropTypes from 'prop-types';

import { Container } from './styles';

import picture from '../../assets/picture.jpg';
import arrow from '../../assets/icons/arrow-icon.svg';

import { useEffect } from 'react';

export default function About({ idAbout, setIdAbout }) {
  useEffect(() => {
    setIdAbout('about');
  }, [setIdAbout]);

  return (
    <Container id={idAbout}>
      <h1>Sobre</h1>

      <div className="contentAbout">
        <div className="leftSide">
          <img className="profilePicture" src={picture} alt="Gabriel picture" />
          <a href="./curriculo-gabriel-vieira.pdf" target="_blank">
            <button className="buttonCurriculum">
              <span>
                baixar currículo
              </span>
              <img className="arrowImg" src={arrow} alt="Seta" />
            </button>
          </a>
        </div>

        <p>
          Olá! Sou o Gabriel Vieira, Desenvolvedor de Software e estudante de Sistemas de Informação. Aficionado por tecnologia desde sempre, o que fez me despertar uma curiosidade de saber como as coisas eram criadas neste mundo. Dito isso, me interessei pelo universo da programação no ano de 2020, e com o tempo fui percebendo que ali era o meu lugar. <br /> <br />

          Possuo foco em desenvolvimento front-end com JavaScript, React, TypeScript, Node, Express, Docker, PostgreSQL, MongoDB, Jest, Cypress, Git, entre outras tecnologias de programação e versionamento, tendo também experiência em metologias ágeis e como UI/UX Designer, na qual utilizo para criar aplicações web de alta performance. <br /> <br />

          Me considero uma pessoa muito determinada e certamente o que me faz chegar tão longe é a resiliência, sempre busco desenfreadamente meus objetivos, adorando superar qualquer desafio e aprendendo com eles!
          Autodidata, criativo e pronto para me adaptar à qualquer mudança, sempre buscando saber mais.
        </p>
      </div>
    </Container>
  )
}

About.propTypes = {
  idAbout: PropTypes.any,
  setIdAbout: PropTypes.any,
}

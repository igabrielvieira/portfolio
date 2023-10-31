import PropTypes from 'prop-types';

import { Container } from './styles';

import html from '../../assets/icons/html-icon.svg';
import css from '../../assets/icons/css-icon.svg';
import js from '../../assets/icons/js-icon.svg';
import react from '../../assets/icons/react-icon.svg';
import node from '../../assets/icons/node-icon.svg';
import postgresql from '../../assets/icons/postgresql-icon.svg';
import styledComponents from '../../assets/icons/styled-components-icon.svg';
import figma from '../../assets/icons/figma-icon.svg';
import docker from '../../assets/icons/docker-icon.svg';
import mongo from '../../assets/icons/mongodb-icon.svg';
import git from '../../assets/icons/git-icon.svg';
import jest from '../../assets/icons/jest-icon.svg';
import typescript from '../../assets/icons/typescript-icon.svg';
import cypress from '../../assets/icons/cypress-icon.svg';
import { useEffect } from 'react';

export default function Techs({ idTechs, setIdTechs }) {
  useEffect(() => {
    setIdTechs('techs');
  }, [setIdTechs]);

  return (
    <Container id={idTechs}>
      <h1>tecnologias</h1>

      <div className="slidesContainer">
        <div className="itens">
          <img src={html} alt="HTML icon" title="HTML" />
          <img src={css} alt="CSS icon" title="CSS" />
          <img src={js} alt="Javascript icon" title="Javascript" />
          <img src={react} alt="React icon" title="React" />
          <img src={node} alt="NodeJS icon" title="NodeJS" />
          <img src={postgresql} alt="PostgreSQL icon" title="PostgreSQL" />
          <img src={styledComponents} alt="Styled-components icon" title="Styled-Components" />
          <img src={figma} alt="Figma icon" title="Figma" />
          <img src={docker} alt="Docker icon" title="Docker" />
          <img src={mongo} alt="MongoDB icon" title="MongoDB" />
          <img src={git} alt="Git icon" title="Git" />
          <img src={jest} alt="Jest icon" title="Jest" />
          <img src={typescript} alt="TypeScript icon" title="TypeScript" />
          <img src={cypress} alt="Cypress icon" title="Cypress" />
        </div>

        <div className="itens">
          <img src={html} alt="HTML icon" title="HTML" />
          <img src={css} alt="CSS icon" title="CSS" />
          <img src={js} alt="Javascript icon" title="Javascript" />
          <img src={react} alt="React icon" title="React" />
          <img src={node} alt="NodeJS icon" title="NodeJS" />
          <img src={postgresql} alt="PostgreSQL icon" title="PostgreSQL" />
          <img src={styledComponents} alt="Styled-components icon" title="Styled-Components" />
          <img src={figma} alt="Figma icon" title="Figma" />
          <img src={docker} alt="Docker icon" title="Docker" />
          <img src={mongo} alt="MongoDB icon" title="MongoDB" />
          <img src={git} alt="Git icon" title="Git" />
          <img src={jest} alt="Jest icon" title="Jest" />
          <img src={typescript} alt="TypeScript icon" title="TypeScript" />
          <img src={cypress} alt="Cypress icon" title="Cypress" />
        </div>
      </div>
    </Container>
  );
}

Techs.propTypes = {
  idTechs: PropTypes.any,
  setIdTechs: PropTypes.any,
}

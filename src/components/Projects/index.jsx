import PropTypes from 'prop-types';

import { Container } from './styles';

import arrow from '../../assets/icons/arrow-icon.svg';
import first from '../../assets/firstcardimg.jpg';
import second from '../../assets/secondcardimg.jpg';
import tertiary from '../../assets/tertiarycardimg.jpg';
import html from '../../assets/icons/html-icon.svg';
import css from '../../assets/icons/css-icon.svg';
import js from '../../assets/icons/js-icon.svg';
import react from '../../assets/icons/react-icon.svg';
import node from '../../assets/icons/node-icon.svg';
import postgresql from '../../assets/icons/postgresql-icon.svg';
import styledComponents from '../../assets/icons/styled-components-icon.svg';
import { useEffect } from 'react';

export default function Projects({ idProjects, setIdProjects }) {
  useEffect(() => {
    setIdProjects('projects');
  }, [setIdProjects]);

  return (
    <Container id={idProjects}>
      <h1>projetos</h1>

      <div className="cards">
        <div className="card">
          <img className="imgBanner" src={first} alt="Projeto calendário" />
          <h2>Calendário Pessoal De Jogos Da Copa 2022</h2>
          <div className="line"><a>a</a></div>

          <span>
            Página estática com HTML, CSS e JS realizada para acompanhar os horários de jogos da copa do mundo de 2022.
          </span>

          <div className="imgTechsCardOne">
            <div className="iconsTechs">
              <img src={html} alt="Html icon" title="HTML" />
              <img src={css} alt="Css icon" title="CSS" />
              <img src={js} alt="Javascript icon" title="Javascript" />
            </div>

            <a href="https://github.com/igabrielvieira/nlw-10-copa" target="_blank" rel="noreferrer">
              <button className="buttonRepository">
                <span>
                  repositório
                </span>
                <img className="arrowImg" src={arrow} alt="Seta" />
              </button>
            </a>
          </div>
        </div>

        <div className="card">
          <img className="imgBanner" src={second} alt="Projeto to-do list" />
          <h2>To-do List</h2>
          <div className="line"><a>a</a></div>

          <span>
            Uma aplicação simples para organizar suas tarefas do dia dia! Sendo
            também possível classificar compromissos, horários e realizar ações de CRUD.
          </span>

          <div className="imgTechsCardTwo">
            <div className="iconTechs">
              <img src={html} alt="Html icon" title="HTML" />
              <img src={css} alt="Css icon" title="CSS" />
              <img src={react} alt="React icon" title="React" />
            </div>

            <a href="https://github.com/igabrielvieira/todo-list" target="_blank" rel="noreferrer">
              <button className="buttonRepository">
                <span>
                  repositório
                </span>
                <img className="arrowImg" src={arrow} alt="Seta" />
              </button>
            </a>
          </div>
        </div>

        <div className="card">
          <img className="imgBanner" src={tertiary} alt="Projeto smartcontrol" />
          <h2>SmartControl</h2>
          <div className="line"><a>a</a></div>

          <span>
            Criação de uma aplicação completa de gerenciamento de estoque com API
            que retorna informações sobre materiais e categorias, utilizando métodos
            HTTP seguindo o padrão REST e contendo todas as operações de CRUD.
          </span>

          <div className="imgTechsCardThree">
            <div className="iconTechs">
              <img src={html} alt="Html icon" title="HTML" />
              <img src={react} alt="React icon" title="React" />
              <img src={node} alt="Node icon" title="NodeJS" />
              <img src={postgresql} alt="Postgresql icon" title="PostgreSQL" />
              <img src={styledComponents} alt="Styled-components icon" title="Styled-Components" />
            </div>

            <a href="https://github.com/igabrielvieira/smartcontrol" target="_blank" rel="noreferrer">
              <button className="buttonRepository">
                <span>
                  repositório
                </span>
                <img className="arrowImg" src={arrow} alt="Seta" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

Projects.propTypes = {
  idProjects: PropTypes.any,
  setIdProjects: PropTypes.any,
}

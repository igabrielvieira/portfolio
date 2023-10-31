import PropTypes from 'prop-types';

import { Container } from './styles';


export default function Navbar({ idAbout, idProjects, idTechs }) {
  return (
    <Container>
      <ul id="nav">
        <a href="#">
          <li>início</li>
        </a>

        <a href={`#${idAbout}`}>
          <li>sobre</li>
        </a>

        <a href="#">
          <li className="js">js</li>
        </a>

        <a href={`#${idProjects}`}>
          <li>projetos</li>
        </a>

        <a href={`#${idTechs}`}>
          <li>tecnologias</li>
        </a>

        {/* <a>
          <button>
            <li>🌑</li>
          </button>
        </a> */}
      </ul>

    </Container>
  )
}

Navbar.propTypes = {
  idAbout: PropTypes.any,
  idProjects: PropTypes.any,
  idTechs: PropTypes.any,
}

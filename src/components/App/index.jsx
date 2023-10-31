import GlobalStyles from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import light from '../../assets/styles/themes/light';

import Navbar from '../Navbar';
import Header from '../Header';
import About from '../About';
import Projects from '../Projects';
import Techs from '../Techs';
import Footer from '../Footer';
import Modal from '../Modal';

import { useState } from 'react';

function App() {
  const [idAbout, setIdAbout] = useState(''); // State Lifting para navegação das seções
  const [idProjects, setIdProjects] = useState('');
  const [idTechs, setIdTechs] = useState('');
  const savedModal = localStorage.getItem('modal');
  const [closedModal, setClosedModal] = useState(savedModal || false);
  const overflowModal = closedModal ? '' : 'hidden'

  function handleCloseModal() {
    setClosedModal((prevState) => prevState ? false : true);
    localStorage.setItem('modal', closedModal);
  }

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles overflow={overflowModal} />
      <Modal closedModal={closedModal} handleCloseModal={handleCloseModal} />
      <Navbar idAbout={idAbout} idProjects={idProjects} idTechs={idTechs} />
      <Header />
      <About idAbout={idAbout} setIdAbout={setIdAbout} />
      <Projects idProjects={idProjects} setIdProjects={setIdProjects} />
      <Techs idTechs={idTechs} setIdTechs={setIdTechs} />
      <Footer />
    </ThemeProvider>
  )
}

export default App

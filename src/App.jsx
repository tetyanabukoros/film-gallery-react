import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

import SwiperCore, {
  Navigation
} from 'swiper/core';
import { Modal } from './components/Modal';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

SwiperCore.use([Navigation]);

function App() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openFilmInfo, setOpenFilmInfo] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState({});
  
  const handleOpenSignIn = () => {
    setOpenSignIn(true);
  }

  const handleOpenSignUp = () => {
    setOpenSignUp(true);
  }

  const handleClose = () => {
    setOpenSignIn(false);
    setOpenSignUp(false);
    setOpenFilmInfo(false);
  }

  const handleOpenFilmInfo = () => {
    setOpenFilmInfo(true);
  }

  return (
    <>
      <Header 
        handleOpenSignIn={handleOpenSignIn} 
        openSignIn={openSignIn} 
        handleClose={handleClose}
        handleOpenSignUp={handleOpenSignUp} 
        openSignUp={openSignUp} 
      />

    <Main 
      handleOpenFilmInfo={handleOpenFilmInfo} 
      setSelectedFilm={setSelectedFilm}
      />

    <Footer />  

    <Modal 
      selectedFilm={selectedFilm} 
      openFilmInfo={openFilmInfo} 
      handleClose={handleClose}
    />
  </>
  );
}

export default App;



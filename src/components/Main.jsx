import React, { useContext } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import MoviesList from './MoviesList';
import { Carusel } from './Carusel';
import { CardMedia, Card } from '@mui/material';
import { AppContext } from './AppContext';

export const Main = ({ handleOpenFilmInfo, setSelectedFilm }) => {
  const { wellcomeScreen } = useContext(AppContext)

  return (
    <main >
      {/* <Carusel /> */}
      {/* <Card style={{position: "absolute"}}>
        <CardMedia
            component="img"
            image={"https://img.freepik.com/premium-photo/cinema-cinema-attributes-cinemas-films-online-viewing-popcorn-and-glasses_99433-1582.jpg?w=900"}
            alt={"Wellcome Screen"} 
        />
      </Card> */}

     {/* { !wellcomeScreen && <MoviesList 
        handleOpenFilmInfo={handleOpenFilmInfo} 
        setSelectedFilm={setSelectedFilm} 
      />} */}
    </main>
  )
}
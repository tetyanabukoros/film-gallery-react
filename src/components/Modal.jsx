import React from 'react';

import StarIcon from '@mui/icons-material/Star';

import { 
  Typography,
  Button,
  CardMedia,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Link,
} from '@mui/material';

// import SwiperCore, {
//   Navigation
// } from 'swiper/core';

// SwiperCore.use([Navigation]);

export const Modal = ({selectedFilm, openFilmInfo, handleClose}) => {

  return (
    <Dialog
      selectedFilm={selectedFilm}
      open={openFilmInfo}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{selectedFilm.Title}</DialogTitle>
      <DialogContent style={{display: "flex"}}>
        <div style={{minWidth: "150px", marginRight: "15px" }}>
          <CardMedia
            style={{width: "100%" }}
            component="img"
            image={selectedFilm.Poster}
            alt={selectedFilm.Title}
          />
        </div>
        <div style={{display: "flex", flexDirection: "column"}}> 
          <Typography gutterBottom variant="h6" component="div">
            {`IMDb rating: ${selectedFilm.imdbRating}`}
            <StarIcon fontSize="medium" style={{color: '#ffeb3b', marginBottom: "-5px"}} />
          </Typography>
          <DialogContentText style={{ marginBottom: "15px" }} id="alert-dialog-slide-description">
            {selectedFilm.Plot}
          </DialogContentText>
          <Typography  gutterBottom  component="div">
            {`Writer: ${selectedFilm.Writer}`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {`Actors: ${selectedFilm.Actors}`}
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            {`Duration: ${selectedFilm.Runtime}`}
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="error" onClick={handleClose}>Close</Button>
        <Button variant="contained" style={{backgroundColor: "#ffeb3b", color: "#000"}}>
          <Link 
            style={{textDecoration: "none", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontWeight: "500"}}
            color="inherit"
            variant="body2" 
            href="https://www.imdb.com/" 
            target="_blank"
          >
            Watch
          </Link>
          </Button>
      </DialogActions>
    </Dialog>
  )
}
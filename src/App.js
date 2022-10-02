import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import StarIcon from '@mui/icons-material/Star';



import Grid from '@mui/material/Grid';
import { 
  AppBar, 
  Container, 
  Toolbar,
  Typography,
  Box,
  Button,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  DialogActions,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  // Slide
} from '@mui/material';

import SwiperCore, {
  Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const cards = [
  {
    "title": "Inception",
    "description": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666",
    "imdbId": "tt1375666",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Love Actually",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0314331",
    "imdbId": "tt0314331",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "6.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt0319262",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Rogue One",
    "description": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3748528",
    "imdbId": "tt3748528",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "The Holiday",
    "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457939",
    "imdbId": "tt0457939",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "5.3",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Inception",
    "description": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666",
    "imdbId": "tt13756266",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "8.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Love Actually",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0314331",
    "imdbId": "tt03143231",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "8",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt02319262",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Rogue One",
    "description": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3748528",
    "imdbId": "tt37248528",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "The Holiday",
    "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457939",
    "imdbId": "tt04572939",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Inception",
    "description": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666",
    "imdbId": "tt13d75666",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Love Actually",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0314331",
    "imdbId": "tt031d4331",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt0319d262",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Rogue One",
    "description": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3748528",
    "imdbId": "tt3748d528",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "The Holiday",
    "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457939",
    "imdbId": "tt04579d39",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Inception",
    "description": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666",
    "imdbId": "tt13s75666",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Love Actually",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0314331",
    "imdbId": "tt03s14331",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt0319s262",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "Rogue One",
    "description": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3748528",
    "imdbId": "tt3748s528",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  },
  {
    "title": "The Holiday",
    "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457939",
    "imdbId": "tt045s7939",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "writer":" Richard Curtis",
    "imdbRating": "7.6",
    "actors": "Hugh Grant, Martine McCutcheon, Keira Knightley, Martine McCutcheon, Laura Linney"
  }
]

const gallery = [
  {
    text: 'slide 1',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    text: 'slide 2',
    image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    text: 'slide 3',
    image: 'https://images.unsplash.com/photo-1536854150886-354a3b64b7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80'
  },
]


function App() {

  const [openSignIn, setOpenSignIn] = useState(false);
  const [openFilmInfo, setOpenFilmInfo] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState({});

  const handleOpenSignIn = () => {
    setOpenSignIn(true);
  }

  const handleClose = () => {
    setOpenSignIn(false);
    setOpenFilmInfo(false);
  }

  const handleOpenFilmInfo = () => {
    setOpenFilmInfo(true);
  }


  return (
  <>
    <AppBar 
      position="fixed" 
      color="primary"
    >
      <Container fixed >
        <Toolbar>
          <Typography marginRight={100}>UserName</Typography>
          <Box marginRight={3}>
            <Button 
              color="inherit" 
              variant="outlined"
              onClick={handleOpenSignIn}
            >
              Sign in
            </Button>
            <Dialog open={openSignIn} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
              <DialogContent>
              <DialogContentText>Sign in to see more </DialogContentText>
                <TextField 
                autoFocus
                margin="dense"
                id="name"
                label="Email Adress"
                type="email"
                fullWidth
                />
                <TextField 
                autoFocus
                margin="dense"
                id="pass"
                label="Password"
                type="password"
                fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="error">Cancel</Button>
                <Button onClick={handleClose} variant="contained" color="primary">Log in</Button>
              </DialogActions>

            </Dialog>
          </Box>
          <Button  style={{backgroundColor: '#DC143C'}} variant="contained">Sign up</Button>

        </Toolbar>
      </Container>
    </AppBar>
    
    <main>
      <Paper >
      <Box marginTop={8} marginRight={-2} marginLeft={-2}  marginBottom={4} >
        <Swiper  navigation={true} className="mySwiper">
          {gallery.map((item, i) => (
            <SwiperSlide key={i}>
              <Typography
                paddingTop={8} 
                paddingBottom={8}
                style={{ backgroundImage: `url(${item.image})`, backgroundPosition: 'center',
                color: 'white'}}
                variant={'h6'}
                align={'center'}
              >
                {item.text}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      </Paper>
        <Container  style={{ maxWidth: "800px"}}>
          <Grid 
            container 
            spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {cards.map((card) => (
              <Grid  key={card.imdbId} item xs={6} >
                <Card >
                      <CardMedia
                       style={{ backgroundColor: " rgba(0,0,0,.3)"}}
                        component="img"
                        height="550"
                        image={card.imgUrl}
                        alt={card.title}
                      />
                  <CardContent>
                    <Typography variant="h3" gutterButton style={{position: "absolute", transform: "translateY(-150px)", 
                    color: "white",  maxWidth: "300px", background: "rgba(0,0,0,.5)"}}>
                      {card.title}
                    </Typography>
                    <Typography variant="h5" gutterButton>
                      {'Genre:'} 
                      {' '}
                      {card.genre}
                    </Typography>
                    <Typography>
                      {`Director: ${card.director}`}
                    </Typography>
                    <Typography>
                      {'Year:'}
                      {' '}
                      {card.year}
                    </Typography>
                    <CardActions>
                      <Button 
                        onClick={(e) => {
                          handleOpenFilmInfo();
                          e.preventDefault();
                          console.log(selectedFilm)
                          setSelectedFilm(card);
                        }
                          } 
                        style={{backgroundColor: '#DC143C', marginRight: "40px"}} variant="contained">
                        See more
                        <InfoOutlinedIcon color="inherit" />
                      </Button>
                      <Dialog
                        selectedFilm={selectedFilm}
                        open={openFilmInfo}
                        // TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                      >
                        <DialogTitle>{selectedFilm.title}</DialogTitle>
                        <DialogContent style={{display: "flex"}}>
                          <div style={{maxWidth: "150px", marginRight: "15px" }}>
                            <CardMedia
                              component="img"
                              image={selectedFilm.imgUrl}
                              alt={selectedFilm.title}
                            />
                          </div>
                          <div style={{display: "flex", flexDirection: "column"}}>                       
                            {/* <Typography gutterBottom variant="h6" component="div">
                              {`IMDb rating: ${selectedFilm.imdbRating}`}
                              <StarIcon fontSize="medium" style={{color: '#ffeb3b', marginBottom: "-3px"}} />
                            </Typography> */}
                            <Typography gutterBottom variant="h6" component="div">
                              {`IMDb rating: ${selectedFilm.imdbRating}`}
                              <StarIcon fontSize="medium" style={{color: '#ffeb3b', marginBottom: "-5px"}} />
                            </Typography>
                            <DialogContentText style={{ marginBottom: "15px" }} id="alert-dialog-slide-description">
                              {card.description}
                            </DialogContentText>
                            <Typography  gutterBottom  component="div">
                              {`Writer: ${selectedFilm.writer}`}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div">
                              {`Actors: ${selectedFilm.actors}`}
                            </Typography>
                          </div>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Close</Button>
                          <Button onClick={handleClose}>Agree</Button>
                        </DialogActions>
                      </Dialog>

                      <ThumbUpOutlinedIcon />
                      <ThumbDownOutlinedIcon />

                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}

          </Grid>

        </Container>


    </main>

    <footer>
      <Typography marginTop={3} align="center" >
        <Button alignItems="center" color="secondary" variant="contained">Sign in for more access</Button>
      </Typography>
      <Typography  marginTop={3} varianf="subtitle1" component="p" align="center"  color="textSecondary">
      2022 Tetiana Bukoros 
      </Typography>

    </footer>
  </>
  );
}

export default App;



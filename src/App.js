import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';


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
} from '@mui/material';

import SwiperCore, {
  Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

const cards = [
  {
    "title": "Inception",
    "description": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666",
    "imdbId": "tt1375666",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Love Actually",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0314331",
    "imdbId": "tt0314331",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt0319262",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Rogue One",
    "description": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3748528",
    "imdbId": "tt3748528",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "The Holiday",
    "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457939",
    "imdbId": "tt0457939",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Inception",
    "description": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666",
    "imdbId": "tt13756266",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Love Actually",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0314331",
    "imdbId": "tt03143231",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt02319262",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Rogue One",
    "description": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3748528",
    "imdbId": "tt37248528",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "The Holiday",
    "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457939",
    "imdbId": "tt04572939",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Inception",
    "description": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666",
    "imdbId": "tt13d75666",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Love Actually",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0314331",
    "imdbId": "tt031d4331",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt0319d262",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Rogue One",
    "description": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3748528",
    "imdbId": "tt3748d528",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "The Holiday",
    "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457939",
    "imdbId": "tt04579d39",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Inception",
    "description": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666",
    "imdbId": "tt13s75666",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Love Actually",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0314331",
    "imdbId": "tt03s14331",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt0319s262",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "Rogue One",
    "description": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3748528",
    "imdbId": "tt3748s528",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
  },
  {
    "title": "The Holiday",
    "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457939",
    "imdbId": "tt045s7939",
    "director": "Christopher Nolan",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi"
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
            <Button color="inherit" variant="outlined">Sign in</Button>
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
                  <div >

                      <CardMedia
                       style={{ backgroundColor: " rgba(0,0,0,.3)"}}
                        component="img"
                        height="550"
                        image={card.imgUrl}
                        alt={card.title}
                      />
                  </div>
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
                      {'Director:'}
                      {' '}
                      {card.director}
                    </Typography>
                    <Typography>
                      {'Year:'}
                      {' '}
                      {card.year}
                    </Typography>
                    <CardActions>
                      <Button  style={{backgroundColor: '#DC143C', marginRight: "40px"}} variant="contained">
                        {'See more'}
                        <InfoOutlinedIcon color="inherit" />
                      </Button>
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
  </>
  );
}

export default App;



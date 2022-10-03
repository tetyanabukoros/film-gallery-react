import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import films from '../api/movies.json'

import Grid from '@mui/material/Grid';
import { 
  Container, 
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
import { gallery } from '../constants';

SwiperCore.use([Navigation]);

export const Main = ({ handleOpenFilmInfo, setSelectedFilm }) => {
  return (

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
          {films.map((card) => (
            <Grid  key={card.imdbID} item xs={6} >
              <Card >
                    <CardMedia
                     style={{ backgroundColor: " rgba(0,0,0,.3)"}}
                      component="img"
                      height="550"
                      image={card.Poster}
                      alt={card.Title}
                    />
                <CardContent>
                  <Typography variant="h3" style={{position: "absolute", transform: "translateY(-250px)", 
                  color: "white",  maxWidth: "300px"}}>
                    {card.Title}
                  </Typography>
                  <Typography style={{height: "64px"}} variant="h5">
                    {'Genre:'} 
                    {' '}
                    {card.Genre}
                  </Typography>
                  <Typography>
                    {`Director: ${card.Director}`}
                  </Typography>
                  <Typography>
                    {'Year:'}
                    {' '}
                    {card.Year}
                  </Typography>
                  <CardActions style={{ padding: "0px"}} >
                    <Button 
                      onClick={() => {
                        handleOpenFilmInfo();
                        setSelectedFilm(card);
                      }
                        } 
                      style={{backgroundColor: '#DC143C', marginRight: "20px"}} variant="contained">
                      Show more
                      <InfoOutlinedIcon color="inherit" />
                    </Button>
                    { 
                    card.imdbRating > 7 
                      ? <ThumbUpOutlinedIcon style={{color: '#2e7d32'}}/> 
                      : <ThumbDownOutlinedIcon style={{color: '#dd2c00'}}/> 
                    }
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}
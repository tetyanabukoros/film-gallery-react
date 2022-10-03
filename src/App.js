import React, { useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { AuthContext } from './AuthContext';

import films from './api/movies.json'

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
} from '@mui/material';

import SwiperCore, {
  Navigation
} from 'swiper/core';
import { Modal } from './Modal';

SwiperCore.use([Navigation]);


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

  const user = useContext(AuthContext);
  console.log(user)

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
                     onClick={(e) => {
                       handleOpenFilmInfo();
                       setSelectedFilm(card);
                     }
                       } 
                     style={{backgroundColor: '#DC143C', marginRight: "20px"}} variant="contained">
                     See more
                     <InfoOutlinedIcon color="inherit" />
                   </Button>

            
                   {card.imdbRating > 7 ? <ThumbUpOutlinedIcon style={{color: '#2e7d32'}}/> : <ThumbDownOutlinedIcon style={{color: '#dd2c00'}}/> }

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
        <Button color="secondary" variant="contained">Sign in for more access</Button>
      </Typography>
      <Typography  marginTop={3} varianf="subtitle1" component="p" align="center"  color="textSecondary">
      2022 
      </Typography>

    </footer>
    <Modal 
      selectedFilm={selectedFilm} 
      openFilmInfo={openFilmInfo} 
      handleClose={handleClose}
    />
  </>
  );
}

export default App;



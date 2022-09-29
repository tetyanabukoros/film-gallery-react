import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';




import { 
  AppBar, 
  Container, 
  Toolbar,
  Typography,
  Box,
  Button,
  Paper
} from '@mui/material';


import SwiperCore, {
  Navigation
} from 'swiper/core';

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
      <Paper>
      <Box marginTop={8} marginRight={-2} marginLeft={-2}>
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

    </main>
  </>
  );
}

export default App;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
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

// import { makeStyles } from ' @mui/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(1)
//   },
//   title: {
//     flexGrow: 1
//   }
// }))

import SwiperCore, {
  Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);



function App() {

  return (
  <>
    <AppBar position="fixed" color="primary">
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
      <Paper elevation={3}>
      <Box marginTop={10} paddingTop={5} paddingBottom={5}>
        <Swiper  navigation={true} className="mySwiper">
          {['Slide 1', 'Slide 2', 'Slide 3'].map((item, i) => (
            <SwiperSlide key={i}>
              <Typography
                variant={'h6'}
                align={'center'}
              >
                {item}
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

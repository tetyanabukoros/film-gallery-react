import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import SwiperCore, {
  Navigation
} from 'swiper/core';

import { 
  Typography,
  Box,
 } from '@mui/material';

import { gallery } from '../api/constants';

SwiperCore.use([Navigation]);

export const Carusel = () => {
  return (
    <Box className="box">
      <Swiper  navigation={true} className="mySwiper" >
        {gallery.map((item) => (
          <SwiperSlide key={gallery.id} >
            <Typography
              paddingTop={10} 
              paddingBottom={10}
              style={{ 
                backgroundImage: `url(${item.image})`, 
                backgroundPosition: 'center',
                color: 'white',
              }}
              variant={'subtitle1'}
              align={'center'}
            >
              {item.text}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
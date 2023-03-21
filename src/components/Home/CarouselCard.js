import React, { useState } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);


const CarouselCard = () => {

  const swiperOptions = {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
    },
  };

  return (
    <Box sx={{display: "flex", mt: "20px"}}>
       <Swiper
      {...swiperOptions}
    >
      {
        [...Array(4)].map((item, i) => {
          return(
          <SwiperSlide key={i}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
              <img src="/images/hero-img.jpg" style={{width: "100%", borderRadius: "20px"}} />
              <Typography>Area name goes here</Typography>
            </Box>
          </SwiperSlide>
        )})
      }
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
    </Box>
  )
}

export default CarouselCard
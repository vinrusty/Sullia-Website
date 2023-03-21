import { Box, Typography } from '@mui/material'
import React from 'react'
import CarouselCard from './CarouselCard'

const CarouselSection = () => {
  return (
    <div style={{padding: "2rem"}}>
        <Typography variant="h3" textAlign="center">Akhanda Sullia</Typography>
        <Box sx={{display: "flex", width: "100%"}}>
          <Typography>1994</Typography>
          <Typography sx={{ml: "auto"}}>2023</Typography>
        </Box>
        <CarouselCard />
    </div>
  )
}

export default CarouselSection
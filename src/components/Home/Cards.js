import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Cards = () => {
  return (
    <div>
        <Box sx={{position: "relative", display:"flex", alignItems: "flex-end"}}>
          <Box sx={{position: 'absolute', width: "100%", padding: "1.6rem", color: "white"}}>
            <Button variant="contained">news</Button>
            <Typography variant='h4'>HEADING COMES HERE</Typography>
            <Typography variant='body1'>Details of the heading comes here</Typography>
          </Box>
          <img src="/images/hero-img.jpg" style={{width: "100%"}} />
        </Box>
    </div>
  )
}

export default Cards
import React from 'react'
import { Box, Typography, Button, Breadcrumbs } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'

const Main = ({title, preTitle}) => {

  return (
    <div style={{overflowX: "hidden"}}>
        <Box sx={{position: "relative", display:"flex", alignItems: "flex-end", height: "40vh"}}>
          <Box sx={{position: 'absolute', width: "100%", padding: "1.6rem", color: "white"}}>
            <Typography variant='h3'>{title}</Typography>
            <Breadcrumbs aria-label='breadcrumb' sx={{color: "#FFF"}}>
              <MuiLink component={Link} to="/" underline='none' color="#FFF">
                <Typography>Home</Typography>
              </MuiLink>
              <Typography>{preTitle}</Typography>
              <Typography>{title}</Typography>
            </Breadcrumbs>
          </Box>
          <img src="/images/hero-img.jpg" style={{width: "100%"}} />
        </Box>
    </div>
  )
}

export default Main
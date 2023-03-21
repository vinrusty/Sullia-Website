import { Box, Typography } from '@mui/material'
import React from 'react'

const TriCard = () => {
  return (
    <div>
        <Box sx={{display: "flex", padding: "2rem", flexDirection: "column", alignItems: "center",  justifyContent: "center", width: "80%", background: "grey", borderRadius: "10px"}}>
            <Box sx={{width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden"}}>
                <img src="/images/hero-img.jpg" style={{width: "300px", overflow: "hidden"}} />
            </Box>
            <Typography variant="h4" sx={{mt: "20px"}}>Planning</Typography>
            <Typography textAlign="center" sx={{mt: "20px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley
            </Typography>
        </Box>
    </div>
  )
}

export default TriCard
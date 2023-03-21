import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'

const EventCard = () => {
  return (
    <div>
        <Box sx={{display: "flex", gap: "20px", mt: "10px"}}>
            <Box sx={{width: "400px"}}>
                <img src="/images/hero-img.jpg" style={{width: "100%", borderRadius: "10px"}} />
                <Button variant="contained" sx={{mt: "10px"}}>View Gallery</Button>
            </Box>
            <Box>
                <Box sx={{width: "55px", height: "55px", borderRadius: "10px", padding: "5px", color: "white", background: "orange", textAlign: "center"}}>
                    <Typography fontSize="0.6rem">July</Typography>
                    <Typography fontSize="1.2rem">01</Typography>
                    <Typography fontSize="0.6rem">2022</Typography>
                </Box>
                <Box>
                    <Typography sx={{mt: "20px"}} variant='h6'>Hyderabad Karnataka vimochana horata</Typography>
                    <Box sx={{mt: "20px"}}>
                        <Typography variant="body2">Date & Time: July 21st, 2022 @ 11:00 am to 12:00 pm</Typography>
                        <Typography variant="body2">Place: Goverment University</Typography>
                    </Box>
                    <Box sx={{mt: "20px"}}>
                        <Typography variant="body2">Other Details:</Typography>
                        <Typography variant="body2">Government University</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default EventCard
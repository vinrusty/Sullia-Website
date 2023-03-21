import React from 'react'
import { Box, Typography } from '@mui/material'

const VissionMissionSection = () => {
  return (
    <div>
        <Box sx={{display:"flex", gap: "20px", px: "3rem", py: "2rem", justifyContent: "center"}}>
            <Box>
                <Typography variant="h6" sx={{color: "grey"}}>OUR</Typography>
                <Typography variant='h4'>Vision and Mission</Typography>
                <Typography sx={{mt: "20px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Typography sx={{mt: "20px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Box>
            <Box>
                <img src="/images/hero-img.jpg" width="600" />
            </Box>
        </Box>
    </div>
  )
}

export default VissionMissionSection
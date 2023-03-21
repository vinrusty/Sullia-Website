import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const HistoryMapSection = () => {
  return (
    <div>
        <Box sx={{display:"flex", gap: "20px", padding: "2rem", justifyContent: "center"}}>
            <Box sx={{width: "50%"}}>
                <Typography variant='h4'>History of Sullia</Typography>
                <Typography sx={{mt: "20px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Typography sx={{mt: "20px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Button variant="contained" sx={{mt: "20px"}}>Know More</Button>
            </Box>
            <Box>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44701.34106754952!2d75.36707623008004!3d12.553747073560622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4f25fa71fbef1%3A0xb36c625679d164cf!2sSullia%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1679141043766!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </Box>
    </div>
  )
}

export default HistoryMapSection
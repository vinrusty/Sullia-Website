import { Facebook, Instagram, LinkedIn, Mail, Phone, Twitter } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Header = () => {
  return (
    <div>
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{display: "flex"}}>
                <Box sx={{display: "flex", gap: "10px", mx: "10px"}}>
                    <Phone />
                    <Typography>1234567890</Typography>
                </Box>
                <Box sx={{display: "flex", gap: "10px", mx: "10px"}}>
                    <Mail />
                    <Typography>mail@gmail.com</Typography>
                </Box>
                <Box sx={{ml: "auto", display: "flex", }}>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                        <Twitter />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header
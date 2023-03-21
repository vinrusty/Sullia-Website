import { Grid, List, ListItem, ListItemText, Typography, IconButton } from '@mui/material'
import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <div>
    <Box sx={{display: "flex", background: "#302F2F", alignItems: "center", justifyContent: "center", height: "50vh"}}>
        <Grid container spacing={4} sx={{padding: "2rem", width: "80%"}}>
            <Grid item xs sx={{color: "#fff"}}>
                <Typography variant="h6">Contact Us</Typography>
                <Box sx={{mt: "20px"}}>
                    <Typography variant="body2">Phone: 080-22114272/22215034</Typography>
                    <Typography variant="body2">Email: name@gmail.com</Typography>
                </Box>
                <Box sx={{mt: "20px"}}>
                    <Typography variant="body2">Tuesday to Saturday 10:00 am to 5:15 pm</Typography>
                    <Typography variant="body2">Sunday: 10:00 am to 4:00 pm</Typography>
                    <Typography variant="body2">Sunday Holiday</Typography>
                </Box>
            </Grid>
            <Grid item xs sx={{color: "#fff"}}>
                <Typography variant="h6">Address of the office</Typography>
                <Typography variant="body2" sx={{mt: "20px"}}>
                Dhenu Technologies Kamadhenu, #1069, Ground Floor,10th Cross, 3rd Main, Nandanavana Layout West Sector Jigani, Bengaluru - 560105
                </Typography>
            </Grid>
            <Grid item xs sx={{color: "#fff"}}>
                <Typography variant="h6">Information</Typography>
                <List>
                    <ListItem sx={{margin: 0, padding: 0}}>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem sx={{margin: 0, padding: 0}}>
                        <ListItemText>About Sullia</ListItemText>
                    </ListItem>
                    <ListItem sx={{margin: 0, padding: 0}}>
                        <ListItemText>Development</ListItemText>
                    </ListItem>
                    <ListItem sx={{margin: 0, padding: 0}}>
                        <ListItemText>Future Plan</ListItemText>
                    </ListItem>
                    <ListItem sx={{margin: 0, padding: 0}}>
                        <ListItemText>Media</ListItemText>
                    </ListItem>
                    <ListItem sx={{margin: 0, padding: 0}}>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs sx={{color: "#fff"}}>
                <Typography variant="h6">Connect with Social Media</Typography>
                <Box sx={{ display: "flex", mt:"20px" }}>
                    <IconButton size="large">
                        <Facebook fontSize="inherit" color="primary"  />
                    </IconButton>
                    <IconButton size="large">
                        <LinkedIn fontSize="inherit" color="primary"  />
                    </IconButton>
                    <IconButton size="large">
                        <Instagram fontSize="inherit" color="secondary" />
                    </IconButton>
                    <IconButton size="large">
                        <Twitter fontSize="inherit" color="primary"  />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    </Box>
    </div>
  )
}

export default Footer
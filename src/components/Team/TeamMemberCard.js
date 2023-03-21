import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const TeamMemberCard = () => {
  return (
    <div>
        <Card sx={{ maxWidth: "350px"}}>
            <CardMedia
                height={400}
                component="img"
                image='/images/team.jpg'
                title='team member'
            />
            <CardContent>
                <Typography variant="h5">Member Name</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.</Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default TeamMemberCard
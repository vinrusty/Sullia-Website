import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import { Box, Grid, Typography } from '@mui/material'

const TeamSection = () => {
  return (
    <div>
        <Box sx={{padding: "2rem"}}>
            <Typography variant="h6" sx={{color: "grey"}}>OUR TEAM</Typography>
            <Typography sx={{mb: "20px"}} variant="h4">Team Sullia</Typography>
            <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 16 }}>
                {
                    [...Array(4)].map((item, i) => (
                        <Grid item xs={2} sm={4} md={4} key={i}>
                            <TeamMemberCard />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    </div>
  )
}

export default TeamSection
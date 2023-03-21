import { Typography } from '@mui/material'
import React from 'react'
import EventCard from './EventCard'

const EventSection = () => {
  return (
    <div style={{padding: "2rem", display: "flex", gap: "20px"}}>
        <div>
            <Typography variant="h6">Latest Events</Typography>
            <EventCard />
        </div>
        <div>
            <Typography variant="h6">Upcoming Events</Typography>
            <EventCard />
        </div>
    </div>
  )
}

export default EventSection
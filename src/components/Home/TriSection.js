import { Box } from '@mui/material'
import React from 'react'
import TriCard from './TriCard'

const TriSection = () => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem"}}>
        <Box sx={{display: "flex", gap: "20px", padding: "2rem", width: "90%"}}>
            <TriCard />
            <TriCard />
            <TriCard />
        </Box>
    </div>
  )
}

export default TriSection
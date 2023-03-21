import { Box } from '@mui/material'
import React from 'react'
import Cards from './Cards'

const Main = () => {
  return (
    <div>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{padding: "1.6rem", overflowX:"hidden"}}>
            <Box gridColumn="span 8" gridRow="span 8">
                <Cards />
            </Box>
            <Box gridColumn="span 4">
                <Cards />
            </Box>
            <Box gridColumn="span 4">
                <Cards />
            </Box>
        </Box>
    </div>
  )
}

export default Main
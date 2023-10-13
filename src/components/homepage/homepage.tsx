import { Typography } from '@mui/material'
import React from 'react'

export const Homepage = () => {
  return (
    <React.Fragment>
      <Typography
        component={`div`}
        sx={{
          height: '85vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h2" sx={{ color: '#0090F5', fontWeight: 600 }}>
          Homepage
        </Typography>
      </Typography>
    </React.Fragment>
  )
}

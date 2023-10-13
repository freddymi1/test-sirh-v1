import { Typography } from '@mui/material'
import React from 'react'

export const Erro404 = () => {
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
        <Typography variant="h2" sx={{ color: 'red', fontWeight: 600 }}>
          Page introuvable
        </Typography>
      </Typography>
    </React.Fragment>
  )
}

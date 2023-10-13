import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { ExpandMore } from '@mui/icons-material'

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Paper
      component="form"
      sx={{
        borderBottom: '2px solid #ffffff20',
        boxShadow: 'none',
        padding: 'auto 15px',
        height: '66px',
        bgcolor: 'transparent',
        color: '#fff',
        mt: 0,
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <IconButton
        type="button"
        sx={{ ml: 1, p: '10px', color: '#fff' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ flex: 1, color: '#fff' }}
        placeholder="Recherche"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton
        type="button"
        sx={{ p: '10px', color: '#fff', mr: 1 }}
        aria-label="search"
      >
        <ExpandMore />
      </IconButton>
    </Paper>
  )
}

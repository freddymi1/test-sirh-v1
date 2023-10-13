import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { TopBarItem } from './top-bar-item'
import { TopBarLeftItem } from './top-bar-left-item'
import { AppBar } from '@/utils/app-bar'
import { TopNavProps } from '@/interfaces/interfaces'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export const TopNav: React.FC<TopNavProps> = ({
  open,
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu
}) => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      style={{ boxShadow: 'none', zIndex: 0 }}
      open={open}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: { sm: 'end', lg: 'space-between' },
          alignItems: 'center',
          mr: 1
        }}
      >
        <Typography
          component={`div`}
          sx={{ display: { sm: 'none', lg: 'flex' }, alignItems: 'center' }}
        >
          <TopBarLeftItem />
        </Typography>
        <Box
          sx={{
            flexGrow: 0,
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <TopBarItem
            handleCloseUserMenu={handleCloseUserMenu}
            settings={settings}
            anchorElUser={anchorElUser}
            handleOpenUserMenu={handleOpenUserMenu}
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

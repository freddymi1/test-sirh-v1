import { TopBarItemProps } from '@/interfaces/interfaces'
import { NAV_MENU } from '@/utils/constants'
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const TopBarItem: React.FC<TopBarItemProps> = ({
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
  settings
}) => {
  return (
    <React.Fragment>
      <Typography
        component={`div`}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Image src="images/Help.svg" alt="Help" width={42} height={42} />
      </Typography>
      <Typography
        component={`div`}
        sx={{
          marginLeft: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          src="images/Settings.svg"
          alt="Settings"
          width={42}
          height={42}
        />
      </Typography>
      <Typography
        component={`div`}
        sx={{
          marginLeft: '30px',
          width: '1px',
          height: '40px',
          bgcolor: '#858585',
          display: 'block',
          fontSize: '14px',
          fontWeight: 500
        }}
      />

      <Typography component={`div`} sx={{ textAlign: 'center' }}>
        <Typography
          onClick={() => {}}
          sx={{
            margin: 'auto 30px',
            color: '#494949',
            display: 'block',
            fontSize: '14px',
            fontWeight: 500
          }}
        >
          {NAV_MENU.NAME}
        </Typography>
        <Typography
          onClick={() => {}}
          sx={{
            margin: 'auto 30px',
            color: '#858585',
            display: 'block',
            fontSize: '14px'
          }}
        >
          {NAV_MENU.ENTREPRISE}
        </Typography>
      </Typography>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Image src="/images/Photo.png" alt="Soldes" width={42} height={42} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )
}

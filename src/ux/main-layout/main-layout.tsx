'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import { TopNav } from './top-nav/top-nav'
import { SideNav } from './side-nav/side-nav'
import { menuItems } from '@/utils/items'
import { Menu } from './menu/menu'
import { MainLayoutProps } from '@/interfaces/interfaces'
import { DrawerMenu } from '@/utils/drawer'

export const MainLayout: React.FC<MainLayoutProps> = ({
  child,
  open,
  ToggleOpenMenu,
  HandleDrawerClose,
  menuOpen,
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
  isOpen,
  isOpenMenu,
  isOpenSubMenu,
  handleClick,
  handleClickMenu,
  handleClickSubMenu,
  NavigateToPage
}) => {
  return (
    <>
      <TopNav
        open={open}
        anchorElUser={anchorElUser}
        handleOpenUserMenu={handleOpenUserMenu}
        handleCloseUserMenu={handleCloseUserMenu}
      />
      <Box sx={{ display: 'flex', zIndex: 10 }}>
        <SideNav
          ToggleOpenMenu={ToggleOpenMenu}
          open={open}
          HandleDrawerClose={HandleDrawerClose}
          isOpen={isOpen}
          isOpenMenu={isOpenMenu}
          isOpenSubMenu={isOpenSubMenu}
          handleClick={handleClick}
          handleClickMenu={handleClickMenu}
          handleClickSubMenu={handleClickSubMenu}
          NavigateToPage={NavigateToPage}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerMenu />
          {child}
        </Box>
      </Box>
      <Menu
        NavigateToPage={NavigateToPage}
        menuItems={menuItems}
        menuOpen={menuOpen}
        ToggleOpenMenu={ToggleOpenMenu}
      />
    </>
  )
}

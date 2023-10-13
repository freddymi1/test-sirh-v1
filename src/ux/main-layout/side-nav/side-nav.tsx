'use client'

import * as React from 'react'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import { items } from '@/utils/items'
import { SubMenu } from './sub-menu'
import { Search } from './search'
import { Drawer, DrawerHeader } from '@/utils/drawer'
import { SideMenu } from './side-menu'
import { Items } from '@/interfaces/types'
import { SideNavProps } from '@/interfaces/interfaces'

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: 'linear-gradient(to bottom, #094694, #0281E3)',
    color: '#fff',
    border: 0,
    zIndex: 999999
  }
}))

export const SideNav: React.FC<SideNavProps> = ({
  open,
  ToggleOpenMenu,
  isOpen,
  isOpenMenu,
  isOpenSubMenu,
  handleClick,
  handleClickMenu,
  handleClickSubMenu,
  NavigateToPage
}) => {
  const classes = useStyles()
  const imageWidth = `100%`
  const imageHeight = '100%'
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawer
      }}
      open={open}
    >
      <DrawerHeader sx={{ zIndex: 1, height: 66 }}>
        <IconButton onClick={ToggleOpenMenu}>
          <Image
            src="images/burger_button.svg"
            alt="burger_button"
            width={32}
            height={32}
          />
        </IconButton>
      </DrawerHeader>

      <Divider sx={{ border: 'none' }} />

      <List sx={{ opacity: 1, p: 0, fontSize: 18 }}>
        {items.map((item: Items, index: number) => {
          return (
            <SideMenu
              key={index}
              NavigateToPage={NavigateToPage}
              open={open}
              item={item}
            />
          )
        })}
      </List>

      <List
        sx={{
          p: 0,
          bgcolor: isOpen ? 'background.paper' : 'transparent',
          zIndex: 1
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <SubMenu
          open={open}
          handleClick={handleClick}
          isOpen={isOpen}
          isOpenMenu={isOpenMenu}
          isOpenSubMenu={isOpenSubMenu}
          handleClickSubMenu={handleClickSubMenu}
          handleClickMenu={handleClickMenu}
        />
      </List>

      <List sx={{ zIndex: 1, p: 0 }}>
        <Search />
      </List>

      <Typography
        component={`div`}
        sx={{ position: 'absolute', bottom: 0, left: 0, zIndex: 0, p: 0 }}
      >
        <img src="images/Graphic.svg" alt="image-footer" />
      </Typography>
    </Drawer>
  )
}

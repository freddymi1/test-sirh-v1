import { SideMenuProps } from '@/interfaces/interfaces'
import { ExpandMore } from '@mui/icons-material'
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

export const SideMenu: React.FC<SideMenuProps> = ({
  open,
  item,
  NavigateToPage
}) => {
  const pathname = usePathname()
  return (
    <React.Fragment>
      <ListItem
        onClick={() => NavigateToPage(item.pageUrl)}
        disablePadding
        sx={{
          borderBottom: '1px solid #ffffff20',
          display: 'block',
          height: 66,
          pb: 0,
          p: 0,
          background: item.type === 'firstItem' ? '#0090F5' : 'transparent'
        }}
      >
        <ListItemButton
          sx={{
            background: item.pageUrl === pathname ? '#ffffff10' : null,
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            py: 0,
            height: '66px'
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: item.pageUrl === pathname ? '#fff' : '#0090F5'
            }}
          >
            <Image src={item.icon} width={25} height={20} alt="Accueil" />
          </ListItemIcon>
          <ListItemText
            primary={item.label}
            sx={{ opacity: open ? 1 : 0, fontSize: 18 }}
          />
          {item.type === 'secondItem' ? (
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                color: '#fff',
                ml: 2
              }}
            >
              <ExpandMore />
            </ListItemIcon>
          ) : null}
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  )
}

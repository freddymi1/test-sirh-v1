import { SubMenuProps } from '@/interfaces/interfaces'
import { SIDE_LABEL } from '@/utils/constants'
import { BalanceOutlined, ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import React from 'react'

export const SubMenu: React.FC<SubMenuProps> = ({
  isOpen,
  handleClickMenu,
  isOpenMenu,
  handleClickSubMenu,
  isOpenSubMenu,
  handleClick,
  open
}) => {
  return (
    <React.Fragment>
      <ListItem
        disablePadding
        sx={{
          borderBottom: '1px solid #ffffff20',
          display: 'block',
          p: 0,
          height: 66
        }}
      >
        <ListItemButton
          onClick={handleClick}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            height: '66px'
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: isOpen ? '#084693' : '#fff'
            }}
          >
            <BalanceOutlined />
          </ListItemIcon>
          <ListItemText
            primary={SIDE_LABEL.SOLDES}
            sx={{ color: isOpen ? '#084693' : '#fff', fontSize: 15 }}
          />
          {isOpen ? (
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                color: isOpen ? '#084693' : '#fff'
              }}
            >
              <ExpandLess />
            </ListItemIcon>
          ) : (
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                color: isOpen ? '#084693' : '#fff'
              }}
            >
              <ExpandMore />
            </ListItemIcon>
          )}
        </ListItemButton>
      </ListItem>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4, height: '60px' }}
            onClick={handleClickMenu}
          >
            <ListItemText
              primary={SIDE_LABEL.MANAGE_SOLDE}
              sx={{ color: '#0090F5', fontSize: 15 }}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={isOpenMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 8, height: '60px' }}
            onClick={handleClickSubMenu}
          >
            <ListItemText
              primary={SIDE_LABEL.ADJUST_SOLDE}
              sx={{ color: '#646464', fontSize: 15 }}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={isOpenSubMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 12, height: '60px' }}>
            <ListItemText
              primary={SIDE_LABEL.COUNT}
              sx={{ color: '#646464', fontSize: 15 }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12, height: '60px' }}>
            <ListItemText
              primary={SIDE_LABEL.STORY}
              sx={{ color: '#646464', fontSize: 15 }}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  )
}

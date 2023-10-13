import { Items } from './types'

export interface MenuProps {
  menuOpen: boolean
  ToggleOpenMenu: () => void
  menuItems: any[]
  NavigateToPage: (page: string) => void
}

export interface SideMenuProps {
  open: boolean
  item: Items
  NavigateToPage: (page: string) => void
}

export interface SideNavProps {
  open: boolean
  HandleDrawerClose: () => void
  ToggleOpenMenu: () => void
  isOpen: boolean
  isOpenMenu: boolean
  isOpenSubMenu: boolean
  handleClick: () => void
  handleClickMenu: () => void
  handleClickSubMenu: () => void
  NavigateToPage: (page: string) => void
}

export interface SubMenuProps {
  isOpen: boolean
  handleClickMenu: () => void
  isOpenMenu: boolean
  handleClickSubMenu: () => void
  isOpenSubMenu: boolean
  handleClick: () => void
  open: boolean
}

export interface TopBarItemProps {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleCloseUserMenu: () => void
  anchorElUser: any
  settings: any[]
}

export interface TopNavProps {
  open: boolean
  anchorElUser: any
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleCloseUserMenu: () => void
}

export interface MainLayoutProps {
  child: React.ReactNode
  open: boolean
  ToggleOpenMenu: () => void
  HandleDrawerClose: () => void
  menuOpen: boolean
  anchorElUser: any
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleCloseUserMenu: () => void
  isOpen: boolean
  isOpenMenu: boolean
  isOpenSubMenu: boolean
  handleClick: () => void
  handleClickMenu: () => void
  handleClickSubMenu: () => void
  NavigateToPage: (page: string) => void
}

export interface PostAbsenceUxProps {
  inputValues: { [key: string]: string | number }
  PostAbsenceData: () => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isSubmitted: boolean
}

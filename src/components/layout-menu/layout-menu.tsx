'use client'

import { MainLayout } from '@/ux/main-layout/main-layout'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function LayoutMenu({
  children
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true)
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(true)

  const router = useRouter()

  const handleClick = () => {
    setIsOpen(!isOpen)
    setIsOpenMenu(false)
    setIsOpenSubMenu(false)
  }

  // show menu
  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu)
    setIsOpenSubMenu(false)
  }

  // show sub menu
  const handleClickSubMenu = () => {
    setIsOpenSubMenu(!isOpenSubMenu)
  }

  // on open user menu
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  // close user menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  // open burger menu
  const ToggleOpenMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // close drawer
  const HandleDrawerClose = () => {
    setOpen(false)
  }

  // navigate to the different page
  const NavigateToPage = (page: string) => {
    router.push(page)
    setMenuOpen(false)
  }

  return (
    <MainLayout
      child={children}
      open={open}
      menuOpen={menuOpen}
      ToggleOpenMenu={ToggleOpenMenu}
      HandleDrawerClose={HandleDrawerClose}
      anchorElUser={anchorElUser}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      isOpen={isOpen}
      isOpenMenu={isOpenMenu}
      isOpenSubMenu={isOpenSubMenu}
      handleClick={handleClick}
      handleClickMenu={handleClickMenu}
      handleClickSubMenu={handleClickSubMenu}
      NavigateToPage={NavigateToPage}
    />
  )
}

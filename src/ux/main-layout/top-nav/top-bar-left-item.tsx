import { NAV_MENU, TITLE_PAGES, URL } from '@/utils/constants'
import { BalanceOutlined } from '@mui/icons-material'
import { Box, ListItemIcon, Typography } from '@mui/material'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface TopBarLeftItemProps {}

export const TopBarLeftItem: React.FC<TopBarLeftItemProps> = ({}) => {
  const [pathname, setPathname] = useState(TITLE_PAGES.HOME_PAGE)

  const router = usePathname()

  useEffect(() => {
    if (router === URL.HOME_PAGE) {
      setPathname(TITLE_PAGES.HOME_PAGE)
    }
    if (router === URL.LIST_ABSENCES) {
      setPathname(TITLE_PAGES.LIST_ABSENCES)
    }
    if (router === URL.POST_ABSENCE) {
      setPathname(TITLE_PAGES.POST_ABSENCE)
    }
  }, [pathname, router])

  return (
    <React.Fragment>
      <Typography
        component={`div`}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Image src="images/abs_icon.svg" alt="logo" width={38} height={38} />
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          onClick={() => {}}
          sx={{
            margin: 'auto 30px',
            color: '#494949',
            display: 'block',
            fontSize: '24px',
            fontWeight: 700
          }}
        >
          {pathname}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="images/stripe2.svg"
            alt="stripe2"
            width={10}
            height={19}
          />
        </Typography>

        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          component={`div`}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              ml: '30px',
              fontWeight: 600,
              justifyContent: 'center',
              color: '#858585'
            }}
          >
            <BalanceOutlined />
          </ListItemIcon>
        </Typography>

        <Typography
          onClick={() => {}}
          sx={{
            margin: 'auto 30px',
            color: '#858585',
            display: 'block',
            fontSize: '18px',
            fontWeight: 600
          }}
        >
          {NAV_MENU.SUB_MODULE}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="images/stripe2.svg"
            alt="stripe2"
            width={10}
            height={19}
          />
        </Typography>

        <Typography
          onClick={() => {}}
          sx={{
            margin: 'auto 30px',
            color: '#858585',
            display: 'block',
            fontSize: '16px'
          }}
        >
          {NAV_MENU.SUB_SUB_MODULE}
        </Typography>
      </Box>
    </React.Fragment>
  )
}

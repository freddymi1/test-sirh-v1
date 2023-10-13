import { MenuProps } from '@/interfaces/interfaces'
import { MenuItems } from '@/interfaces/types'
import { Card, CardContent, Drawer, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: '#fff',
    border: 0,
    marginLeft: '12.5rem',
    width: '800px',
    borderRadius: '0 40px 40px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 10px rgba(206, 206, 206, 0.4)',
    fontFamily: 'serif'
  }
}))

export const Menu: React.FC<MenuProps> = ({
  menuOpen,
  ToggleOpenMenu,
  menuItems,
  NavigateToPage
}) => {
  const classes = useStyles()

  const pathname = usePathname()

  return (
    <Drawer
      anchor="left"
      classes={{
        paper: classes.drawer
      }}
      open={menuOpen}
      onClose={ToggleOpenMenu}
    >
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
          src="images/Logo.svg"
          alt="mataime_logo"
          width={350}
          height={72.5}
        />
      </Typography>

      <Typography component={`div`} sx={{ mt: '6rem', px: '47px' }}>
        <Grid
          container
          rowSpacing={'6px'}
          columnSpacing={'6px'}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {menuItems.map((item: MenuItems, index: number) => {
            return (
              <Grid item xs={3} key={index}>
                <Card
                  onClick={() => NavigateToPage(item.pageUrl)}
                  sx={{
                    minWidth: 170,
                    fontFamily: 'inherit',
                    minHeight: 170,
                    height: 170,
                    cursor: 'pointer',
                    border:
                      item.pageUrl === pathname
                        ? '2px solid #0090F5'
                        : '1px solid #D4D4D4',
                    borderRadius: '10px'
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography component="div">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={89}
                        height={83}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1.5,
                        fontSize: 20,
                        fontWeight: item.pageUrl === pathname ? 600 : 500,
                        color: item.pageUrl === pathname ? '#0090F5' : '#494949'
                      }}
                    >
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Typography>
    </Drawer>
  )
}

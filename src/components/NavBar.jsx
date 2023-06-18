import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

const NavBar = () => {

  const router = useRouter()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))

  const pages = [
    {
      name: 'Servicios',
      link: '/'
    },
    {
      name: 'Sobre nosotros',
      link: '/'
    },
    {
      name: 'Contactanos',
      link: '/'
    }
  ]

  const [anchorElNav, setAnchorElNav] = useState(null)
  
  const handleNavMenu = (event) => {
    setAnchorElNav(event?.currentTarget)
  }

  const handleClose = (link) => {
    setAnchorElNav(null)
    if (link) {
      router.push(link)
    }
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
    
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              color='inherit'
              onClick={handleNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleClose(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleClose(page.link)}>
                  <Typography textAlign='center'>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>


          </Box>

          <Box
            component='a'
            href='/'
            sx={{ flexGrow: 1, display: isSmallScreen && 'flex' }}
          >
            <Image
              src='/BancoUniversitarioLogo.svg'
              width={50}
              height={50}
              alt='Logo del Banco Universitario'
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.link}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Button
            color='inherit'
            href='/'
          >
            Banca
          </Button>

        </Toolbar>
      </Container>
    </AppBar>

  )
}

export default NavBar
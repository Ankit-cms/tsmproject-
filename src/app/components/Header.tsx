'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FlareIcon from '@mui/icons-material/Flare'; 
import AppsIcon from '@mui/icons-material/Apps';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CallIcon from '@mui/icons-material/Call';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ComputerIcon from '@mui/icons-material/Computer';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'; 
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <FlareIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'common.black' }}  />
          <Typography
            variant="h6"
            noWrap
            component="a"
            color="common.black"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' }, 
              letterSpacing: '1px', 
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}>
            Instalanes
          </Typography>

          <Box sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu} 
              sx={{ px: 0, color: 'common.black' }}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {/* Static items with icons and links */}
              <MenuItem onClick={handleCloseNavMenu} component="a" href={`/`} >
                <AppsIcon sx={{ mr: 1, color: 'common.black' }} />
                <Typography textAlign="center" color="common.black">TMS Solutions</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpen}>
                <ReceiptLongIcon sx={{ mr: 1, color: 'common.black' }} />
                <Typography
                  textAlign="center"
                  color="common.black"
                  display={'flex'}
                  alignItems={'center'}>
                  Resources <KeyboardArrowDownIcon />
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component="a" href={`/contact`}>
                <CallIcon sx={{ mr: 1, color: 'common.black' }} />
                <Typography textAlign="center" color="common.black">Contact Us</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component="a" href={`/`}>
                <LoginOutlinedIcon sx={{ mr: 1, color: 'common.black' }} /> 
                <Typography textAlign="center" color="common.black">Login</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <FlareIcon sx={{ display: { xs: 'flex', md: 'none' }, mx: 1, color: 'common.black' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            color="common.black"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1, 
              textDecoration: 'none',
            }}>
            Instalanes
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              gap: 2,
              justifyContent: 'center',
              display: { xs: 'none', md: 'flex' },
            }}>
            <Button
              component={'a'}
              href="/"
              sx={{
                color: 'common.black',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}>
              <AppsIcon fontSize="small" />
              TMS Solutions
            </Button>

            <Button
              onClick={handleOpen}
              sx={{
                color: 'common.black',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}>
              <ReceiptLongIcon fontSize="small" />
              Resources <KeyboardArrowDownIcon fontSize="small" />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              disableScrollLock>
              <MenuItem
                component={'a'}
                href="/about"
                onClick={handleClose}
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ApartmentIcon fontSize="small" />
                About
              </MenuItem>
              <MenuItem
                component={'a'}
                href="/pricing"
                onClick={handleClose}
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AttachMoneyIcon fontSize="small" />
                Pricing
              </MenuItem>

              <MenuItem
                component={'a'}
                href="/blogs"
                onClick={handleClose}
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ArticleIcon fontSize="small" />
                Blog
              </MenuItem>

              <MenuItem
                component={'a'}
                href="/partners"
                onClick={handleClose}
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupIcon fontSize="small" />
                Partners
              </MenuItem>
            </Menu>

            {/* <Button
              component={'a'}
              href="/contact"
              sx={{
                my: 2,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <CallIcon fontSize="small" />
              Contact Us
            </Button> */}
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Open Profile">
              <Button
                sx={{
                  color: 'common.black',
                  alignItems: 'center',
                  gap: 1,
                  display: { xs: 'none', md: 'flex' }
                }}
                onClick={handleOpenUserMenu}>
                <LoginOutlinedIcon sx={{ color: 'common.black' }} />
                Login
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              disableScrollLock>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <Button
              variant="contained"
              // color='secondary'
              href="/pricing"
              sx={{
                ml: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}>
              <ComputerIcon fontSize="small" />
              Get Demo
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

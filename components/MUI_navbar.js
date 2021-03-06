import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/dist/client/link";
import Logo from "./Logo.js";
import { useEffect } from "react";

const pages = [['Inicio', '/'], ['Sobre nós', '/sobre-nos'], ['Servizos', '/servizos'], ['Instalacións', '/instalacions'], ['Teu espazo', '/teu-espazo']];
const navLinkClass = 'flex items-center px-4 -mb-1 border-b-2 hover:border-red-300 focus:border-red-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none';
const mobileNavLinkClass = 'flex items-center px-1 -mb-1 border-b-2 hover:border-red-300 focus:border-red-400';

const ResponsiveAppBar = ({
  ...props
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [path, setPath] = React.useState('');
  const activeSectionClass = 'border-red-400';

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const getPath = () => {
    if (typeof window !== "undefined") {
      return window?.location?.pathname
    } else {
      return '';
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setPath(getPath());
  });

  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              {/* LOGO */}
              <Link href='/'><a><Logo /></a></Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
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
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <Link key={page} href={page[1]}><a>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center"><span className={`${mobileNavLinkClass} ${path === page[1] ? activeSectionClass : ''}`}>{page[0]}</span></Typography>
                    </MenuItem>
                  </a></Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              {/* LOGO */}
              <Link href='/'><a><Logo /></a></Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },  }}>
              {pages.map((page) => (
                <Link key={page} href={page[1]}><a >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block', mx: 1, }}
                  >
                    <span className={`${navLinkClass} ${path === page[1] ? activeSectionClass : ''}`}>{page[0]}</span>
                  </Button>
                </a></Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <style jsx>{`
      `}</style>
    </>
  );
};
export default ResponsiveAppBar;

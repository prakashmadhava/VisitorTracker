import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import theme from '../../styles/theme';
import AppBarMenu from './../AppBar/AppBarMenu';

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <AppBarMenu />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

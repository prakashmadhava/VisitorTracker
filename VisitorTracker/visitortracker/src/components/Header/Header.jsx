import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        style={{
          backgroundColor: '#2196f3',
        }}
      >
        <Toolbar>
          <Typography variant='h6' style={{ flex: 1 }}>
            Visitor Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

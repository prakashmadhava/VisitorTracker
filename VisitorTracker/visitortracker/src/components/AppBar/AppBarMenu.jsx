import * as React from 'react';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import EntryPage from '../EntryPage/EntryPage';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';

const AppBarMenu = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Visitors Entry Form' value='1' />
            <Tab label='Visitors List' value='2' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <EntryPage />
        </TabPanel>
        <TabPanel value='2'>
          <AppBar position='static' elevation={0}>
            Visitor Tracker
          </AppBar>
          <Button variant='contained' color='primary'>
            Primary
          </Button>
          <Button variant='contained' color='secondary'>
            Secondary
          </Button>
        </TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default AppBarMenu;

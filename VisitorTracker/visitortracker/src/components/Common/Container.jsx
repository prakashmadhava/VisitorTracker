import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Container = (props) => {
  const classes = useStyles();

  return (
    <div {...props} className={classes.root}>
      {props.children}
    </div>
  );
};

export default Container;

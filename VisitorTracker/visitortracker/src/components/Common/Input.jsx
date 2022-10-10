import React from 'react';
import { Box, TextField, Grid } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import useStyles from './useStyle';

const Input = (props) => {
  const classes = useStyles();
  const type = props && props.isdate ? 'date' : '';
  const error = props.touched && (props.error || false);
  const helperText = props.touched && props.error;

  return (
    <>
      <Box sx={{ width: '30%' }}>
        <Grid
          container
          rowSpacing={1}
          rowGap={2}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          <Grid item xs={2}>
            <Box className={classes.BoxText} pr={2}>
              {props.label || props.labels} : {props.req && <span>*</span>}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <TextField
                {...props}
                variant='outlined'
                required={props.req}
                innerRef={props.innerRef}
                size='small'
                select={props.isSelect}
                type={type}
                helperText={helperText}
                error={error}
                value={props.value}
                defaultValue={props.defaultValue}
                inputProps={{ ...props.inputProps }}
                label={''}
              >
                {props.option &&
                  props.option.length > 0 &&
                  props.option.map((value, index) => {
                    return (
                      <MenuItem key={index} value={value}>
                        {value}
                      </MenuItem>
                    );
                  })}
              </TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Input;

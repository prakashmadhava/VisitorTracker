import * as React from 'react';
import {
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import Input from '../Common/Input';
import Container from './../Common/Container';
import useStyles from './../Common/useStyle';
import nationality from './../../Data/nationality.json';
import { Box } from '@material-ui/core';

const VisitorType = {
  EU: 'EU',
  NonEU: 'NEU',
};

const EntryPage = (props) => {
  const [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    passportNo: '',
    passportValidFrom: null,
    passportValidTo: null,
    nationality: '',
    entryApproved: true,
    visitorType: VisitorType.EU,
    visaNo: '',
    visaValidFrom: null,
    visaValidTo: null,
    entryDate: null,
    exitDate: null,
    biometricNo: '',
    numberOfPreviousVisits: 0,
  });

  const classes = useStyles();
  const _array = [];
  for (const value of nationality) {
    _array.push(value.nationality);
  }
  const [selectedCitizenValue, setselectedCitizenValue] = React.useState(
    VisitorType.EU
  );
  const [entryApprovedchecked, setentryApprovedchecked] = React.useState(true);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const handleCitizenValueChange = (event) => {
    setselectedCitizenValue(event.target.value);
  };

  const handleEntryApprovedChange = (event) => {
    setentryApprovedchecked(event.target.checked);
  };

  let visaDetail = {
    visaNo: state.visaNo,
    visaValidFrom: state.visaValidFrom,
    visaValidTo: state.visaValidTo,
    entryDate: state.entryDate,
    exitDate: state.exitDate,
    biometricNo: state.biometricNo,
    numberOfPreviousVisits: state.numberOfPreviousVisits,
  };

  let payload = {
    visitor: {
      firstName: state.firstName,
      lastName: state.lastName,
      passportNo: state.passportNo,
      passportValidFrom: state.passportValidFrom,
      passportValidTo: state.passportValidTo,
      nationality: state.nationality,
      entryApproved: entryApprovedchecked,
      isEUVisitor: selectedCitizenValue === VisitorType.EU,
      visaDetails: selectedCitizenValue === VisitorType.NonEU && visaDetail,
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    };

    fetch('Visitor', requestOptions)
      .then((response) => {
        console.log('API response : ');
        console.log(response);
        if (response.status !== 200) {
          console.log('not ok' + response.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant='h3'>Visitor Entry Form</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      <Paper className={classes.paper}>
        <Input
          name='firstName'
          value={state.firstName}
          label={'First Name'}
          req={true}
          helperText={''}
          isSelect={false}
          error={props.meta && props.meta.error}
          onChange={handleChange}
          {...props.input}
          {...props.custom}
          {...props.meta}
        />
        <Input
          name='lastName'
          label={'Last Name'}
          value={state.lastName}
          req={true}
          helperText={''}
          isSelect={false}
          onChange={handleChange}
          error={props.meta && props.meta.error}
          {...props.input}
          {...props.custom}
          {...props.meta}
        />
        <Input
          name='passportNo'
          label={'Passport Number'}
          value={state.passportNo}
          req={true}
          helperText={''}
          isSelect={false}
          onChange={handleChange}
          error={props.meta && props.meta.error}
          {...props.input}
          {...props.custom}
          {...props.meta}
        />
        <Input
          name='passportValidFrom'
          label={'Passport Valid From'}
          value={state.passportValidFrom}
          req={true}
          helperText={''}
          error={false}
          isdate={true}
          onChange={handleChange}
          inputProps={{ max: new Date().toISOString().slice(0, 10) }}
          {...props.input}
          {...props.meta}
          {...props.custom}
        />
        <Input
          name='passportValidTo'
          label={'Passport Valid To'}
          value={state.passportValidTo}
          req={true}
          helperText={''}
          error={false}
          isdate={true}
          onChange={handleChange}
          inputProps={{ max: new Date().toISOString().slice(0, 10) }}
          {...props.input}
          {...props.meta}
          {...props.custom}
        />
        <Input
          name='nationality'
          label={'Nationality'}
          value={state.nationality}
          req={false}
          helperText={''}
          error={false}
          isSelect={true}
          option={_array}
          onChange={handleChange}
          defaultValue={'--Select--'}
          {...props.input}
          {...props.custom}
          {...props.meta}
        />
        <Box className={classes.BoxInline} pr={1} pl={1}>
          <Box className={classes.BoxText} pr={1}>
            Citizen Type :
          </Box>
        </Box>
        <Box>
          <RadioGroup
            {...props.input}
            {...props.rest}
            row
            aria-label='position'
            name='position'
            defaultValue='top'
          >
            <FormControlLabel
              value='EU'
              size='small'
              control={
                <Radio
                  checked={selectedCitizenValue === VisitorType.EU}
                  onChange={handleCitizenValueChange}
                  value={VisitorType.EU}
                  label='EU Citizen'
                  name='radio-buttons'
                  color='primary'
                  size='small'
                  inputProps={{ 'aria-label': 'A' }}
                />
              }
              label='EU Citizen'
              labelPlacement='end'
            />
            <FormControlLabel
              value={VisitorType.NonEU}
              size='small'
              control={
                <Radio
                  checked={selectedCitizenValue === VisitorType.NonEU}
                  onChange={handleCitizenValueChange}
                  value={VisitorType.NonEU}
                  label='Non EU Citizen'
                  name='radio-buttons'
                  color='primary'
                  size='small'
                  inputProps={{ 'aria-label': 'B' }}
                />
              }
              label='Non EU Citizen'
              labelPlacement='end'
            />
          </RadioGroup>
        </Box>
        {selectedCitizenValue === VisitorType.NonEU && (
          <Box>
            <Input
              name='visaNo'
              label={'Visa number'}
              value={state.visaNo}
              req={true}
              helperText={''}
              isSelect={false}
              onChange={handleChange}
              error={props.meta && props.meta.error}
              {...props.input}
              {...props.custom}
              {...props.meta}
            />
            <Input
              name='visaValidFrom'
              label={'Visa Valid From'}
              value={state.visaValidFrom}
              req={true}
              helperText={''}
              error={false}
              isdate={true}
              onChange={handleChange}
              inputProps={{ max: new Date().toISOString().slice(0, 10) }}
              {...props.input}
              {...props.meta}
              {...props.custom}
            />
            <Input
              name='visaValidTo'
              label={'Visa Valid To'}
              value={state.visaValidTo}
              req={true}
              helperText={''}
              error={false}
              isdate={true}
              onChange={handleChange}
              inputProps={{ max: new Date().toISOString().slice(0, 10) }}
              {...props.input}
              {...props.meta}
              {...props.custom}
            />
            <Input
              name='entryDate'
              label={'Entry Date'}
              value={state.entryDate}
              req={true}
              helperText={''}
              error={false}
              isdate={true}
              onChange={handleChange}
              inputProps={{ max: new Date().toISOString().slice(0, 10) }}
              {...props.input}
              {...props.meta}
              {...props.custom}
            />
            <Input
              name='exitDate'
              label={'Exit Date'}
              value={state.exitDate}
              req={true}
              helperText={''}
              error={false}
              isdate={true}
              onChange={handleChange}
              inputProps={{ max: new Date().toISOString().slice(0, 10) }}
              {...props.input}
              {...props.meta}
              {...props.custom}
            />
            <Input
              name='biometricNo'
              label={'Biometric number'}
              value={state.biometricNo}
              req={true}
              helperText={''}
              isSelect={false}
              onChange={handleChange}
              error={props.meta && props.meta.error}
              {...props.input}
              {...props.custom}
              {...props.meta}
            />
            <Input
              name='numberOfPreviousVisits'
              label={'Number of Previous visits'}
              value={state.numberOfPreviousVisits}
              req={true}
              helperText={''}
              isSelect={false}
              onChange={handleChange}
              error={props.meta && props.meta.error}
              {...props.input}
              {...props.custom}
              {...props.meta}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name='entryApproved'
                  checked={entryApprovedchecked}
                  onChange={handleEntryApprovedChange}
                  color='primary'
                  size='small'
                />
              }
              label='Entry Approved'
            />
          </Box>
        )}
        <Box sx={{ flexGrow: 2 }}>
          <Grid container spacing={2} direction='row' alignItems='center'>
            <Grid item xs={2}>
              <Button variant='contained' color='default'>
                Clear
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant='contained'
                color='primary'
                onClick={handleSubmit}
              >
                Success
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box></Box>
      </Paper>
    </Container>
  );
};

export default EntryPage;

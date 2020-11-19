import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto';

// import Typography from '@material-ui/core/Typography'
// import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

import { BrowserRouter, Route, Switch } from "react-router-dom"
import January from './January'
import February from './February'
import March from './March'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styles Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control={<Checkbox 
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      inputProps={{
        'aria-label': 'secondary checkbox'
      }}
    />}
    label='Testing Checkbox'
    />
  )
}

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">

            <Typography variant='h2' component='div'>
              Select the Month
            </Typography>
            <Typography variant='subtitle1'>
              Learn how to use Material UI
            </Typography>

            <ButtonStyled />
  
            <Grid container spacing={2} justify='center'>
              <Grid item>
                Income
                <div>Income 1</div>
              </Grid>
              <Grid item>
                Outcome
                <div>Outcome 1</div>
              </Grid>
            </Grid>
  
            <CheckboxExample />
            <ButtonGroup variant='contained' color='primary'>
              <Button 
                startIcon={<SaveIcon />}>
                Save
              </Button>
              <Button 
                startIcon={<DeleteIcon />}>
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </ThemeProvider>
    )
};

export default Home;
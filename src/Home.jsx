import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles, ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from '@material-ui/core';

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

const blackColor = makeStyles({
    root: {
        color: 'black'
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

function DividerStyled() {
    const classes = useStyles();
    return <Divider />
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

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      width: '50%',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
})(MuiAccordion);
  
const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      background: 'linear-gradient(45deg, #3f51b5 30%, #282c34 90%)',
      color: 'white',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
})(MuiAccordionSummary);
  
const AccordionDetails = withStyles((theme) => ({
root: {
    padding: theme.spacing(2),
},
}))(MuiAccordionDetails);

const Home = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
};

    return (
        <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">

            <Typography variant='h2' component='div' className='top-40 bottom-40'>
              Select the Month
            </Typography>

            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary 
                aria-controls="panel1d-content" 
                id="panel1d-header" 
                expandIcon={<ExpandMoreIcon style={{fill: "white"}}
                />}>
                    <Typography>January</Typography>
                </AccordionSummary>
                <AccordionDetails>
                        <Grid container spacing={2} justify='center'>
                            <Grid item alignItems='flex-start'>
                                <div className='align-left'>Income</div>
                                <div className='align-left'>Expenses</div>
                                <div className='align-left'>Balance</div>
                            </Grid>
                            <Grid item>
                                <div className='align-right'>1500€</div>
                                <div className='align-right'>900€</div>
                                <div className='align-right'>600€</div>
                            </Grid>
                            <DividerStyled />
                            <Grid item xs={12}>
                                <div>More Info +</div>
                            </Grid>
                        </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary 
                aria-controls="panel1d-content" 
                id="panel1d-header" 
                expandIcon={<ExpandMoreIcon style={{fill: "white"}}
                />}>
                    <Typography>February</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary 
                aria-controls="panel1d-content" 
                id="panel1d-header" 
                expandIcon={<ExpandMoreIcon style={{fill: "white"}}
                />}>
                    <Typography>March</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>



            <Typography variant='subtitle1'>
              Learn how to use Material UI
            </Typography>

            <ButtonStyled />
  
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
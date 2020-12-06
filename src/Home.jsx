import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonGroup } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
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
import Popup from './components/Popup';
import TotalIncome from './components/TotalIncome';
import RecordForm from './components/RecordForm';
import TotalExpenses from './components/TotalExpenses';
import TotalBalance from './components/TotalBalance';
import { January, February, March, April, May, June, July, August, September, October, November, December } from './components/PieChart'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
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
        minHeight: '35vh',
      },
    },
    expanded: {},
})(MuiAccordion);

const currentDate = new Date();
const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
const currentMonth = month[currentDate.getMonth()];
  
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
        margin: 'auto',
      },
    },
    expanded: {},
})(MuiAccordionSummary);
  
const AccordionDetails = withStyles((theme) => ({
root: {
    padding: theme.spacing(2),
},
}))(MuiAccordionDetails);

// const handleChange = expense => ({ target: {value} }) => {
//     this.setState({
//         form: {
//             ...this.state.form,
//             [expense]: value
//         }
//     })
// }

const Home = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);};
    const [openIncomePopup, setIncomePopup] = React.useState(false);
    const [openExpensesPopup, setExpensesPopup] = React.useState(false);    

    return (
        <ThemeProvider theme={theme}>
        <div className="App">
          <div className="Body">

            <ButtonGroup variant='contained' color='primary' className='top-40'>
              <Popup 
                openPopup={openIncomePopup} 
                setOpenPopup={setIncomePopup}
                title = 'Add Income'>
                    <RecordForm type='income' month={currentMonth}/>
              </Popup>
              <Button onClick={() => setIncomePopup(true)} startIcon={<AddIcon />}>Add Income</Button>
              <Popup 
                openPopup={openExpensesPopup} 
                setOpenPopup={setExpensesPopup}
                title = 'Add Expense'>
                    <RecordForm type='expense' month={currentMonth}/>
              </Popup>
              <Button onClick={() => setExpensesPopup(true)} startIcon={<RemoveIcon />}>Add Expense</Button>
            </ButtonGroup>

            <Typography variant='h2' component='div' className='top-40 bottom-40'>
              Select The Month
            </Typography>

            <Grid container>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./January'><January /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./February'><February /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./March'><March /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./April'><April /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./May'><May /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./June'><June /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./July'><July /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./August'><August /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./September'><September /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./October'><October /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./November'><November /></a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} xl={3}>
                <a href='./December'><December /></a>
              </Grid>
            </Grid>
            
            {/* <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary 
                aria-controls="panel1d-content" 
                id="panel1d-header" 
                expandIcon={<ExpandMoreIcon style={{fill: "white"}}
                />}>
                    <Typography>January</Typography>
                </AccordionSummary>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}>
                <AccordionDetails>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <div className='align-left'>Income</div>
                                <div className='align-left'>Expenses</div>
                                <div className='align-left'>Balance</div>
                            </Grid>
                            <Grid item>
                                <TotalIncome />
                                <TotalExpenses />
                                <TotalBalance />
                            </Grid>
                            <div style={{
                              position: 'absolute',
                              bottom: '0%',
                              transform: 'translate(-0%, 150%)'
                            }}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Popup 
                                      openPopup={openIncomePopup} 
                                      setOpenPopup={setIncomePopup}
                                      title = 'Add Income'>
                                          <RecordForm type='income' />
                                    </Popup>
                                    <Button onClick={() => setIncomePopup(true)}>Add Income +</Button>
                                </Grid>
                                <Grid item xs={4}>
                                  <Popup 
                                    openPopup={openExpensesPopup} 
                                    setOpenPopup={setExpensesPopup}
                                    title = 'Add Expense'>
                                        <RecordForm type='expense' />
                                  </Popup>
                                  <Button onClick={() => setExpensesPopup(true)}>Add Expense -</Button>
                                </Grid>
                                <Grid item xs={4}>
                                  <Button onClick={() => setExpensesPopup(true)}>Full Info</Button>
                                </Grid>
                            </Grid>
                            </div>
                        </Grid>
                </AccordionDetails>
                </div>
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

            <img src={logo} className="App-logo" alt="logo" /> */}
          </div>
        </div>
      </ThemeProvider>
    )
};

export default Home;
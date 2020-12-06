import React from 'react';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import { Paper, Grid, Button } from '@material-ui/core'
import TotalIncome from './components/TotalIncome';
import TotalExpenses from './components/TotalExpenses';
import TotalBalance from './components/TotalBalance';
import { June as JunePie } from './components/PieChart';
import MonthRecords from './components/MonthRecords';
import { JuneCategories } from './components/MonthChart';
import { JuneTable } from './components/DataTable';
import { ButtonGroup } from '@material-ui/core';
import Popup from './components/Popup';
import RecordForm from './components/RecordForm';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: 36,
        marginBottom: 15,
      }
    }
})

const FirstPaper = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      width: '95%',
      marginTop: '20px'
    //   position: 'absolute',
    //   top: '100px'
    }
})(Paper);

const SecondPaper = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      width: '95%',
      marginTop: '20px',
    }
})(Paper);

const June = () => {

    const [openIncomePopup, setIncomePopup] = React.useState(false);
    const [openExpensesPopup, setExpensesPopup] = React.useState(false);

    return (
    
        <ThemeProvider theme={theme}>
        <div className="App">
          <div className="Body">
                <ButtonGroup variant='contained' color='primary' style={{marginTop: '20px'}}>
                        <Popup 
                        openPopup={openIncomePopup} 
                        setOpenPopup={setIncomePopup}
                        title = 'Add Income'>
                            <RecordForm type='income' month='June' />
                        </Popup>
                    <Button onClick={() => setIncomePopup(true)} startIcon={<AddIcon />}>Add Income</Button>
                        <Popup 
                        openPopup={openExpensesPopup} 
                        setOpenPopup={setExpensesPopup}
                        title = 'Add Expense'>
                            <RecordForm type='expense' month='June' />
                        </Popup>
                    <Button onClick={() => setExpensesPopup(true)} startIcon={<RemoveIcon />}>Add Expense</Button>
                </ButtonGroup>

              <FirstPaper variant='outlined'>

                  <Grid container>
                    
                    <Grid item xs={12} md={6}>
                                <div className='align-vertically'>
                                    <JunePie />
                                    
                                    <div className='width100' style={{marginTop: '10px'}}>
                                        <Grid container>
                                            <Grid item xs={3}></Grid>
                                            <Grid item xs={3}>
                                                <span>Income</span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <MonthRecords month='June' type='income' />
                                            </Grid>
                                            <Grid item xs={3}></Grid>
                                        </Grid>
                                    </div>

                                    <div className='width100'>
                                        <Grid container>
                                            <Grid item xs={3}></Grid>
                                            <Grid item xs={3}>
                                                <span>Expenses</span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <MonthRecords month='June' type='expenses' />
                                            </Grid>
                                            <Grid item xs={3}></Grid>
                                        </Grid>
                                    </div>

                                    <div className='width100' style={{marginBottom: '10px'}}>
                                        <Grid container>
                                            <Grid item xs={3}></Grid>
                                            <Grid item xs={3}>
                                                <span>Balance</span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <MonthRecords month='June' type='balance' />
                                            </Grid>
                                            <Grid item xs={3}></Grid>
                                        </Grid>
                                    </div>
                                </div>
                    </Grid>
                    
                    <Grid container item sm={12} md={6}>
                        <Grid xs={12} item justify='center'>
                            <div>
                                <JuneCategories />  
                            </div> 
                        </Grid>                
                    </Grid>
                  </Grid>
                  
              </FirstPaper>

              <SecondPaper style={{marginBottom: '20px'}}>
                  <JuneTable />
              </SecondPaper>

          </div>
        </div>
      </ThemeProvider>

    )
};

export default June;
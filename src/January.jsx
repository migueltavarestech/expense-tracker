import React from 'react';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'
import TotalIncome from './components/TotalIncome';
import TotalExpenses from './components/TotalExpenses';
import TotalBalance from './components/TotalBalance';
import { January as JanuaryPie } from './components/PieChart';
import MonthRecords from './components/MonthRecords';

const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: 36,
        marginBottom: 15,
      }
    }
})

const CustomPaper = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      width: '90%',
      position: 'absolute',
      top: '100px',
    }
})(Paper);

const January = () => {
    return (
    
        <ThemeProvider theme={theme}>
        <div className="App">
          <div className="Body">
              <CustomPaper variant='outlined'>

                  <Grid container>
                    
                    <Grid item xs={12} md={6}>
                                <div className='align-vertically'>
                                    <div className='width100'>
                                        <Grid container>
                                            <Grid item xs={3}></Grid>
                                            <Grid item xs={3}>
                                                <span>Income</span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <MonthRecords month='January' type='income' />
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
                                                <MonthRecords month='January' type='expenses' />
                                            </Grid>
                                            <Grid item xs={3}></Grid>
                                        </Grid>
                                    </div>

                                    <div className='width100'>
                                        <Grid container>
                                            <Grid item xs={3}></Grid>
                                            <Grid item xs={3}>
                                                <span>Balance</span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <MonthRecords month='January' type='balance' />
                                            </Grid>
                                            <Grid item xs={3}></Grid>
                                        </Grid>
                                    </div>
                                </div>
                    </Grid>
                    
                    <Grid item sm={12} md={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <JanuaryPie />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <JanuaryPie />
                            </Grid>                       
                        </Grid>
                    </Grid>
                  </Grid>
                  
              </CustomPaper>
          </div>
        </div>
      </ThemeProvider>

    )
};

export default January;
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
          <body className="Body">
              <CustomPaper variant='outlined'>

                  <Grid container>
                    <Grid item xs={6}>

                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <div className='align-left'>Income</div>
                                <div className='align-left'>Expenses</div>
                                <div className='align-left'>Balance</div>
                            </Grid>
                            <Grid item>
                                <MonthRecords month='January' type='income' />
                                <MonthRecords month='January' type='expenses' />
                                <MonthRecords month='January' type='balance' />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <JanuaryPie />
                            </Grid>
                            <Grid item xs={6}>
                                <JanuaryPie />
                            </Grid>                       
                        </Grid>
                    </Grid>
                  </Grid>
                  
              </CustomPaper>
          </body>
        </div>
      </ThemeProvider>

    )
};

export default January;
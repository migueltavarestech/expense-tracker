import React from 'react';

var januaryIncome = 0;
var januaryExpenses = 0;
var februaryIncome = 0;
var februaryExpenses = 0;
var marchIncome = 0;
var marchExpenses = 0;
var aprilIncome = 0;
var aprilExpenses = 0;
var mayIncome = 0;
var mayExpenses = 0;
var juneIncome = 0;
var juneExpenses = 0;
var julyIncome = 0;
var julyExpenses = 0;
var augustIncome = 0;
var augustExpenses = 0;
var septemberIncome = 0;
var septemberExpenses = 0;
var octoberIncome = 0;
var octoberExpenses = 0;
var novemberIncome = 0;
var novemberExpenses = 0;
var decemberIncome = 0;
var decemberExpenses = 0;

export default function MonthRecords(props) {
    const { month, type } = props;

    if (localStorage.getItem('records') == null)
        localStorage.setItem('records', JSON.stringify([]))

    const records = JSON.parse(localStorage.getItem('records'))

    // records.forEach(item => {
    //     if (item.month == '1') {
    //         janIncome += Number(item.income);
    //         janExpenses += Number(item.expense);           
    //     } else if (item.month == '2') {
    //         februaryIncome += Number(item.income);
    //         februaryExpenses += Number(item.expense);
    //     } else if (item.month == '3') {
    //         marchIncome += Number(item.income);
    //         marchExpenses += Number(item.expense);
    //     } else if (item.month == '4') {
    //         aprilIncome += Number(item.income);
    //         aprilExpenses += Number(item.expense);
    //     } else if (item.month == '5') {
    //         mayIncome += Number(item.income);
    //         mayExpenses += Number(item.expense);
    //     } else if (item.month == '6') {
    //         juneIncome += Number(item.income);
    //         juneExpenses += Number(item.expense);
    //     } else if (item.month == '7') {
    //         julyIncome += Number(item.income);
    //         julyExpenses += Number(item.expense);
    //     } else if (item.month == '8') {
    //         augustIncome += Number(item.income);
    //         augustExpenses += Number(item.expense);
    //     } else if (item.month = '9') {
    //         septemberIncome += Number(item.income);
    //         septemberExpenses += Number(item.expense);
    //     } else if (item.month = '10') {
    //         octoberIncome += Number(item.income);
    //         octoberExpenses += Number(item.expense);
    //     } else if (item.month = '11') {
    //         novemberIncome += Number(item.income);
    //         novemberExpenses += Number(item.expense);
    //     } else if (item.month = '12') {
    //         decemberIncome += Number(item.income);
    //         decemberExpenses += Number(item.expense);
    //     }
    // });

    if (type == 'income') {

        records.forEach(item => {
            if (item.month == '1') {
                januaryIncome += Number(item.income);           
            } else if (item.month == '2') {
                februaryIncome += Number(item.income);
            } else if (item.month == '3') {
                marchIncome += Number(item.income);
            } else if (item.month == '4') {
                aprilIncome += Number(item.income);
            } else if (item.month == '5') {
                mayIncome += Number(item.income);
            } else if (item.month == '6') {
                juneIncome += Number(item.income);
            } else if (item.month == '7') {
                julyIncome += Number(item.income);
            } else if (item.month == '8') {
                augustIncome += Number(item.income);
            } else if (item.month = '9') {
                septemberIncome += Number(item.income);
            } else if (item.month = '10') {
                octoberIncome += Number(item.income);
            } else if (item.month = '11') {
                novemberIncome += Number(item.income);
            } else if (item.month = '12') {
                decemberIncome += Number(item.income);
            }
        });

        if (month == 'January') {
            return <span>{januaryIncome}€</span>
        } else if (month == 'February') {
            return <div className='align-right'>{februaryIncome}€</div>
        } else if (month == 'March') {
            return <div className='align-right'>{marchIncome}€</div>
        } else if (month == 'April') {
            return <div className='align-right'>{aprilIncome}€</div>
        } else if (month == 'May') {
            return <div className='align-right'>{mayIncome}€</div>
        } else if (month == 'June') {
            return <div className='align-right'>{juneIncome}€</div>
        } else if (month == 'July') {
            return <div className='align-right'>{julyIncome}€</div>
        } else if (month == 'August') {
            return <div className='align-right'>{augustIncome}€</div>
        } else if (month == 'September') {
            return <div className='align-right'>{septemberIncome}€</div>
        } else if (month == 'October') {
            return <div className='align-right'>{octoberIncome}€</div>
        } else if (month == 'November') {
            return <div className='align-right'>{novemberIncome}€</div>
        } else if (month == 'December') {
            return <div className='align-right'>{decemberIncome}€</div>
        }
    } else if (type == 'expenses') {

        records.forEach(item => {
            if (item.month == '1') {
                januaryExpenses += Number(item.expense);           
            } else if (item.month == '2') {
                februaryExpenses += Number(item.expense);
            } else if (item.month == '3') {
                marchExpenses += Number(item.expense);
            } else if (item.month == '4') {
                aprilExpenses += Number(item.expense);
            } else if (item.month == '5') {
                mayExpenses += Number(item.expense);
            } else if (item.month == '6') {
                juneExpenses += Number(item.expense);
            } else if (item.month == '7') {
                julyExpenses += Number(item.expense);
            } else if (item.month == '8') {
                augustExpenses += Number(item.expense);
            } else if (item.month = '9') {
                septemberExpenses += Number(item.expense);
            } else if (item.month = '10') {
                octoberExpenses += Number(item.expense);
            } else if (item.month = '11') {
                novemberExpenses += Number(item.expense);
            } else if (item.month = '12') {
                decemberExpenses += Number(item.expense);
            }
        });

        if (month == 'January') {
            return <span style={{textAlign: 'right'}}>{januaryExpenses}€</span>
        } else if (month == 'February') {
            return <div className='align-right'>{februaryExpenses}€</div>
        } else if (month == 'March') {
            return <div className='align-right'>{marchExpenses}€</div>
        } else if (month == 'April') {
            return <div className='align-right'>{aprilExpenses}€</div>
        } else if (month == 'May') {
            return <div className='align-right'>{mayExpenses}€</div>
        } else if (month == 'June') {
            return <div className='align-right'>{juneExpenses}€</div>
        } else if (month == 'July') {
            return <div className='align-right'>{julyExpenses}€</div>
        } else if (month == 'August') {
            return <div className='align-right'>{augustExpenses}€</div>
        } else if (month == 'September') {
            return <div className='align-right'>{septemberExpenses}€</div>
        } else if (month == 'October') {
            return <div className='align-right'>{octoberExpenses}€</div>
        } else if (month == 'November') {
            return <div className='align-right'>{novemberExpenses}€</div>
        } else if (month == 'December') {
            return <div className='align-right'>{decemberExpenses}€</div>
        }
    } else if (type == 'balance') {

        var januaryBalance = januaryIncome - januaryExpenses
        var februaryBalance = februaryIncome - februaryExpenses
        var marchBalance = marchIncome - marchExpenses
        var aprilBalance = aprilIncome - aprilExpenses
        var mayBalance = mayIncome - mayExpenses
        var juneBalance = juneIncome - juneExpenses
        var julyBalance = julyIncome - julyExpenses
        var augustBalance = augustIncome - augustExpenses
        var septemberBalance = septemberIncome - septemberExpenses
        var octoberBalance = octoberIncome - octoberExpenses
        var novemberBalance = novemberIncome - novemberExpenses
        var decemberBalance = decemberIncome - decemberExpenses

        if (month == 'January') {
            return <span>{januaryBalance}€</span>
        } else if (month == 'February') {
            return <div className='align-right'>{februaryBalance}€</div>
        } else if (month == 'March') {
            return <div className='align-right'>{marchBalance}€</div>
        } else if (month == 'April') {
            return <div className='align-right'>{aprilBalance}€</div>
        } else if (month == 'May') {
            return <div className='align-right'>{mayBalance}€</div>
        } else if (month == 'June') {
            return <div className='align-right'>{juneBalance}€</div>
        } else if (month == 'July') {
            return <div className='align-right'>{julyBalance}€</div>
        } else if (month == 'August') {
            return <div className='align-right'>{augustBalance}€</div>
        } else if (month == 'September') {
            return <div className='align-right'>{septemberBalance}€</div>
        } else if (month == 'October') {
            return <div className='align-right'>{octoberBalance}€</div>
        } else if (month == 'November') {
            return <div className='align-right'>{novemberBalance}€</div>
        } else if (month == 'December') {
            return <div className='align-right'>{decemberBalance}€</div>
        }
    }
}
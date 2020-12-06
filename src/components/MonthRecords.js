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

    if (type === 'income') {

        records.forEach(item => {
            if (item.month === 'January') {
                januaryIncome += Number(item.income);           
            } else if (item.month === 'February') {
                februaryIncome += Number(item.income);
            } else if (item.month === 'March') {
                marchIncome += Number(item.income);
            } else if (item.month === 'April') {
                aprilIncome += Number(item.income);
            } else if (item.month === 'May') {
                mayIncome += Number(item.income);
            } else if (item.month === 'June') {
                juneIncome += Number(item.income);
            } else if (item.month === 'July') {
                julyIncome += Number(item.income);
            } else if (item.month === 'August') {
                augustIncome += Number(item.income);
            } else if (item.month === 'September') {
                septemberIncome += Number(item.income);
            } else if (item.month === 'October') {
                octoberIncome += Number(item.income);
            } else if (item.month === 'November') {
                novemberIncome += Number(item.income);
            } else if (item.month === 'December') {
                decemberIncome += Number(item.income);
            }
        });

        if (month === 'January') {
            return <span>{januaryIncome}€</span>
        } else if (month === 'February') {
            return <div className='align-right'>{februaryIncome}€</div>
        } else if (month === 'March') {
            return <div className='align-right'>{marchIncome}€</div>
        } else if (month === 'April') {
            return <div className='align-right'>{aprilIncome}€</div>
        } else if (month === 'May') {
            return <div className='align-right'>{mayIncome}€</div>
        } else if (month === 'June') {
            return <div className='align-right'>{juneIncome}€</div>
        } else if (month === 'July') {
            return <div className='align-right'>{julyIncome}€</div>
        } else if (month === 'August') {
            return <div className='align-right'>{augustIncome}€</div>
        } else if (month === 'September') {
            return <div className='align-right'>{septemberIncome}€</div>
        } else if (month === 'October') {
            return <div className='align-right'>{octoberIncome}€</div>
        } else if (month === 'November') {
            return <div className='align-right'>{novemberIncome}€</div>
        } else if (month === 'December') {
            return <div className='align-right'>{decemberIncome}€</div>
        }
    } else if (type === 'expenses') {

        records.forEach(item => {
            if (item.month === 'January') {
                januaryExpenses += Number(item.expense);           
            } else if (item.month === 'February') {
                februaryExpenses += Number(item.expense);
            } else if (item.month === 'March') {
                marchExpenses += Number(item.expense);
            } else if (item.month === 'April') {
                aprilExpenses += Number(item.expense);
            } else if (item.month === 'May') {
                mayExpenses += Number(item.expense);
            } else if (item.month === 'June') {
                juneExpenses += Number(item.expense);
            } else if (item.month === 'July') {
                julyExpenses += Number(item.expense);
            } else if (item.month === 'August') {
                augustExpenses += Number(item.expense);
            } else if (item.month === 'September') {
                septemberExpenses += Number(item.expense);
            } else if (item.month === 'October') {
                octoberExpenses += Number(item.expense);
            } else if (item.month === 'November') {
                novemberExpenses += Number(item.expense);
            } else if (item.month === 'December') {
                decemberExpenses += Number(item.expense);
            }
        });

        if (month === 'January') {
            return <span style={{textAlign: 'right'}}>{januaryExpenses}€</span>
        } else if (month === 'February') {
            return <div className='align-right'>{februaryExpenses}€</div>
        } else if (month === 'March') {
            return <div className='align-right'>{marchExpenses}€</div>
        } else if (month === 'April') {
            return <div className='align-right'>{aprilExpenses}€</div>
        } else if (month === 'May') {
            return <div className='align-right'>{mayExpenses}€</div>
        } else if (month === 'June') {
            return <div className='align-right'>{juneExpenses}€</div>
        } else if (month === 'July') {
            return <div className='align-right'>{julyExpenses}€</div>
        } else if (month === 'August') {
            return <div className='align-right'>{augustExpenses}€</div>
        } else if (month === 'September') {
            return <div className='align-right'>{septemberExpenses}€</div>
        } else if (month === 'October') {
            return <div className='align-right'>{octoberExpenses}€</div>
        } else if (month === 'November') {
            return <div className='align-right'>{novemberExpenses}€</div>
        } else if (month === 'December') {
            return <div className='align-right'>{decemberExpenses}€</div>
        }
    } else if (type === 'balance') {

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

        if (month === 'January') {
            return <span>{januaryBalance}€</span>
        } else if (month === 'February') {
            return <div className='align-right'>{februaryBalance}€</div>
        } else if (month === 'March') {
            return <div className='align-right'>{marchBalance}€</div>
        } else if (month === 'April') {
            return <div className='align-right'>{aprilBalance}€</div>
        } else if (month === 'May') {
            return <div className='align-right'>{mayBalance}€</div>
        } else if (month === 'June') {
            return <div className='align-right'>{juneBalance}€</div>
        } else if (month === 'July') {
            return <div className='align-right'>{julyBalance}€</div>
        } else if (month === 'August') {
            return <div className='align-right'>{augustBalance}€</div>
        } else if (month === 'September') {
            return <div className='align-right'>{septemberBalance}€</div>
        } else if (month === 'October') {
            return <div className='align-right'>{octoberBalance}€</div>
        } else if (month === 'November') {
            return <div className='align-right'>{novemberBalance}€</div>
        } else if (month === 'December') {
            return <div className='align-right'>{decemberBalance}€</div>
        }
    }
}
import React from 'react';

export default function TotalBalance() {
    if (localStorage.getItem('records') == null)
        localStorage.setItem('records', JSON.stringify([]))

    const records = JSON.parse(localStorage.getItem('records'))

    var totalExpenses = 0;
    var totalIncome = 0;
    records.forEach(item => {
        totalIncome += Number(item.income);
        totalExpenses += Number(item.expense);
    });
    
    const totalBalance = totalIncome - totalExpenses

    return (
        <div className='align-right'>{totalBalance}€</div>
    )
}
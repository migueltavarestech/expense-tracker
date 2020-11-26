import React from 'react';

export default function TotalExpenses() {
    if (localStorage.getItem('records') == null)
        localStorage.setItem('records', JSON.stringify([]))

    const records = JSON.parse(localStorage.getItem('records'))

    var totalExpenses = 0;
    records.forEach(item => {
        totalExpenses += Number(item.expense);
    });
    
    console.log(totalExpenses);

    return (
        <div className='align-right'>{totalExpenses}€</div>
    )
}
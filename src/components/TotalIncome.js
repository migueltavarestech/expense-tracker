import React from 'react';

export default function TotalIncome() {
    if (localStorage.getItem('records') == null)
        localStorage.setItem('records', JSON.stringify([]))

    const records = JSON.parse(localStorage.getItem('records'))

    var totalIncome = 0;
    records.forEach(item => {
        totalIncome += Number(item.income);
    });
    
    console.log(totalIncome);

    return (
        <div className='align-right'>{totalIncome}€</div>
    )
}
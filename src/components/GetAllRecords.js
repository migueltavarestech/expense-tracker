import React from 'react';

export default function GetAllRecords() {
    if (localStorage.getItem('records') == null)
        localStorage.setItem('records', JSON.stringify([]))

    const records = JSON.parse(localStorage.getItem('records'))

    var total = 0;
    records.forEach(item => {
        total += Number(item.amount);
    });
    
    console.log(total);

    return (
        <div className='align-right'>{total}€</div>
    )
}
import React from 'react';
import MUIDataTable from "mui-datatables";

if (localStorage.getItem('records') == null)
        localStorage.setItem('records', JSON.stringify([]))

const records = JSON.parse(localStorage.getItem('records'))

for ( let i=0; i<records.length; i++) {
    records[i]['date'] = records[i]['date'].toString().substring(0, 10);
}

const columns = [
    {name: 'income', label: 'Income'},
    {name: 'expense', label: 'Expense'},
    {name: 'category', label: 'Category'},
    {name: 'date', label: 'Date'},
    {name: 'month', label: 'Month'},
    {name: 'notes', label: 'Notes'},
];
const options = {
  filterType: 'checkbox',
};

export function JanuaryTable() {

    const data = records.filter(record => record.month === 'January');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function FebruaryTable() {

    const data = records.filter(record => record.month === 'February');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

import React from 'react';
import MUIDataTable from "mui-datatables";

if (localStorage.getItem('records') == null)
        localStorage.setItem('records', JSON.stringify([]))

const records = JSON.parse(localStorage.getItem('records'))
const data = records
const columns = [
    {name: 'income', label: 'Income'},
    {name: 'expense', label: 'Expense'},
    {name: 'description', label: 'Description'},
    {name: 'month', label: 'Month'},
    {name: 'category', label: 'Category'}
];
const options = {
  filterType: 'checkbox',
};

export default function DataTable() {
    console.log(records);

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}
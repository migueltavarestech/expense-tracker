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

export function MarchTable() {

    const data = records.filter(record => record.month === 'March');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function AprilTable() {

    const data = records.filter(record => record.month === 'April');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function MayTable() {

    const data = records.filter(record => record.month === 'May');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function JuneTable() {

    const data = records.filter(record => record.month === 'June');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function JulyTable() {

    const data = records.filter(record => record.month === 'July');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function AugustTable() {

    const data = records.filter(record => record.month === 'August');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function SeptemberTable() {

    const data = records.filter(record => record.month === 'September');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function OctoberTable() {

    const data = records.filter(record => record.month === 'October');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function NovemberTable() {

    const data = records.filter(record => record.month === 'November');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}

export function DecemberTable() {

    const data = records.filter(record => record.month === 'December');

    return (
        <MUIDataTable 
            title={"Breakdown Table"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    )
}
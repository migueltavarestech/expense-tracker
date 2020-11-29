import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

if (localStorage.getItem('records') == null)
    localStorage.setItem('records', JSON.stringify([]))

const records = JSON.parse(localStorage.getItem('records'))

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
var semptemberExpenses = 0;
var octoberIncome = 0;
var octoberExpenses = 0;
var novemberIncome = 0;
var novemberExpenses = 0;
var decemberIncome = 0;
var decemberExpenses = 0;

export function January() {
    records.forEach(item => {
        if (item.month == '1') {
            januaryIncome += Number(item.income);
            januaryExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [januaryIncome, januaryExpenses],
            backgroundColor: [
                "#F7464A",
                "#46BFBD"
            ],
            hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1"
            ]
            }
        ]
        }
    }

    return (
        <MDBContainer>
            <div className="mt-5">January</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function February() {
    records.forEach(item => {
        if (item.month == '2') {
            februaryIncome += Number(item.income);
            februaryExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [februaryIncome, februaryExpenses],
            backgroundColor: [
                "#F7464A",
                "#46BFBD"
            ],
            hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1"
            ]
            }
        ]
        }
    }

    return (
        <MDBContainer>
            <div className="mt-5">February</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};
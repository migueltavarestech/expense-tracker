import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

if (localStorage.getItem('records') == null)
    localStorage.setItem('records', JSON.stringify([]))

const records = JSON.parse(localStorage.getItem('records'))

var totalExpenses = 0;
var totalIncome = 0;

const monthSelected = ['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function Pies(props) {
    const { month } = props;
    const showMonth = monthSelected[month]

    records.forEach(item => {
        if (item.month == month) {
            totalIncome += Number(item.income);
            totalExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [totalIncome, totalExpenses],
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
            <div className="mt-5">{showMonth}</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};
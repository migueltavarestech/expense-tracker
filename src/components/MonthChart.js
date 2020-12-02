import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

if (localStorage.getItem('records') == null)
    localStorage.setItem('records', JSON.stringify([]))

const records = JSON.parse(localStorage.getItem('records'))

var januaryRent = 0;
var januaryBills = 0;
var januaryGroceries = 0;
var januaryHolidays = 0;
var januaryClothes = 0;
var januaryEntertainment = 0;
var januaryCarCosts = 0;
var januaryOthers = 0;

export function JanuaryCategories() {
    records.forEach(item => {
        if (item.category == 'Rent') {
            januaryRent += Number(item.expense);
        } else if (item.category == 'Bills') {
            januaryBills += Number(item.expense);
        } else if (item.category == 'Groceries') {
            januaryGroceries += Number(item.expense);
        } else if (item.category == 'Holidays') {
            januaryHolidays += Number(item.expense);
        } else if (item.category == 'Clothes') {
            januaryClothes += Number(item.expense);
        } else if (item.category == 'Entertainment') {
            januaryEntertainment += Number(item.expense);
        } else if (item.category == 'Car Costs') {
            januaryCarCosts += Number(item.expense);
        } else if (item.category == 'Others') {
            januaryOthers += Number(item.expense);
        }
    });

    console.log(januaryRent);
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [januaryRent, januaryBills, januaryGroceries, januaryHolidays, januaryClothes, januaryEntertainment, januaryCarCosts, januaryOthers],
            backgroundColor: [
                "#003f5c",
                "#2f4b7c",
                "#665191",
                "#a05195",
                "#d45087",
                "#f95d6a",
                "#ff7c43",
                "#ffa600"
            ]
            }
        ]
        }
    }

    return (
        <MDBContainer >
            <Pie data={data.dataPie} options={{ responsive: true }}/>
        </MDBContainer>
    )
};
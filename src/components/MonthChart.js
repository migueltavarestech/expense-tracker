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
        if ((item.category == 'Rent') && (item.month == '1')) {
            januaryRent += Number(item.expense);
        } else if ((item.category == 'Bills') && (item.month == '1')) {
            januaryBills += Number(item.expense);
        } else if ((item.category == 'Groceries') && (item.month == '1')) {
            januaryGroceries += Number(item.expense);
        } else if ((item.category == 'Holidays') && (item.month == '1')) {
            januaryHolidays += Number(item.expense);
        } else if ((item.category == 'Clothes') && (item.month == '1')) {
            januaryClothes += Number(item.expense);
        } else if ((item.category == 'Entertainment') && (item.month == '1')) {
            januaryEntertainment += Number(item.expense);
        } else if ((item.category == 'Car Costs') && (item.month == '1')) {
            januaryCarCosts += Number(item.expense);
        } else if ((item.category == 'Others') && (item.month == '1')) {
            januaryOthers += Number(item.expense);
        }
    });
    
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
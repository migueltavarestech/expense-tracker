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

var februaryRent = 0;
var februaryBills = 0;
var februaryGroceries = 0;
var februaryHolidays = 0;
var februaryClothes = 0;
var februaryEntertainment = 0;
var februaryCarCosts = 0;
var februaryOthers = 0;

export function JanuaryCategories() {
    records.forEach(item => {
        if ((item.category == 'Rent') && (item.month == 'January')) {
            januaryRent += Number(item.expense);
        } else if ((item.category == 'Bills') && (item.month == 'January')) {
            januaryBills += Number(item.expense);
        } else if ((item.category == 'Groceries') && (item.month == 'January')) {
            januaryGroceries += Number(item.expense);
        } else if ((item.category == 'Holidays') && (item.month == 'January')) {
            januaryHolidays += Number(item.expense);
        } else if ((item.category == 'Clothes') && (item.month == 'January')) {
            januaryClothes += Number(item.expense);
        } else if ((item.category == 'Entertainment') && (item.month == 'January')) {
            januaryEntertainment += Number(item.expense);
        } else if ((item.category == 'Car Costs') && (item.month == 'January')) {
            januaryCarCosts += Number(item.expense);
        } else if ((item.category == 'Others') && (item.month == 'January')) {
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

export function FebruaryCategories() {
    records.forEach(item => {
        if ((item.category == 'Rent') && (item.month == 'February')) {
            februaryRent += Number(item.expense);
        } else if ((item.category == 'Bills') && (item.month == 'February')) {
            februaryBills += Number(item.expense);
        } else if ((item.category == 'Groceries') && (item.month == 'February')) {
            februaryGroceries += Number(item.expense);
        } else if ((item.category == 'Holidays') && (item.month == 'February')) {
            februaryHolidays += Number(item.expense);
        } else if ((item.category == 'Clothes') && (item.month == 'February')) {
            februaryClothes += Number(item.expense);
        } else if ((item.category == 'Entertainment') && (item.month == 'February')) {
            februaryEntertainment += Number(item.expense);
        } else if ((item.category == 'Car Costs') && (item.month == 'February')) {
            februaryCarCosts += Number(item.expense);
        } else if ((item.category == 'Others') && (item.month == 'February')) {
            februaryOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [februaryRent, februaryBills, februaryGroceries, februaryHolidays, februaryClothes, februaryEntertainment, februaryCarCosts, februaryOthers],
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
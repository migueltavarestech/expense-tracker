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

var marchRent = 0;
var marchBills = 0;
var marchGroceries = 0;
var marchHolidays = 0;
var marchClothes = 0;
var marchEntertainment = 0;
var marchCarCosts = 0;
var marchOthers = 0;

var aprilRent = 0;
var aprilBills = 0;
var aprilGroceries = 0;
var aprilHolidays = 0;
var aprilClothes = 0;
var aprilEntertainment = 0;
var aprilCarCosts = 0;
var aprilOthers = 0;

var mayRent = 0;
var mayBills = 0;
var mayGroceries = 0;
var mayHolidays = 0;
var mayClothes = 0;
var mayEntertainment = 0;
var mayCarCosts = 0;
var mayOthers = 0;

var juneRent = 0;
var juneBills = 0;
var juneGroceries = 0;
var juneHolidays = 0;
var juneClothes = 0;
var juneEntertainment = 0;
var juneCarCosts = 0;
var juneOthers = 0;

var julyRent = 0;
var julyBills = 0;
var julyGroceries = 0;
var julyHolidays = 0;
var julyClothes = 0;
var julyEntertainment = 0;
var julyCarCosts = 0;
var julyOthers = 0;

var augustRent = 0;
var augustBills = 0;
var augustGroceries = 0;
var augustHolidays = 0;
var augustClothes = 0;
var augustEntertainment = 0;
var augustCarCosts = 0;
var augustOthers = 0;

var septemberRent = 0;
var septemberBills = 0;
var septemberGroceries = 0;
var septemberHolidays = 0;
var septemberClothes = 0;
var septemberEntertainment = 0;
var septemberCarCosts = 0;
var septemberOthers = 0;

var octoberRent = 0;
var octoberBills = 0;
var octoberGroceries = 0;
var octoberHolidays = 0;
var octoberClothes = 0;
var octoberEntertainment = 0;
var octoberCarCosts = 0;
var octoberOthers = 0;

var novemberRent = 0;
var novemberBills = 0;
var novemberGroceries = 0;
var novemberHolidays = 0;
var novemberClothes = 0;
var novemberEntertainment = 0;
var novemberCarCosts = 0;
var novemberOthers = 0;

var decemberRent = 0;
var decemberBills = 0;
var decemberGroceries = 0;
var decemberHolidays = 0;
var decemberClothes = 0;
var decemberEntertainment = 0;
var decemberCarCosts = 0;
var decemberOthers = 0;

export function JanuaryCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'January')) {
            januaryRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'January')) {
            januaryBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'January')) {
            januaryGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'January')) {
            januaryHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'January')) {
            januaryClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'January')) {
            januaryEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'January')) {
            januaryCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'January')) {
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
        if ((item.category === 'Rent') && (item.month === 'February')) {
            februaryRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'February')) {
            februaryBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'February')) {
            februaryGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'February')) {
            februaryHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'February')) {
            februaryClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'February')) {
            februaryEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'February')) {
            februaryCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'February')) {
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

export function MarchCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'March')) {
            marchRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'March')) {
            marchBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'March')) {
            marchGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'March')) {
            marchHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'March')) {
            marchClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'March')) {
            marchEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'March')) {
            marchCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'March')) {
            marchOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [marchRent, marchBills, marchGroceries, marchHolidays, marchClothes, 
                    marchEntertainment, marchCarCosts, marchOthers],
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

export function AprilCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'April')) {
            aprilRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'April')) {
            aprilBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'April')) {
            aprilGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'April')) {
            aprilHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'April')) {
            aprilClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'April')) {
            aprilEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'April')) {
            aprilCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'April')) {
            aprilOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [aprilRent, aprilBills, aprilGroceries, aprilHolidays, aprilClothes, 
                    aprilEntertainment, aprilCarCosts, aprilOthers],
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

export function MayCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'May')) {
            mayRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'May')) {
            mayBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'May')) {
            mayGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'May')) {
            mayHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'May')) {
            mayClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'May')) {
            mayEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'May')) {
            mayCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'May')) {
            mayOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [mayRent, mayBills, mayGroceries, mayHolidays, mayClothes, 
                    mayEntertainment, mayCarCosts, mayOthers],
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

export function JuneCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'June')) {
            juneRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'June')) {
            juneBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'June')) {
            juneGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'June')) {
            juneHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'June')) {
            juneClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'June')) {
            juneEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'June')) {
            juneCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'June')) {
            juneOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [juneRent, juneBills, juneGroceries, juneHolidays, juneClothes, 
                    juneEntertainment, juneCarCosts, juneOthers],
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

export function JulyCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'July')) {
            julyRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'July')) {
            julyBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'July')) {
            julyGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'July')) {
            julyHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'July')) {
            julyClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'July')) {
            julyEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'July')) {
            julyCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'July')) {
            julyOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [julyRent, julyBills, julyGroceries, julyHolidays, julyClothes, 
                    julyEntertainment, julyCarCosts, julyOthers],
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

export function AugustCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'August')) {
            augustRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'August')) {
            augustBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'August')) {
            augustGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'August')) {
            augustHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'August')) {
            augustClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'August')) {
            augustEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'August')) {
            augustCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'August')) {
            augustOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [augustRent, augustBills, augustGroceries, augustHolidays, augustClothes, 
                    augustEntertainment, augustCarCosts, augustOthers],
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

export function SeptemberCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'September')) {
            septemberRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'September')) {
            septemberBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'September')) {
            septemberGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'September')) {
            septemberHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'September')) {
            septemberClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'September')) {
            septemberEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'September')) {
            septemberCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'September')) {
            septemberOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [septemberRent, septemberBills, septemberGroceries, septemberHolidays, septemberClothes, 
                    septemberEntertainment, septemberCarCosts, septemberOthers],
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

export function OctoberCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'October')) {
            octoberRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'October')) {
            octoberBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'October')) {
            octoberGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'October')) {
            octoberHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'October')) {
            octoberClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'October')) {
            octoberEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'October')) {
            octoberCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'October')) {
            octoberOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [octoberRent, octoberBills, octoberGroceries, octoberHolidays, octoberClothes, 
                    octoberEntertainment, octoberCarCosts, octoberOthers],
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

export function NovemberCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'November')) {
            novemberRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'November')) {
            novemberBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'November')) {
            novemberGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'November')) {
            novemberHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'November')) {
            novemberClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'November')) {
            novemberEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'November')) {
            novemberCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'November')) {
            novemberOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [novemberRent, novemberBills, novemberGroceries, novemberHolidays, novemberClothes, 
                    novemberEntertainment, novemberCarCosts, novemberOthers],
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

export function DecemberCategories() {
    records.forEach(item => {
        if ((item.category === 'Rent') && (item.month === 'December')) {
            decemberRent += Number(item.expense);
        } else if ((item.category === 'Bills') && (item.month === 'December')) {
            decemberBills += Number(item.expense);
        } else if ((item.category === 'Groceries') && (item.month === 'December')) {
            decemberGroceries += Number(item.expense);
        } else if ((item.category === 'Holidays') && (item.month === 'December')) {
            decemberHolidays += Number(item.expense);
        } else if ((item.category === 'Clothes') && (item.month === 'December')) {
            decemberClothes += Number(item.expense);
        } else if ((item.category === 'Entertainment') && (item.month === 'December')) {
            decemberEntertainment += Number(item.expense);
        } else if ((item.category === 'Car Costs') && (item.month === 'December')) {
            decemberCarCosts += Number(item.expense);
        } else if ((item.category === 'Others') && (item.month === 'December')) {
            decemberOthers += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Rent', 'Bills', 'Groceries', 'Holidays', 'Clothes', 'Entertainment', 'Car Costs', 'Others'],
        datasets: [
            {
            data: [decemberRent, decemberBills, decemberGroceries, decemberHolidays, decemberClothes, 
                    decemberEntertainment, decemberCarCosts, decemberOthers],
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
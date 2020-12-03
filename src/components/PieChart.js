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
var septemberExpenses = 0;
var octoberIncome = 0;
var octoberExpenses = 0;
var novemberIncome = 0;
var novemberExpenses = 0;
var decemberIncome = 0;
var decemberExpenses = 0;

export function January() {
    records.forEach(item => {
        if (item.month == 'January') {
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
        if (item.month == 'February') {
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

export function March() {
    records.forEach(item => {
        if (item.month == 'March') {
            marchIncome += Number(item.income);
            marchExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [marchIncome, marchExpenses],
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
            <div className="mt-5">March</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function April() {
    records.forEach(item => {
        if (item.month == 'April') {
            aprilIncome += Number(item.income);
            aprilExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [aprilIncome, aprilExpenses],
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
            <div className="mt-5">April</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function May() {
    records.forEach(item => {
        if (item.month == 'May') {
            mayIncome += Number(item.income);
            mayExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [mayIncome, mayExpenses],
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
            <div className="mt-5">May</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function June() {
    records.forEach(item => {
        if (item.month == 'June') {
            juneIncome += Number(item.income);
            juneExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [juneIncome, juneExpenses],
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
            <div className="mt-5">June</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function July() {
    records.forEach(item => {
        if (item.month == 'July') {
            julyIncome += Number(item.income);
            julyExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [julyIncome, julyExpenses],
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
            <div className="mt-5">July</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function August() {
    records.forEach(item => {
        if (item.month == 'August') {
            augustIncome += Number(item.income);
            augustExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [augustIncome, augustExpenses],
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
            <div className="mt-5">August</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function September() {
    records.forEach(item => {
        if (item.month == 'September') {
            septemberIncome += Number(item.income);
            septemberExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [septemberIncome, septemberExpenses],
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
            <div className="mt-5">September</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function October() {
    records.forEach(item => {
        if (item.month == 'October') {
            octoberIncome += Number(item.income);
            octoberExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [octoberIncome, octoberExpenses],
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
            <div className="mt-5">October</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function November() {
    records.forEach(item => {
        if (item.month == 'November') {
            novemberIncome += Number(item.income);
            novemberExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [novemberIncome, novemberExpenses],
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
            <div className="mt-5">November</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};

export function December() {
    records.forEach(item => {
        if (item.month == 'December') {
            decemberIncome += Number(item.income);
            decemberExpenses += Number(item.expense);
        }
    });
    
    const data = {
        dataPie: {
        labels: ['Income', 'Expense'],
        datasets: [
            {
            data: [decemberIncome, decemberExpenses],
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
            <div className="mt-5">December</div>
            <Pie data={data.dataPie} options={{ responsive: true }} />
        </MDBContainer>
    )
};
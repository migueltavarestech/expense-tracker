import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls';



const months = [
    {id: 'January', title: 'January'},
    {id: 'February', title: 'February'},
    {id: 'March', title: 'March'},
    {id: 'April', title: 'April'},
    {id: 'May', title: 'May'},
    {id: 'June', title: 'June'},
    {id: 'July', title: 'July'},
    {id: 'August', title: 'August'},
    {id: 'September', title: 'September'},
    {id: 'October', title: 'October'},
    {id: 'November', title: 'November'},
    {id: 'December', title: 'December'}
];

const incomeCategories = [
    {id: 'Rent', title: 'Rent'}, 
    {id: 'Bills', title: 'Bills'}, 
    {id: 'Groceries', title: 'Groceries'}, 
    {id: 'Holidays', title: 'Holidays'}, 
    {id: 'Clothes', title: 'Clothes'}, 
    {id: 'Entertainment', title: 'Entertainment'}, 
    {id: 'Car Costs', title: 'Car Costs'}, 
    {id: 'Others', title: 'Others'}
];

const expensesCategories = [
    {id: 'Salary', title: 'Salary'}, 
    {id: 'Bonus', title: 'Bonus'}, 
    {id: 'Loan', title: 'Loan'}, 
    {id: 'Others', title: 'Others'}
];

const KEYS = {
    records: 'records',
    recordId: 'recordId'
};



const insertRecord = (data) => {
    let records = getAllRecords();
    data['id'] = generateRecordId();
    records.push(data);
    localStorage.setItem(KEYS.records, JSON.stringify(records));
    window.addEventListener('storage',e => console.log(e))
};

const generateRecordId = () => {
    if (localStorage.getItem(KEYS.recordId) == null)
        localStorage.setItem(KEYS.recordId, '0')
    var id = parseInt(localStorage.getItem(KEYS.recordId))
    localStorage.setItem(KEYS.recordId, (++id).toString())
};

const getAllRecords = () => {
    if (localStorage.getItem(KEYS.records) == null)
        localStorage.setItem(KEYS.records, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.records));
};

export default function RecordForm(props) {

    const { type, month } = props;
    const initialFValues = {
        id: 0,
        income: '',
        expense: '',
        notes: '',
        month: month,
        category: '',
        date: new Date()
    };
    
    
    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if (type === 'income') {
            if('income' in fieldValues)
                temp.income = fieldValues.income?'':'This field is required.'
            // if('month' in fieldValues)
            //     temp.month = fieldValues.month?'':'This field is required.'
        } else {
            if('expense' in fieldValues)
                temp.expense = fieldValues.expense?'':'This field is required.'
            // if('month' in fieldValues)
            //     temp.month = fieldValues.month?'':'This field is required.'        
        }
        
        temp.category = fieldValues.category?'':'This field is required.'
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == '')
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    // const [inputRecord, setInputRecord] = React.useState([]);

    const handleSubmit = e => {
        // const newInput = values;
        e.preventDefault()
        if (validate()){
            insertRecord(values);
            resetForm();
        }
        window.location.reload(false);
        // console.log(newInput);
        // setInputRecord(inputRecord => [...inputRecord, newInput]);
    };

    if (type === 'income') {

        return (
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <Controls.Input
                        name = 'income'
                        label = 'Income Amount €'
                        value = {values.income}
                        onChange = {handleInputChange}
                        error={errors.income}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Select 
                        name='category'
                        label='Category'
                        value={values.category}
                        onChange={handleInputChange}
                        options={expensesCategories}
                        error={errors.category}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.DatePicker 
                        name='date'
                        label='Date'
                        value={values.date}
                        onChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Select 
                        name='month'
                        label='Month'
                        value={values.month || month}
                        onChange={handleInputChange}
                        options={months}
                        error={errors.month}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input 
                        name = 'notes'
                        label = 'Notes'
                        value={values.notes}
                        onChange={handleInputChange}/>
                    </Grid>
                    <Grid container justify='flex-end' style={{marginTop: "15px"}}>
                        <div>
                            <Controls.CustomButton type='submit' text='SUBMIT' />
                            <Controls.CustomButton type='reset' text='RESET' color='default' onClick={resetForm}/>
                        </div>
                    </Grid>
                </Grid>
            </Form>
        )
    } else if (type == 'expense') {
        return (
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <Controls.Input
                        name = 'expense'
                        label = 'Expense Amount €'
                        value = {values.expense}
                        onChange = {handleInputChange}
                        error={errors.expense}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Select 
                        name='category'
                        label='Category'
                        value={values.category}
                        onChange={handleInputChange}
                        options={incomeCategories}
                        error={errors.category}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.DatePicker 
                        name='date'
                        label='Date'
                        value={values.date}
                        onChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Select 
                        name='month'
                        label='Month'
                        value={values.month || month}
                        onChange={handleInputChange}
                        options={months}
                        error={errors.month}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input 
                        name = 'notes'
                        label = 'Notes'
                        value={values.notes}
                        onChange={handleInputChange}/>
                    </Grid>
                    <Grid container justify='flex-end' style={{marginTop: "15px"}}>
                        <div>
                            <Controls.CustomButton type='submit' text='SUBMIT' />
                            <Controls.CustomButton type='reset' text='RESET' color='default' onClick={resetForm}/>
                        </div>
                    </Grid>
                </Grid>
            </Form>
        )   
    }

}
import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls';

const typeItems = [
    {id:'income',title:'Income'},
    {id:'expense',title:'Expense'}
]

const initialFValues = {
    id: 0,
    amount: '',
    description: '',
    month: '',
    type: '',
    date: new Date()
}

const months = [
    {id: '1', title: 'January'},
    {id: '2', title: 'February'},
    {id: '3', title: 'March'},
    {id: '4', title: 'April'},
    {id: '5', title: 'May'},
    {id: '6', title: 'June'},
    {id: '7', title: 'July'},
    {id: '8', title: 'August'},
    {id: '9', title: 'September'},
    {id: '10', title: 'October'},
    {id: '11', title: 'November'},
    {id: '12', title: 'December'}
]

export default function ExpensesForm() {

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('amount' in fieldValues)
            temp.amount = fieldValues.amount?'':'This field is required.'
        if('month' in fieldValues)
            temp.month = fieldValues.month?'':'This field is required.'
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

    const handleSubmit = e => {
        e.preventDefault()
        if (validate())
            window.alert('test')
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                    name = 'amount'
                    label = 'Amount €'
                    value = {values.amount}
                    onChange = {handleInputChange}
                    error={errors.amount}/>
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input 
                    name = 'description'
                    label = 'Description'
                    value={values.description}
                    onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                    <Controls.Select 
                    name='month'
                    label='Month'
                    value={values.month}
                    onChange={handleInputChange}
                    options={months}
                    error={errors.month}/>
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup 
                    name='type'
                    label='Type'
                    value={values.type}
                    onChange={handleInputChange}
                    items={typeItems}/>
                </Grid>
                <Grid item xs={6}>
                    <Controls.DatePicker 
                    name='date'
                    label='Date'
                    value={values.date}
                    onChange={handleInputChange}/>
                </Grid>
                <Grid container justify='flex-end'>
                    <div>
                        <Controls.CustomButton type='submit' text='SUBMIT' />
                        <Controls.CustomButton type='reset' text='RESET' color='default' onClick={resetForm}/>
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
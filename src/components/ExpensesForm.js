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
    type: ''
}

export default function ExpensesForm() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                    name = 'Amount'
                    label = 'Amount €'
                    value = {values.amount}
                    onChange = {handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input 
                    name = 'description'
                    label = 'Description'
                    value={values.description}
                    onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={12}>
                    <Controls.RadioGroup 
                    name='type'
                    label='Types'
                    value={values.type}
                    onChange={handleInputChange}
                    items={typeItems}/>
                </Grid>
            </Grid>
        </Form>
    )
}
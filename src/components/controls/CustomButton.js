import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        'margin-left': '10px'
    },
    label: {
        textTransform: 'none'
    }
}))

export default function CustomButton(props) {
    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();
    return (
        <Button
        variant = {variant || 'contained'}
        size = {size || 'large'}
        color = {color || 'primary'}
        onClick = {onClick}
        {...other}
        classes={{root:classes.root, label:classes.label}}>
            {text}
        </Button>
    )
}
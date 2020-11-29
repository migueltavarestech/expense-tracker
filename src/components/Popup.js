import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    dialogTitle:{
        paddingRight: '0px'
    }
}));

export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();
    return (
        <Dialog open={openPopup}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Button 
                    variant='outlined'
                    color='secondary'
                    onClick={() => {setOpenPopup(false)}}
                    style={{ marginRight: '25px' }}
                    >X</Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    );
};
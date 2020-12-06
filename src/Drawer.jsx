import React, { useState } from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemText  } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'

const Drawer = props => {

    const { history } = props;

    const[open, setOpen] = useState(false);
    const handleDrawer = () => {
        setOpen(true)
    };

    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'January',
            onClick: () => history.push('/January')
        },
        {
            text: 'February',
            onClick: () => history.push("/February")
        },
        {
            text: 'March',
            onClick: () => history.push("/March")
        },
        {
            text: 'April',
            onClick: () => history.push("/April")
        },
        {
            text: 'May',
            onClick: () => history.push("/May")
        },
        {
            text: 'June',
            onClick: () => history.push("/June")
        },
        {
            text: 'July',
            onClick: () => history.push("/July")
        },
        {
            text: 'August',
            onClick: () => history.push("/August")
        },
        {
            text: 'September',
            onClick: () => history.push("/September")
        },
        {
            text: 'October',
            onClick: () => history.push("/October")
        },
        {
            text: 'November',
            onClick: () => history.push("/November")
        },
        {
            text: 'December',
            onClick: () => history.push("/December")
        }
    ];

    return (
        <React.Fragment>
            <div className='App'>
                <AppBar color='primary'>
                    <ToolBar>
                        <IconButton onClick={handleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6'>
                            <a onClick={() => history.push('/')}>Expenses Tracker</a>
                        </Typography>
                    </ToolBar>
                </AppBar>
            </div>

        
            <MUIDrawer anchor='left' open={open} onClose={() => setOpen(false)}>
                <List>
                    {itemsList.map((item, index) => {
                        const {text, onClick} = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </MUIDrawer>
        </React.Fragment>
    );
};

export default withRouter(Drawer);

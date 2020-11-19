import React, { useState } from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText  } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

const Drawer = () => {

    const[open, setOpen] = useState(false);
    const handleDrawer = () => {
        setOpen(true)
    };

    const itemsList = [
        {
            text: 'Home',
            onClick: () => window.location.href = "./"
        },
        {
            text: 'January',
            onClick: () => window.location.href = "./January"
        },
        {
            text: 'February',
            onClick: () => window.location.href = "./February"
        },
        {
            text: 'March',
            onClick: () => window.location.href = "./March"
        }
    ];

    return (
        <React.Fragment>
            <AppBar color='primary'>
                <ToolBar>
                    <IconButton onClick={handleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6'>
                        Expenses Tracker
                    </Typography>
                </ToolBar>
            </AppBar>

        
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

export default Drawer;

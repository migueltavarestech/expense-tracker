import React from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText  } from '@material-ui/core';

const Drawer = () => {
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

    const anchor = false;

    return (
        <React.Fragment>
            <MUIDrawer>
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

import React from 'react';
import { ButtonGroup } from '@material-ui/core';
import Popup from './components/Popup';
import RecordForm from './components/RecordForm';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


export default function AddButtons() {

    const [openIncomePopup, setIncomePopup] = React.useState(false);
    const [openExpensesPopup, setExpensesPopup] = React.useState(false);

    return (
        <ButtonGroup variant='contained' color='primary'>
        <Popup 
          openPopup={openIncomePopup} 
          setOpenPopup={setIncomePopup}
          title = 'Add Income'>
              <RecordForm type='income' />
        </Popup>
        <Button onClick={() => setIncomePopup(true)} startIcon={<AddIcon />}>Add Income</Button>
        <Popup 
          openPopup={openExpensesPopup} 
          setOpenPopup={setExpensesPopup}
          title = 'Add Expense'>
              <RecordForm type='expense' />
        </Popup>
        <Button onClick={() => setExpensesPopup(true)} startIcon={<RemoveIcon />}>Add Expense</Button>
      </ButtonGroup>
    );
};
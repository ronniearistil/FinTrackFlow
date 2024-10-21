import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Dialog, TextField, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useProjects } from './ProjectContext';

const ExpenseCard = ({ expense }) => {
  const { editExpense, archiveExpense } = useProjects();
  const [anchorEl, setAnchorEl] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [updatedExpense, setUpdatedExpense] = useState(expense);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleEditOpen = () => {
    setEditModalOpen(true);
    handleMenuClose();
  };

  const handleEditChange = (e) => {
    setUpdatedExpense({ ...updatedExpense, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    editExpense(updatedExpense);
    setEditModalOpen(false);
  };

  const handleArchive = () => {
    archiveExpense(expense.id);
    handleMenuClose();
  };

  return (
    <div className="expense-card">
      <h3>{expense.name}</h3>
      <p>Amount: ${expense.amount}</p>
      <p>Project ID: {expense.projectId}</p>

      <IconButton aria-label="more" onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={handleEditOpen}>Edit</MenuItem>
        <MenuItem onClick={handleArchive}>Archive</MenuItem>
      </Menu>

      <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <TextField
          label="Expense Name"
          name="name"
          value={updatedExpense.name}
          onChange={handleEditChange}
          fullWidth
        />
        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={updatedExpense.amount}
          onChange={handleEditChange}
          fullWidth
        />
        <Button onClick={handleEditSave} variant="contained" color="primary">
          Save
        </Button>
      </Dialog>
    </div>
  );
};

export default ExpenseCard;





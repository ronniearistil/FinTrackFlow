import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpenseCard = ({ expense, onEdit, onArchive }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <div className="expense-card">
      <h3>{expense.name}</h3>
      <p>Amount: ${expense.amount}</p>
      <p>Project ID: {expense.projectId}</p>

      <IconButton aria-label="more" onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={() => { onEdit(expense); handleMenuClose(); }}>
          Edit
        </MenuItem>
        <MenuItem onClick={() => { onArchive(expense.id); handleMenuClose(); }}>
          Archive
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ExpenseCard;





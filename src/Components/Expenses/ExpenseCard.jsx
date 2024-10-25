import React, { useState } from 'react';
import { 
  IconButton, Menu, MenuItem, Dialog, TextField, Button, 
  Typography, Box, Divider 
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useProjects } from '../../ProjectContext';

const ExpenseCard = ({ expense }) => {
  const { editExpense, archiveExpense, projects } = useProjects();
  const [anchorEl, setAnchorEl] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [updatedExpense, setUpdatedExpense] = useState(expense);

  const open = Boolean(anchorEl);

  // Find the associated project name using the projectId from the expense
  const associatedProject = projects.find((project) => project.id === expense.projectId)?.name || 'Unknown Project';

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleEditOpen = () => {
    if (!expense.archived) {
      setEditModalOpen(true);
      handleMenuClose();
    }
  };

  const handleEditChange = (e) =>
    setUpdatedExpense({ ...updatedExpense, [e.target.name]: e.target.value });

  const handleEditSave = () => {
    editExpense(updatedExpense);
    setEditModalOpen(false);
  };

  const handleArchiveToggle = async () => {
    await archiveExpense(expense.id);
    handleMenuClose();
  };

  return (
    <Box
      className="expense-card"
      sx={{
        opacity: expense.archived ? 0.5 : 1,
        backgroundColor: expense.archived ? '#f9f9f9' : 'white',
        transition: 'opacity 0.3s ease',
        padding: 2,
        marginBottom: 2,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          marginBottom: 1,
          textAlign: 'center',
          color: '#00796b',
        }}
      >
        {expense.name}
      </Typography>

      {/* Matching Divider from ProjectCard */}
      <Divider sx={{ marginBottom: 2, borderColor: '#00796b', borderWidth: 1 }} />

      <Typography>Amount: ${expense.amount}</Typography>
      <Typography>Project: {associatedProject}</Typography>
      <Typography>Project ID: {expense.projectId}</Typography>

      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={handleEditOpen} disabled={expense.archived}>
          Edit
        </MenuItem>
        <MenuItem onClick={handleArchiveToggle}>
          {expense.archived ? 'Unarchive' : 'Archive'}
        </MenuItem>
      </Menu>

      <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <TextField
          label="Expense Name"
          name="name"
          value={updatedExpense.name}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={updatedExpense.amount}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
        />
        <Button onClick={handleEditSave} variant="contained" color="primary">
          Save
        </Button>
      </Dialog>
    </Box>
  );
};

export default ExpenseCard;






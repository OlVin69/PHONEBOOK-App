import { useDispatch } from 'react-redux';
import { Typography, Grid, Paper, IconButton } from '@mui/material';
import { BsFillTelephoneFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { FaUser, FaTrash } from 'react-icons/fa';
import { deleteContact } from '../../../redux/contacts/operations';

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id)).unwrap()
  .then(() => {
    toast.success('Delete success');
  })
  .catch(() => {
    toast.error('Delete error');
  });

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#6cd0dd' }}>
        <Typography variant="h6">
          <FaUser style={{ marginRight: '8px' }} />
          {name}
        </Typography>
        <Typography variant="body1">
          <BsFillTelephoneFill style={{ marginRight: '8px' }} />
          {number}
        </Typography>
        <IconButton color="error" onClick={handleDelete}>
          <FaTrash />
        </IconButton>
      </Paper>
    </Grid>
  );
}
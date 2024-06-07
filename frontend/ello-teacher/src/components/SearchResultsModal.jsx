import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #5ACCCC',
  boxShadow: 24,
  p: 4,
};

const ScrollBox = styled(Box)(({ theme }) => ({
  maxHeight: '60vh',
  overflowY: 'auto',
  padding: theme.spacing(2),
}));

export default function SearchResultsModal({ open, handleClose, searchResults, onAddToReadingList }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography 
        id="modal-modal-title" 
        variant="h6" 
        component="h2"
        color = "#5ACCCC"
        fontWeight="bold"
        >
          Search Results
        </Typography>
        <ScrollBox>
          {searchResults.map(book => (
            <Box key={book.id} sx={{ padding: '1em', borderBottom: '1px solid #5ACCCC' }}>
              <Typography 
              variant="h6" 
              component="div"
              color= "#335C6E"
              >
                {book.title}
              </Typography>
              <Typography 
              variant="body2" 
              component="div"
              color = "#335C6E"
              >
                By: {book.author}
              </Typography>
              <Button 
                variant="contained" 
                style={{ backgroundColor: "#FABD33", textTransform: 'none'}}
                onClick={() => onAddToReadingList(book)}
                sx={{ marginTop: '0.5em' }}
              >
                Add to Reading List
              </Button>
            </Box>
          ))}
        </ScrollBox>
      </Box>
    </Modal>
  );
}

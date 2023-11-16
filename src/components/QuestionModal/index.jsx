import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  borderRadius: 5,
  p: 2,
};

const QuestionModal = ({title, buttonFunction, buttonName}) => {
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" align='center' component="h2" sx={{ fontSize: 20, color: 'black' }}>
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 14 }}>
            <Button variant='text' onClick={buttonFunction} >{buttonName}</Button>
            <Button variant='text' onClick={handleClose} >Cancelar</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default QuestionModal;
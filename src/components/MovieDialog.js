import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const {open,id} = useSelector(store=>store.movie);
  const dispatch = useDispatch();

  const handleClose = ()=>{
    dispatch(setOpen(false));
  }

  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        className='opacity-90'
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogContent className="bg-gray-800 no-scrollbar  p-4 w-96 h-auto">
  <DialogContentText id="alert-dialog-description">
    <VideoBackground movieId={id} bool={true}/>
  </DialogContentText>
</DialogContent>
<DialogActions className='bg-gray-800 mt-0 p-4 w-96 opacity-100'>
  <Button onClick={handleClose} className="text-white bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2 opacity-100">Cancel</Button>
</DialogActions>
</Dialog>
    </React.Fragment>
  );
}

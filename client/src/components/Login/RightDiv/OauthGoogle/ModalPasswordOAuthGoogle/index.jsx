import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from "@mui/material";
import { useState } from 'react';
import { getGoogleInfo } from '../../../../../utils/endpoints';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function ModalPasswordOAuthGogle({ handleClose, open, accessToken }) {
  const [inputPropsConfirmPassword, setInputPropsConfirmPassword] = useState({ error: false });
  const [inputPropsPassword, setInputPropsPassword] = useState({ error: false });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleVerifyIfShowError = (property, setInputProps, message) => {
    if (property.length > 1) {
      setInputProps({ error: false })
    } else {
      setInputProps({ error: true, helperText: message })
    }
  }
  const handleVerifyPassword = () => {
    handleVerifyIfShowError(password, setInputPropsPassword, "Password can't be empty")
  }

  const handleVerifyConfirmPassword = () => {
    if (confirmPassword === password && confirmPassword.length > 3) {
      setInputPropsConfirmPassword({ error: false })
    } else {
      setInputPropsConfirmPassword({ error: true, helperText: 'Incorret password' })
    }
  }

  const handleSendInfosOauth = () => {
    if(inputPropsConfirmPassword.error === false && inputPropsPassword.error === false && password && confirmPassword) {
      if (accessToken && password) getGoogleInfo(accessToken, password);
    }
    else{
      let error = { error: true, helperText: 'Incorret password' }
      setInputPropsPassword(error)
      setInputPropsConfirmPassword(error)
    }

  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Welcome to my login page"}</DialogTitle>
      <DialogContent className='div-modal-sign-up'>

        <div>
          <TextField id="standard-basic5"
            label="Password"
            variant="standard"
            type='password'
            fullWidth
            {...inputPropsPassword}
            className='textfield'
            onBlur={handleVerifyPassword}
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <TextField id="standard-basic6"
            label="Confirm password"
            variant="standard"
            type='password'
            fullWidth
            {...inputPropsConfirmPassword}
            className='textfield'
            onBlur={handleVerifyConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error" >Cancel</Button>
        <Button onClick={handleSendInfosOauth} variant="contained">Sign Up</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalPasswordOAuthGogle;
import React from 'react';
import './styles.css';
import { TextField } from '@mui/material';

function LeftDiv() {
  return (
    <div className='div-left'>
      <div className='div-title'>
        <h1>Welcome back!</h1>
      </div>
      <div className='div-input-data'>
        <div className='div-input-login'>
          <TextField id="standard-basic12" label="User or e-mail" variant="standard" fullWidth />
        </div>
        <div className='div-input-login'>
          <TextField id="standard-basic" label="Password" variant="standard" type="password" fullWidth />
        </div>
      </div>
    </div>
  );
}

export default LeftDiv;
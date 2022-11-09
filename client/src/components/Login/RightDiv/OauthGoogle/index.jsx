import React, { useEffect, useState } from 'react';
import google from '../../../../images/google.png';
import { useGoogleLogin } from '@react-oauth/google';
import { getGoogleInfo, verifyEmailAlreadyExists } from '../../../../utils/endpoints';
import ModalPasswordOAuthGogle from './ModalPasswordOAuthGoogle';
import InfoPopUp from '../../../InfoPopUp';


function OAuthGoogle() {
  const [accessToken, setAccessToken] = useState('');
  const [emailToVerify, setEmailToVerify] = useState('');
  const [open, setOpen] = React.useState(false);
  const [openInfoPopUp, setOpenInfoPopUp] = useState(false);
  const [messagePopUp, setMessagePopUp] = useState('');

  const handleOpenModalSignUp = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleMakeOAuth = useGoogleLogin({
    onSuccess: tokenResponse => {
      setAccessToken(tokenResponse.access_token)
      setEmailToVerify(tokenResponse.access_token)
    },
    // onSuccess: tokenResponse => console.log(tokenResponse),
  }
  );

  useEffect(() => {
    if (accessToken) {
      // mudar aqui para fazer com que volte a validar o email no oauth
      if (verifyEmailAlreadyExists(emailToVerify) === false) {
        console.log('aqui');
        handleOpenModalSignUp();
        return
      }
      

      let textFieldLeftDiv = document.getElementById('standard-basic12')
      setMessagePopUp('You already have an account with us!')
      setOpenInfoPopUp(true);
      textFieldLeftDiv.focus();
    }
  }, [accessToken, emailToVerify])



  return (
    <div>
      <div className='div-sign' onClick={handleMakeOAuth}>
        <div><img src={google} alt="img google" /><span> Continue with Google</span></div>
      </div>
      <ModalPasswordOAuthGogle handleClose={handleClose} open={open} accessToken={accessToken} />
      <InfoPopUp className='InfoPopUp' openInfoPopUp={openInfoPopUp} setOpenInfoPopUp={setOpenInfoPopUp} messagePopUp={messagePopUp} />
    </div>
  );
}

export default OAuthGoogle;
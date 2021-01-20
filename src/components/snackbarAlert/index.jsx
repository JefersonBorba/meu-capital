import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { SnackbarAlertContainer } from './style';
import { useDispatch, useSelector } from 'react-redux'
import {userLoginFailed} from '../../store/modules/authenticated-user/actions'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarAlert = ({severity, message, openState}) => {
  const userLoginFailedState = useSelector(state => state.userLoginFailed)
  const dispatch = useDispatch()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(userLoginFailed(false));
    console.log(userLoginFailedState)
  };

  return (
    <SnackbarAlertContainer open={userLoginFailedState} autoHideDuration={3000} onClose={handleClose}>

        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>

    </SnackbarAlertContainer>
  );
}

export default  SnackbarAlert
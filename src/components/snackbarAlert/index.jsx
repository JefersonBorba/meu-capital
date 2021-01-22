import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { SnackbarAlertContainer } from "./styles";
import { useDispatch } from "react-redux";
import { userLoginFailed } from "../../store/modules/authenticated-user/actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarAlert = ({ severity, message, openStatate, setOpenState }) => {
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    if (setOpenState === "login") {
      dispatch(userLoginFailed(false));
      return;
    }
    setOpenState(false);
  };

  return (
    <SnackbarAlertContainer
      open={openStatate}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </SnackbarAlertContainer>
  );
};

export default SnackbarAlert;

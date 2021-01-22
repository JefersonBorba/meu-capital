import styled from "styled-components";

import Snackbar from "@material-ui/core/Snackbar";

export const SnackbarAlertContainer = styled(Snackbar)`
  .MuiPaper-root {
    width: 50vw;
    max-width: 500px;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .MuiAlert-icon {
    margin: 0;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .MuiAlert-action {
    width: 70px;
  }

  .MuiButtonBase-root {
    background-color: #fff2;
    width: 50px;
  }
`;

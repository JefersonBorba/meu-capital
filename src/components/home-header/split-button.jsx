import { StyledButton } from "./styles";
import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAllowed } from "../../store/modules/authenticated-user/actions";

export default function SimpleMenu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAllowedSelector = useSelector((state) => state.isAllowed);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRegister = () => {
    handleClose();
    history.push("/register");
  };

  const handleLogin = () => {
    handleClose();
    history.push("/login");
  };

  const handleDashboard = () => {
    handleClose();
    history.push("/dashboard");
  };

  const handleLogout = () => {
    handleClose();
    history.push("/");
    window.localStorage.clear();
    dispatch(userAllowed(false));
  };

  return (
    <div>
      <StyledButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        size="small"
      >
        <MenuIcon />
      </StyledButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isAllowedSelector ? (
          <>
            <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>{" "}
          </>
        ) : (
          <>
            <MenuItem onClick={handleLogin}>Login</MenuItem>
            <MenuItem onClick={handleRegister}>Register</MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
}

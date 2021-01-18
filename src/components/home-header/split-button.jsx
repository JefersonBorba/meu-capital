import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { StyledButton, StyledNormalButtonContainerVisible } from "./styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MenuIcon from "@material-ui/icons/Menu";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import { StyledPaper } from "./styles";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { useSelector } from "react-redux";

const options = ["Login", "Register"];

export default function SplitButton() {
  let history = useHistory();
  const isAllowedSelector = useSelector((state) => state.isAllowed);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = () => {
    switch (options[selectedIndex]) {
      case "Login":
        history.push("/login");
        break;

      case "Register":
        history.push("/register");
        break;

      default:
        history.push("/");
    }
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  if (isAllowedSelector) {
    return (
      <StyledNormalButtonContainerVisible>
        <StyledButton
          component={Link}
          to="/dashboard"
          variant="contained"
          color="primary"
        >
          Dashboard
        </StyledButton>
      </StyledNormalButtonContainerVisible>
    );
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup
          variant="contained"
          color="primary"
          size="small"
          ref={anchorRef}
          aria-label="split button"
          style={{ height: "30px" }}
        >
          <StyledButton onClick={handleClick}>
            {options[selectedIndex]}
          </StyledButton>
          <StyledButton
            color="primary"
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
            style={{ height: "30px" }}
          >
            <MenuIcon />
          </StyledButton>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <StyledPaper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </StyledPaper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}

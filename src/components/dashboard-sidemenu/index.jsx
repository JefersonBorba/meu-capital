import { useState, useEffect } from "react";
import { Container, MenuItem } from "./styles";
import { RiDashboardFill, RiExchangeBoxFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const SideMenu = () => {
  const history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <Container>
      <MenuItem onClick={() => history.push("/dashboard")}>
        <RiDashboardFill
          style={{ color: "#6DFA7B", width: "30px", height: "30px" }}
        />
        {width > 900 && <h3>Dashboard</h3>}
      </MenuItem>
      <MenuItem onClick={() => history.push("/transacoes")}>
        <RiExchangeBoxFill
          style={{ color: "#6DFA7B", width: "30px", height: "30px" }}
        />
        {width > 900 && <h3>Transações</h3>}
      </MenuItem>
      <MenuItem onClick={() => history.push("carteira")}>
        <FaWallet style={{ color: "#6DFA7B", width: "30px", height: "30px" }} />
        {width > 900 && <h3>Carteira</h3>}
      </MenuItem>
      <MenuItem onClick={() => history.push("/metas")}>
        <FiTarget style={{ color: "#6DFA7B", width: "30px", height: "30px" }} />
        {width > 900 && <h3>Metas</h3>}
      </MenuItem>
    </Container>
  );
};

export default SideMenu;

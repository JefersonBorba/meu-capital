import {useState, useEffect} from "react"
import {Container, MenuItem} from "./style"
import {RiDashboardFill, RiExchangeBoxFill} from "react-icons/ri";
import {FaWallet} from "react-icons/fa";
import {FiTarget} from "react-icons/fi";

const SideMenu = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        
      };
    
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    return <Container>
        <MenuItem>
            <RiDashboardFill style={{color: "#6DFA7B", width: "30px", height: "30px"}}/>
            {width > 900 && <h3>Dashboard</h3>}
        </MenuItem>
        <MenuItem>
            <RiExchangeBoxFill style={{color: "#6DFA7B", width: "30px", height: "30px"}}/>
            {width > 900 && <h3>Transações</h3>}
        </MenuItem>
        <MenuItem>
            <FaWallet style={{color: "#6DFA7B", width: "30px", height: "30px"}}/>
            {width > 900 && <h3>Carteira</h3>}
        </MenuItem>
        <MenuItem>
            <FiTarget style={{color: "#6DFA7B", width: "30px", height: "30px"}}/>
            {width > 900 && <h3>Metas</h3>}
        </MenuItem>
        
    
    </Container>
}

export default SideMenu;
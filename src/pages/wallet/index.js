import Header from "../../components/header";
import SideMenu from "../../components/dashboard-sidemenu";
import ResumeBalance from "../../components/transaction-resume-balance";
import PizzaChart from "../../components/pizzachart";
import DashboardLineChart from "../../components/dashboard-linechart";

import {
  Container,
  RightContainer,
  Breakable,
  Content,
  Balance,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Wallet = () => {
  const isAllowedSelector = useSelector((state) => state.isAllowed);
  const history = useHistory();
  return (
    <>
      {isAllowedSelector ? (
        <>
          <Header title="Carteira" />
          <Container>
            <SideMenu />
            <Breakable>
              <Content>
                <h1>Seu saldo</h1>
                <Balance></Balance>
                <DashboardLineChart />
              </Content>
              <RightContainer>
                <ResumeBalance />
                <PizzaChart />
              </RightContainer>
            </Breakable>
          </Container>
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
};
export default Wallet;

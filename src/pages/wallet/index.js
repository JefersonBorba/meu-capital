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
  BalanceContent,
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
                <Balance>
                  <BalanceContent>
                    <h1>R$ 1000,00 </h1>
                    <h2>Total</h2>
                  </BalanceContent>
                </Balance>
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

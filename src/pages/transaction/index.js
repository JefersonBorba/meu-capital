import Header from "../../components/header";
import SideMenu from "../../components/dashboard-sidemenu";
import ResumeGoal from "../../components/dashboard-resume-goal";
import ResumeBalance from "../../components/transaction-resume-balance";
import ContentTransaction from "../../components/transaction-content";
import PizzaChart from "../../components/pizzachart";
import { Container, RightContainer, Breakable } from "./styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Transaction = () => {
  const isAllowedSelector = useSelector((state) => state.isAllowed);
  const history = useHistory();

  return (
    <>
      {isAllowedSelector ? (
        <div>
          <Header title="Transações" />
          <Container>
            <SideMenu />
            <Breakable>
              <ContentTransaction />
              <RightContainer>
                <ResumeGoal />
                <ResumeBalance />
                <PizzaChart />
              </RightContainer>
            </Breakable>
          </Container>
        </div>
      ) : (
        history.push("/")
      )}
    </>
  );
};

export default Transaction;

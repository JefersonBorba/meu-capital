import Header from "../../components/header";

import SideMenu from "../../components/dashboard-sidemenu";
import ResumeGoal from "../../components/dashboard-resume-goal";

import ResumeBalance from "../../components/transaction-resume-balance";
import ContentTransaction from "../../components/transaction-content";

import PizzaChart from "../../components/pizzachart";

import { Container, RightContainer, Breakable } from "./styles";

const Transaction = () => {
  return (
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
  );
};

export default Transaction;

import Header from "../../components/header";
import ResumoGastos from "../../components/dashboard-resumo-gastos";
import SideMenu from "../../components/dashboard-sidemenu";
import ResumeGoal from "../../components/dashboard-resume-goal";
import ResumeTransaction from "../../components/dashboard-resume-transaction";
import { Container, RightContainer, Breakable } from "./style"
const Dashboard = () => (
  <>
    <Header title="Dashboard" />
    <Container>
      <SideMenu />
      <Breakable>
        <ResumoGastos/>
        <RightContainer>
          <ResumeGoal />
          <ResumeTransaction />
        </RightContainer>
      </Breakable>
      </Container>
    
  </>
);
export default Dashboard;

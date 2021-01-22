import Header from "../../components/header";
import ResumoGastos from "../../components/dashboard-resumo-gastos";
import SideMenu from "../../components/dashboard-sidemenu";
import ResumeGoal from "../../components/dashboard-resume-goal";
import ResumeTransaction from "../../components/dashboard-resume-transaction";
import { Container, RightContainer, Breakable, Graphs } from "./styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const isAllowedSelector = useSelector((state) => state.isAllowed);
  const history = useHistory();

  return (
    <>
      {isAllowedSelector ? (
        <>
          <Header title="Dashboard" />
          <Container>
            <SideMenu />
            <Breakable>
              <Graphs>
                <ResumoGastos />
              </Graphs>
              <RightContainer>
                <ResumeGoal />
                <ResumeTransaction />
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
export default Dashboard;

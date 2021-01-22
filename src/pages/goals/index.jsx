import Header from "../../components/header";
import SideMenu from "../../components/dashboard-sidemenu";
import ResumeGoal from "../../components/dashboard-resume-goal";
import ResumeTransaction from "../../components/dashboard-resume-transaction";
import GoalsList from "../../components/goals-list";
import { Container, RightContainer, Breakable, GoalsContainer } from "./style";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Goals = () => {
  const isAllowedSelector = useSelector((state) => state.isAllowed);
  const history = useHistory();

  return (
    <>
      {isAllowedSelector ? (
        <>
          <Header title="Metas" />
          <Container>
            <SideMenu />
            <Breakable>
              <GoalsContainer>
                <GoalsList />
              </GoalsContainer>
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

export default Goals;

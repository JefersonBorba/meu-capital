import Header from "../../components/header";
import SideMenu from "../../components/dashboard-sidemenu";
import ResumeGoal from "../../components/dashboard-resume-goal";
import ResumeTransaction from "../../components/dashboard-resume-transaction";
import GoalsList from "../../components/goals-list"
import { Container, RightContainer, Breakable, GoalsContainer } from "./style"
const Goals = () => {
    return <>
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
        </Container>'
  </>
};
export default Goals;
import { useSelector } from "react-redux";
import { Container, Content, LinearProgress, Bar } from "./styles";

const ResumeGoal = () => {
  const selectUser = (state) => state.user;
  const userData = useSelector(selectUser);
  const goal = [];
  const spent = [];

  userData[2].data.map((data) => goal.push(data.available));
  spent.push(userData[3].data.reduce((acc, curr) => acc + curr.value, 0));

  const goalReducer = goal.reduce(
    (previousScore, currentScore, index) => previousScore + currentScore,
    0
  );
  const spentReducer = spent.reduce(
    (previousScore, currentScore, index) => previousScore + currentScore,
    0
  );

  return (
    <Container>
      <Content>
        <h1>Meta</h1>
        <div>
          <h2>Total</h2>
          <h3>R${goalReducer},00</h3>
        </div>
        <LinearProgress>
          <Bar style={{ width: `${(spentReducer / goalReducer) * 100}%` }} />
        </LinearProgress>
      </Content>
    </Container>
  );
};

export default ResumeGoal;

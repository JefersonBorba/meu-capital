import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";

import { Container, Content } from "./styles";

const ResumeGoal = () => {
  const selectUser = state => state.user;
  const userData = useSelector(selectUser);
  const meta = [];
  userData[2].data.map((data) => (meta.push(data.available)))
  const metaReducer = meta.reduce(
    (previousScore, currentScore, index)=>previousScore+currentScore, 
    0);
  console.log(metaReducer);
  return (
  <Container>
    <Content>
      <h1>Meta</h1>
      <div>
        <h2>Total</h2>
        <h3>R${metaReducer},00</h3>
      </div>
      <LinearProgress />
    </Content>
  </Container>
  )};

export default ResumeGoal;

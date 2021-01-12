import LinearProgress from "@material-ui/core/LinearProgress";

import { Container, Content } from "./styles";

const ResumeGoal = () => (
  <Container>
    <Content>
      <h1>Meta</h1>
      <div>
        <h2>Total</h2>
        <h3>R$00,00</h3>
      </div>
      <LinearProgress />
    </Content>
  </Container>
);

export default ResumeGoal;

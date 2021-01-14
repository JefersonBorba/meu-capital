import { Container, Content, Income, Outcome, Value } from "./styles";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
const ResumeBalance = () => (
  <Container>
    <Content>
      <h1>Balanço</h1>
      <Income>
        <Value>
          <div className="up">
            <AiOutlineArrowUp fill="white" size="30" />
          </div>
          <div className="info">
            <p>Ganhos</p>
            <h2>1233,00 R$</h2>
          </div>
        </Value>
      </Income>
      <Outcome>
        <Value>
          <div className="down">
            <AiOutlineArrowDown fill="white" size="30" />
          </div>
          <div className="info">
            <p>Gastos</p>
            <h2>1233,00 R$</h2>
          </div>
        </Value>
      </Outcome>
    </Content>
  </Container>
);

export default ResumeBalance;

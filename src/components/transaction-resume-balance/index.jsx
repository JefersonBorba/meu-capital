import { Container, Content, Income, Outcome, Value } from "./styles";
import { useSelector } from "react-redux";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const ResumeBalance = () => {
  const selectUser = (state) => state.user;
  const userData = useSelector(selectUser);
  return (
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
              <h2>
                R${" "}
                {userData[1].data[0].saldo ? userData[1].data[0].saldo : "00"}
                ,00
              </h2>
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
              <h2>
                R${" "}
                {userData[3].data[0]
                  ? userData[3].data.reduce((acc, curr) => acc + curr.value, 0)
                  : "00"}
                ,00
              </h2>
            </div>
          </Value>
        </Outcome>
      </Content>
    </Container>
  );
};

export default ResumeBalance;

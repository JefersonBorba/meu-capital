import { Container, Content, Card } from "./styles";
import alimentacao from "../../assets/icons/alimentacao.svg";
import { useSelector } from "react-redux";

const ResumeTransaction = () => {
  const selectUser = (state) => state.user;
  const userData = useSelector(selectUser);

  return (
    <Container>
      <Content>
        {userData[3].data.map((data, index) => (
          <Card key={index}>
            <div className="divider">
              <img src={alimentacao} alt="icon" />
              <div>
                <h3>{data.category}</h3>
              </div>
            </div>
            <span>R$ {data.value},00</span>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default ResumeTransaction;

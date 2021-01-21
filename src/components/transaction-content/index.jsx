import { useSelector } from "react-redux";
import { Container, Content, Card } from "./styles";
import alimentacao from "../../assets/alimentacao.svg";

const ContentTransaction = () => {
  const selectUser = (state) => state.user;
  const userData = useSelector(selectUser);
  for (let i = 0; i < 4; i++) {
    console.log(Object.keys(userData[3].data[1]));
  }
  return (
    <Container>
      <Content>
        <h2>Suas transações</h2>
        {userData[3].data.map((data, index) => (
          <Card key={index}>
            <div className="divider">
              <img src={alimentacao} alt="icon" />
              <div>
                <h3>{Object.keys(data)[1]}</h3>
                <p>{data.name}</p>
              </div>
            </div>
            <span>R$ {data.comida},00</span>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default ContentTransaction;

import { Container, Content, Card } from "./styles";
import alimentacao from "../../assets/alimentacao.svg";
const ContentTransaction = () => {
  const exemple = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <Content>
        <h2>Suas transações</h2>
        {exemple.map((item, index) => (
          <Card key={index}>
            <div className="divider">
              <img src={alimentacao} alt="icon" />
              <div>
                <h3>Comida</h3>
                <p>12 de Janeiro</p>
              </div>
            </div>
            <span>R$ 12,00</span>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default ContentTransaction;

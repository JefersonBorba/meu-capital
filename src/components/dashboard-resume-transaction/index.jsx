import { Container, Content, Card } from "./styles";
import alimentacao from "../../assets/alimentacao.svg";

const ResumeTransaction = () => {
  const exemple = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <Content>
        {exemple.map((item, index) => (
          <Card key={index}>
            <img src={alimentacao} alt="icon" />
            <div>
              <h2>Comida</h2>
              <p>12 de Janeiro</p>
            </div>
            <span>R$ 12,00</span>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default ResumeTransaction;

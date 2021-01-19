import { useState } from "react";
import { Container, Content, Card } from "./styles";
import alimentacao from "../../assets/alimentacao.svg";
import transporte from "../../assets/transporte.svg";
import educacao from "../../assets/educacao.svg";
import lazer from "../../assets/lazer-hobbie.svg";
import roupas from "../../assets/roupas.svg";

const ContentTransaction = () => {
  const [data, setData] = useState([
    {
      name: "Alimentação",
      available: 4000,
      spent: 2400,
      categoryicon: alimentacao,
    },
    {
      name: "Transporte",
      available: 4000,
      spent: 2400,
      categoryicon: transporte,
    },
    {
      name: "Educação",
      available: 4000,
      spent: 2400,
      categoryicon: educacao,
    },
    {
      name: "Lazer",
      available: 4000,
      spent: 2400,
      categoryicon: lazer,
    },
    {
      name: "Roupas",
      available: 4000,
      spent: 2400,
      categoryicon: roupas,
    },
  ]);

  return (
    <Container>
      <Content>
        <h2>Suas transações</h2>
        {data.map((item, index) => (
          <Card key={index}>
            <div className="divider">
              <img src={item.categoryicon} alt="icon" />
              <div>
                <h3>{item.name}</h3>
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

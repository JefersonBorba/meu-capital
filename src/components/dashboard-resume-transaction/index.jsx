import { Container, Content, Card } from "./styles";

const ResumeTransaction = () => {
  const exemple = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <Content>
        {exemple.map((item, index) => (
          <Card key={index}>
            <img
              src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              alt="profile"
            />
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

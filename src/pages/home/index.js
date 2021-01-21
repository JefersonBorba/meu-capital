import HomeHeader from "../../components/home-header";
import HomeContent from "../../components/home-content";
import HomeBox from "../../components/home-box";
import HomeAvatar from "../../components/home-avatar";
import HomeFooter from "../../components/home-footer";
import landing from "../../assets/img/landing.svg";
import landing2 from "../../assets/img/landing2.svg";
import target from "../../assets/img/target.svg";
import chart from "../../assets/img/chart.svg";
import card from "../../assets/img/card.svg";
import { StyledH1, StyledDiv, StyledHr } from "./styles";

const Home = () => (
  <StyledDiv>
    <HomeHeader />
    <HomeContent
      img={landing2}
      alt={"mulher sentada em uma engrenagem"}
      title={"Tempo é dinheiro"}
      paragraph={
        "No Meu Capital você controla sua grana em segundos e não perde tempo. Tenha tudo sob controle e aproveite seu tempo com o que realmente importa pra você!"
      }
      variant
    />
    <StyledHr style={{ width: "40%" }} />
    <HomeContent
      img={landing}
      alt={"homem fazendo sinal de paz e amor"}
      title={"Fácil de usar"}
      paragraph={
        "O sistema foi desenhado para ser intuitivo e tornar sua experiência cada vez mais natural. Com poucos cliques você consegue fazer um controle incrível do seu dinheiro!"
      }
    />
    <StyledHr style={{ width: "70%" }} />
    <StyledH1>Principais Recursos</StyledH1>
    <div className="boxContainer">
      <HomeBox
        img={target}
        alt={"alvo"}
        title={"Metas"}
        paragraph={
          "Defina o quanto você pode gastar em cada categoria e economize sem esforço."
        }
      />
      <HomeBox
        img={chart}
        alt={"gráficos"}
        title={"Relatórios"}
        paragraph={
          "Gráficos simples e completos para saber como seu dinheiro está sendo investido!"
        }
      />
      <HomeBox
        img={card}
        alt={"cartão"}
        title={"Controle"}
        paragraph={
          "Aqui você controla seus gastos com cartões e despesas sem se preocupar."
        }
      />
    </div>
    <StyledHr style={{ width: "30%" }} />
    <StyledH1>Nosso Time</StyledH1>
    <HomeAvatar />
    <HomeFooter />
  </StyledDiv>
);
export default Home;

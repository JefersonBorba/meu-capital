import HomeHeader from "../../components/home-header";
import HomeContent from "../../components/home-content";
import HomeBox from "../../components/home-box";
import HomeFooter from "../../components/home-footer";
import login from "../../assets/img/login.svg";
import landing from "../../assets/img/landing.svg";
import target from "../../assets/img/target.svg";
import chart from "../../assets/img/chart.svg";
import card from "../../assets/img/card.svg";
import { StyledH1 } from "./styles";

const Home = () => (
  <>
    <HomeHeader />
    <HomeContent
      img={login}
      alt={"mulher sentada em uma engrenagem"}
      title={"Tempo é dinheiro"}
      paragraph={
        "No Meu Capital você controla sua grana em segundos e não perde tempo. Tenha tudo sob controle e aproveite seu tempo com o que realmente importa pra você!"
      }
    />
    <HomeContent
      img={landing}
      alt={"homem fazendo sinal de paz e amor"}
      title={"Fácil de usar"}
      paragraph={
        "O sistema foi desenhado para ser intuitivo e tornar sua experiência cada vez mais natural. Com poucos cliques você consegue fazer um controle incrível do seu dinheiro!"
      }
    />
    <hr />
    <StyledH1>Principais Recursos</StyledH1>
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
      paragraph={"Resumos incríveis, com gráficos simples e completos!"}
    />
    <HomeBox
      img={card}
      alt={"cartão"}
      title={"Controle"}
      paragraph={
        "Aqui você controla seus gastos com cartões e despesas sem se preocupar."
      }
    />
    <HomeFooter />
  </>
);
export default Home;

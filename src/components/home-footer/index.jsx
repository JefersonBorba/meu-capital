import { StyledDiv, StyledSocialDiv, LinkedInDiv } from "./styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const HomeFooter = () => {
  return (
    <StyledDiv>
      <StyledSocialDiv>
        <LinkedInDiv>
          <a
            href="https://www.linkedin.com/in/abdiel-martins/"
            alt="Abdiel Martins"
            target="blank"
            rel="noopener"
          >
            <LinkedInIcon />
            <p>Abdiel Martins</p>
          </a>
        </LinkedInDiv>
        <LinkedInDiv>
          <a
            href="https://www.linkedin.com/in/eduardo-marinho-762b141b0/"
            alt="Eduardo Marinho"
            target="blank"
            rel="noopener"
          >
            <LinkedInIcon />
            <p>Eduardo Marinho</p>
          </a>
        </LinkedInDiv>
        <LinkedInDiv>
          <a
            href="https://www.linkedin.com/in/felipesouzadsgn/"
            alt="Felipe Souza"
            target="blank"
            rel="noopener"
          >
            <LinkedInIcon />
            <p>Felipe Souza</p>
          </a>
        </LinkedInDiv>
        <LinkedInDiv>
          <a
            href="https://www.linkedin.com/in/jefersonborbasls/"
            alt="Jeferson Borba"
            target="blank"
            rel="noopener"
          >
            <LinkedInIcon />
            <p>Jeferson Borba</p>
          </a>
        </LinkedInDiv>
        <LinkedInDiv>
          <a
            href="https://www.linkedin.com/in/rafael-assad/"
            alt="Rafael Assad"
            target="blank"
            rel="noopener"
          >
            <LinkedInIcon />
            <p>Rafael Assad</p>
          </a>
        </LinkedInDiv>
      </StyledSocialDiv>
      <div className="copyright">© Meu Capital, Inc. 2020.</div>
    </StyledDiv>
  );
};

export default HomeFooter;

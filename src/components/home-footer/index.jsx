import { StyledDiv, StyledSocialDiv } from "./styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const HomeFooter = () => {
  return (
    <StyledDiv>
      <StyledSocialDiv>
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </StyledSocialDiv>
      <div className="copyright">© Meu Capital, Inc. 2020.</div>
    </StyledDiv>
  );
};

export default HomeFooter;

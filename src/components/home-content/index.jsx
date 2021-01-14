import {
  StyledDiv,
  StyledContainer,
  StyledTextContainer,
  StyledImageContainer,
} from "./styles";

import { Slide } from "react-awesome-reveal";

const HomeContent = ({ img, alt, title, paragraph, variant = false }) => {
  return (
    <StyledDiv>
      {variant ? (
        <StyledContainer>
          <StyledImageContainer>
            <Slide triggerOnce duration="2000">
              <img src={img} alt={alt} className="img" />
            </Slide>
          </StyledImageContainer>
          <StyledTextContainer>
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </StyledTextContainer>
        </StyledContainer>
      ) : (
        <StyledContainer>
          <StyledTextContainer>
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </StyledTextContainer>
          <StyledImageContainer>
            <Slide triggerOnce duration="2000" direction="right">
              <img src={img} alt={alt} className="img" />
            </Slide>
          </StyledImageContainer>
        </StyledContainer>
      )}
    </StyledDiv>
  );
};

export default HomeContent;

import {
  StyledDiv,
  StyledContainer,
  StyledTextContainer,
  StyledImageContainer,
} from "./styles";

const HomeContent = ({ img, alt, title, paragraph }) => {
  return (
    <StyledDiv>
      <StyledContainer>
        <StyledImageContainer>
          <img src={img} alt={alt}></img>
        </StyledImageContainer>
        <StyledTextContainer>
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </StyledTextContainer>
      </StyledContainer>
    </StyledDiv>
  );
};

export default HomeContent;

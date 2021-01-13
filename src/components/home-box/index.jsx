import { StyledDiv, StyledContainer } from "./styles";

const HomeBox = ({ img, alt, title, paragraph }) => {
  return (
    <StyledDiv>
      <StyledContainer>
        <img src={img} alt={alt}></img>
        <h1>{title} </h1>
        <p>{paragraph}</p>
      </StyledContainer>
    </StyledDiv>
  );
};

export default HomeBox;

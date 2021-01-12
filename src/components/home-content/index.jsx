import womanWatch from "../../assets/img/woman-watch.svg";

import styled from "styled-components";

const HomeContent = () => {
  return (
    <StyledDiv>
      <StyledContainer>
        <StyledImageContainer>
          <img src={womanWatch} alt="mulher com relógio"></img>
        </StyledImageContainer>
        <StyledTextContainer>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
            aliquet condimentum augue, rutrum placerat lacus. Quisque at dui
            erat. Phasellus eu ullamcorper mauris. Nam ex arcu, iaculis quis
            porta vel, placerat at leo. Aliquam blandit luctus lobortis. Morbi
            maximus at neque id egestas. Nulla venenatis fermentum sollicitudin.
            Morbi accumsan, sapien et fringilla porta, turpis mauris congue
            tellus, a luctus nulla tellus in nibh. Duis non vulputate felis, at
            fermentum ante. In hac habitasse platea dictumst. Sed sagittis ex
            sit amet consequat sollicitudin. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Donec lobortis mi lacinia lacus condimentum feugiat
          </p>
        </StyledTextContainer>
      </StyledContainer>
    </StyledDiv>
  );
};

export default HomeContent;

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  padding: 5px;
`;

const StyledImageContainer = styled.div`
  height: 80%;
  width: 80%;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledTextContainer = styled.div`
  font-family: Roboto, sans-serif;
  background: whitesmoke;
  border-radius: 10px;
  padding: 5px;
`;

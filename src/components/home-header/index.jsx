import styled from "styled-components";

import logo from "../../assets/img/logo.svg";

import SplitButton from "./split-button";

const HomeHeader = () => {
  return (
    <StyledDiv>
      <StyledLogoContainer>
        <img src={logo} alt="logo" />
      </StyledLogoContainer>
      <StyledButtonContainer>
        <SplitButton />
      </StyledButtonContainer>
    </StyledDiv>
  );
};

export default HomeHeader;

const StyledDiv = styled.div`
  background: #183161;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 3px 3px;
`;

const StyledLogoContainer = styled.div`
  height: 35px;
  width: 35px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledButtonContainer = styled.div`
  height: 35px;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #1d1d42;
  color: #dedede;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Profile = styled.div`
  display: flex;
`;

export const ImageProfile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-right: 15px;
`;

export const Title = styled.h2`
  font-size: 33.43px;
`;

export const StyledContent = styled.div`
  display: flex;
  width: 450px;
  justify-content: space-between;
  align-items: center;
`;

export const InputStyled = styled.div`
  height: 30px;
  padding-right: 10px;
  background-color: #141432;
  display: flex;
  align-items: center;
  border-radius: 50px;

  .iconSearch {
    width: 15px;
    color: #dedede;
  }
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  padding-left: 15px;

  color: white;
  border-radius: 50px;
  border: none;
  background-color: #141432;

  outline: none;

  ::placeholder {
    color: #2e2e64;
    text-align: center;
  }
`;

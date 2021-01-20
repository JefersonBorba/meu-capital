import styled from "styled-components";

export const Container = styled.div`
  font-family: Ubuntu;
  width: 100%;
  height: 65px;
  background: #1d1d42;
  color: #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
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

  h1 {
    font-size: 25px;
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
`;

export const ImageProfile = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin-right: 15px;
`;

export const Name = styled.h2`
  font-size: 20px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogoutButton = styled.button`
  padding: 10px 15px;
  background-color: #1d1d42;
  border: 2px solid #fff;
  color: #fff;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background-color: #fff;
    color: #1d1d42;
    transition: 0.3s;
  }
`;

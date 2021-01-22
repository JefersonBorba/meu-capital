import styled from "styled-components";

export const Modal = styled.div`
  z-index: 1;
  position: absolute;
  width: 400px;
  // min-height: 300px;
  transition: min-height 0.5s ease;
  background-color: #141432;
  color: white;
  box-shadow: 5px 5px 20px 10px #100916;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  input {
    width: 75%;
    height: 50px;
    border-radius: 20px;
    border: 0;
    background-color: #08081b;
    color: #37395a;
    text-align: center;
    font-size: 20px;
  }
  div:hover {
    cursor: pointer;
  }
`;
export const Button = styled.div`
  width: 75%;
  height: 50px;
  background-color: #e9666d;
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

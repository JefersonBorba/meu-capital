import styled from "styled-components";

export const FormContainer = styled.div`
  width: 50vw;
  margin-bottom: 12px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 50vw;
    padding: 10px;

    border: none;
    outline: none;

    cursor: pointer;

    border-radius: 15px;

    background-color: #5CB245;
    color: #fff;

    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight:700;

    letter-spacing: 2px;
  }

`;

export const LabelStyled = styled.label`
  color: #fff;
  font-weight: 100;
  font-family: "Ubuntu", sans-serif;

  margin-bottom: 8px;
`;

export const InputContainer = styled.div`
  margin-bottom:15px;
  display: flex;
  flex-direction: column;
  width: 50vw;

  input {
    padding: 5px;
    margin-bottom: 3px;

    border-radius: 3px;
    border: none;
    outline: none;

    font-size: 1.15rem;
  }

  p {
    color:#fff;
    background-color: #E9666D;
    padding: 3px;
    text-align: center;
    border-radius: 3px;
    font-size:0.85rem;
    font-family: "Ubuntu", sans-serif;
  }
`;


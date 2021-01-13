import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const FormContainer = styled.div`
  width: 50vw;
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button{
    width: 50vw;
    padding:10px;

    border:none;
    outline:none;

    cursor:pointer;

    border-radius:15px;
  }
`;

export const TextFieldConteiner = styled(TextField)`
  border-radius: 5px;
  background-color: #fff;
  
  input {
  font-size: 1.5rem;
    padding: 5px;
  }
`;

export const LabelStyled = styled.label`
  color: #fff;
  font-weight: 100;
  font-family: "Ubuntu", sans-serif;
`;

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import { FormContainer, InputContainer, LabelStyled } from "./styles";

const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/[a-zA-Z]/g, "Somente letras.")
      .matches()
      .required("Campo obrigatório"),
    email: yup
      .string("Formato inválido")
      .email("E-mail inválido")
      .required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não correspondem.")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    axios
      .post("https://meucapital.herokuapp.com/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleForm)}>
        <InputContainer>
        <LabelStyled htmlFor='name'>Nome</LabelStyled>
        <input 
          ref={register}  
          name="name" 
          id="name" 
          type="text" 
          placeholder="Digite seu nome."
        />
        {errors.nome && <p className="error">{errors.name.message}</p>}
        </InputContainer>
        <InputContainer>
        <LabelStyled htmlFor='email'> E-mail</LabelStyled>
        <input 
          ref={register}  
          name="email" 
          id="email" 
          type="text" 
          placeholder="Digite seu email."
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        </InputContainer>
        <InputContainer>
        <LabelStyled htmlFor='password'>Senha</LabelStyled>
        <input 
          ref={register}  
          name="password" 
          id="password" 
          type="text" 
          placeholder="Digite sua senha."
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        </InputContainer>
        <InputContainer>
        <LabelStyled htmlFor='passwordConfirm'>Confirmação de Senha</LabelStyled>
        <input 
          ref={register}  
          name="passwordConfirm" 
          id="passwordConfirm" 
          type="text" 
          placeholder="Confirme sua senha"
        />
        {errors.passwordConfirm && <p className="error">{errors.passwordConfirm.message}</p>}
        </InputContainer>
        <div>
          <button>Cadastrar</button>
        </div>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;

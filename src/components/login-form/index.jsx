import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { FormContainer, InputContainer, LabelStyled } from "./styles";

const LoginForm = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string("Formato inválido!")
      .email("E-mail inválido!")
      .required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    axios
      .post("https://meucapital.herokuapp.com/login", data)
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        history.push("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleForm)}>
        <InputContainer>
          <LabelStyled htmlFor="email"> E-mail</LabelStyled>
          <input
            ref={register}
            name="email"
            id="email"
            type="text"
            placeholder="Digite seu email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </InputContainer>
        <InputContainer>
          <LabelStyled htmlFor="password"> Senha</LabelStyled>
          <input
            ref={register}
            name="password"
            id="password"
            type="text"
            placeholder="Digite sua Senha"
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </InputContainer>
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginForm;

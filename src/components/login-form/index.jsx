import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import { FormContainer, LabelStyled, TextFieldConteiner } from "./styles";

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string("Formato inválido")
      .email("E-mail inválido")
      .required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
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
      .catch((err) => console.error(err));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
        <LabelStyled> E-mail</LabelStyled>
          <TextFieldConteiner
            size="small"
            margin="dense"
            name="email"
            inputRef={register}
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div>
        <LabelStyled> Senha</LabelStyled>
          <TextFieldConteiner
            type="password"
            size="small"
            margin="dense"
            variant="outlined"
            name="password"
            inputRef={register}
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginForm;

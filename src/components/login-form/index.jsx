import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import TextField from "@material-ui/core/TextField";

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
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            size="small"
            margin="dense"
            variant="outlined"
            label="E-mail"
            name="email"
            inputRef={register}
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div>
          <TextField
            type="password"
            size="small"
            margin="dense"
            variant="outlined"
            label="Senha"
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
    </>
  );
};

export default LoginForm;

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import TextField from "@material-ui/core/TextField";

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
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            size="small"
            margin="dense"
            variant="outlined"
            label="Name"
            name="name"
            inputRef={register}
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </div>
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
          <TextField
            size="small"
            margin="dense"
            variant="outlined"
            label="Confirmção de Senha"
            name="passwordConfirm"
            inputRef={register}
            fullWidth
            error={!!errors.passwordConfirm}
            helperText={errors.passwordConfirm?.message}
          />
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;

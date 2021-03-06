import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { authenticatedUserThunk } from "../../store/modules/authenticated-user/thunk";
import { useDispatch, useSelector } from "react-redux";
import { FormContainer, InputContainer, LabelStyled } from "./styles";
import SnackbarAlert from "../snackbarAlert";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLoginFailedState = useSelector((state) => state.userLoginFailed);

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
    dispatch(authenticatedUserThunk(data, history));
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
            type="password"
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
      <SnackbarAlert
        openState={userLoginFailedState}
        setOpenState="login"
        severity="error"
        message="Email ou Senha inválidos!"
      />
    </FormContainer>
  );
};

export default LoginForm;

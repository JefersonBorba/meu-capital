import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

import { FormContainer, InputContainer, LabelStyled } from "./styles";

const RegisterForm = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [snackbarError, setSnackbarError] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .matches(/[a-zA-Z]/g, "Somente letras!"),
    email: yup
      .string("Formato inválido!")
      .email("E-mail inválido!")
      .required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não correspondem!")
      .required("Campo obrigatório!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    axios
      .post("https://meucapital.herokuapp.com/register", data)
      .then((res) => {
        console.log(res.data);
        let token = res.data.accessToken;
        let decoded = jwt_decode(token);

        const urlSpentByCategory =
          "https://meucapital.herokuapp.com/spentByCategory";
        const urlWallet = "https://meucapital.herokuapp.com/wallet";
        const urlGoals = "https://meucapital.herokuapp.com/goals";

        const header = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const requestWallet = {
          balance: 0,
          spent: 0,
          userId: `${decoded.sub}`,
        };

        const requestSpentByCategory = {
          name: "01/01",
          comida: 0,
          transporte: 0,
          outros: 0,
          userId: `${decoded.sub}`,
        };

        const requestGoals1 = {
          name: "educação",
          available: 100,
          spent: 0,
          userId: `${decoded.sub}`,
        };

        const requestGoals2 = {
          name: "saúde",
          available: 100,
          spent: 0,
          userId: `${decoded.sub}`,
        };

        const requestGoals3 = {
          name: "transporte",
          available: 100,
          spent: 0,
          userId: `${decoded.sub}`,
        };

        axios
          .all([
            axios.post(urlWallet, requestWallet, header),
            axios.post(urlSpentByCategory, requestSpentByCategory, header),
            axios.post(urlGoals, requestGoals1, header),
            axios.post(urlGoals, requestGoals2, header),
            axios.post(urlGoals, requestGoals3, header),
          ])
          .then((responseArr) => {
            responseArr.forEach((res) => console.log(res));
            setOpen(true);
            setTimeout(() => {
              history.push("/login");
            }, 2500);
          })
          .catch((err) => {
            setSnackbarError(true);
            console.error(err);
          });
      })
      .catch((err) => {
        setSnackbarError(true);
        console.error(err);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(handleForm)}>
          <InputContainer>
            <LabelStyled htmlFor="name">Nome</LabelStyled>
            <input
              ref={register}
              name="name"
              id="name"
              type="text"
              placeholder="Digite seu nome"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </InputContainer>
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
            <LabelStyled htmlFor="password">Senha</LabelStyled>
            <input
              ref={register}
              name="password"
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </InputContainer>
          <InputContainer>
            <LabelStyled htmlFor="passwordConfirm">
              Confirmação de Senha
            </LabelStyled>
            <input
              ref={register}
              name="passwordConfirm"
              id="passwordConfirm"
              type="password"
              placeholder="Confirme sua senha"
            />
            {errors.passwordConfirm && (
              <p className="error">{errors.passwordConfirm.message}</p>
            )}
          </InputContainer>
          <div>
            <button onClick={handleClose}>Cadastrar</button>
          </div>
        </form>
      </FormContainer>
      {snackbarError ? (
        <Snackbar
          open={snackbarError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            Erro ao cadastrar!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Usuário criado com sucesso!
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default RegisterForm;

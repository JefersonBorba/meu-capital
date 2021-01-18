import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
// import {toBeInTheDocument } from '@testing-library/jest-dom'

import { Provider } from "react-redux";
import store from "../../../store";
import LoginForm from "../index";

describe("Testing Login Form", () => {
  test("Should email be valid", async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    userEvent.type(
      screen.getByPlaceholderText("Digite seu email"),
      "exemplo@email.com"
    );
    userEvent.type(screen.getByPlaceholderText("Digite seu email"), "123456");
    userEvent.click(screen.getByRole("button"));
    const message = await screen.findByText(/E-mail inválido!/);
    expect(message).not.toBeInTheDocument();
  });

  test("Should email be invalid", async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    userEvent.type(
      screen.getByPlaceholderText("Digite seu email"),
      "Outa coisa"
    );
    userEvent.type(screen.getByPlaceholderText("Digite seu email"), "123456");
    userEvent.click(screen.getByRole("button"));
    const message = await screen.findByText(/E-mail inválido!/);
    expect(message).toBeInTheDocument();
  });

  // test("Should password be valid", async ()=> {
  //   render(<LoginForm/>)
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemplo@email.com")
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "123456")
  //   userEvent.click(screen.getByRole("button"))
  //   const message = await screen.findByText(/Campo obrigatório!/);
  //   expect(message).not.toBeInTheDocument()
  // })

  // test("Should password be invalid", async ()=> {
  //   render(<LoginForm/>)
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemplo@email.com")
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "123")
  //   userEvent.click(screen.getByRole("button"))
  //   const message = await screen.findByText(/Campo obrigatório!/);
  //   expect(message).toBeInTheDocument()
  // })

  // test("Should email and password be required", async ()=> {
  //   render(<LoginForm/>)
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "")
  //   userEvent.type(screen.getByPlaceholderText("Digite sua Senha"), "")
  //   userEvent.click(screen.getByRole("button"))
  //   const message = await screen.findAllByAltText(/Campo obrigatório!/);
  //   expect(message).toHaveLength(2)
  // })

  // test("Should email and password be validated", async ()=> {
  //   render(<LoginForm/>)
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemple@email.com")
  //   userEvent.type(screen.getByPlaceholderText("Digite sua Senha"), "123456")
  //   userEvent.click(screen.getByRole("button"))
  //   const message = await screen.findByText(/Campo obrigatório!/);
  //   expect(message).not.toBeInTheDocument()
  // })
});

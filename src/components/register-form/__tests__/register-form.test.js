import RegisterForm from "../index";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import store from "../../../store";

describe("Testing Register Form", () => {
  test("Should name be valid", async () => {
      await act( async() => {
      
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      ); 
    })
    
    userEvent.type(screen.getByPlaceholderText("Digite seu nome"), "Ines Zistente");
    userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemplo@gmail.com");
    userEvent.type(screen.getByPlaceholderText("Digite sua senha"), "123456");
    userEvent.type(screen.getByPlaceholderText("Confirme sua senha"), "123456");
    userEvent.click(screen.getByRole("button"));

    const message = screen.queryByText(/Somente letras!/);
    
    expect(message).toBeFalsy();
  });

  // test("Should name be invalid", async () => {
  //   render(
  //     <Provider store={store}>
  //       <RegisterForm />
  //     </Provider>
  //   );
  //   userEvent.type(screen.getByPlaceholderText("Digite seu nome"), "####");
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "outra coisa");
  //   userEvent.type(screen.getByPlaceholderText("Digite sua senha"), "123456");
  //   userEvent.type(screen.getByPlaceholderText("Confirme sua senha"), "123456");

  //   userEvent.click(screen.getByRole("button"));

  //   const message =  await screen.findByText(/Somente letras!/);

  //   expect(message).toBeTruthy();
  // });

  // test("Should email be valid", () => {
  //   render(
  //     <Provider store={store}>
  //       <RegisterForm />
  //     </Provider>
  //   ); 
    
  //   userEvent.type(screen.getByPlaceholderText("Digite seu nome"), "Ines Zistente");
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemplo@gmail.com");
  //   userEvent.type(screen.getByPlaceholderText("Digite sua senha"), "123456");
  //   userEvent.type(screen.getByPlaceholderText("Confirme sua senha"), "123456");
  //   userEvent.click(screen.getByRole("button"));

  //   const message = screen.queryByText(/E-mail inválido!/);
    
  //   expect(message).toBeFalsy();
  // });

  // test("Should email be invalid", async () => {
  //   render(
  //     <Provider store={store}>
  //       <RegisterForm />
  //     </Provider>
  //   );
  //   userEvent.type(screen.getByPlaceholderText("Digite seu nome"), "Ines Zistente");
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "outra coisa");
  //   userEvent.type(screen.getByPlaceholderText("Digite sua senha"), "123456");
  //   userEvent.type(screen.getByPlaceholderText("Confirme sua senha"), "123456");
  //   userEvent.click(screen.getByRole("button"));
  //   const message =  await screen.findByText(/E-mail inválido!/);

  //   expect(message).toBeTruthy();
  // });

  // test("Should password be valid", ()=> {
  //   render(
  //     <Provider store={store}>
  //       <RegisterForm />
  //     </Provider>
  //   )
  //   userEvent.type(screen.getByPlaceholderText("Digite seu nome"), "Ines Zistente");
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemplo@gmail.com");
  //   userEvent.type(screen.getByPlaceholderText("Digite sua senha"), "123456");
  //   userEvent.type(screen.getByPlaceholderText("Confirme sua senha"), "123456");
  //   userEvent.click(screen.getByRole("button"))

  //   const message = screen.queryByText(/Campo obrigatório!/);

  //   expect(message).toBeFalsy()
  // })

  // test("Should password be invalid", async ()=> {
  //   render(
  //     <Provider store={store}>
  //       <RegisterForm />
  //     </Provider>
  //   )
  //   userEvent.type(screen.getByPlaceholderText("Digite seu nome"), "Ines Zistente");
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemplo@gmail.com");
  //   userEvent.type(screen.getByPlaceholderText("Digite sua senha"), "");
  //   userEvent.type(screen.getByPlaceholderText("Confirme sua senha"), "123456");
  //   userEvent.click(screen.getByRole("button"))

  //   const message = await screen.findByText(/Campo obrigatório!/);

  //   expect(message).toBeTruthy()
  // })

  // test("Should name, email, password and password confirmation be required", async ()=> {
  //   render(
  //     <Provider store={store}>
  //       <RegisterForm />
  //     </Provider>
  //   )
  //   userEvent.type(screen.getByPlaceholderText("Digite seu nome"), "");
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "");
  //   userEvent.type(screen.getByPlaceholderText("Digite sua senha"), "");
  //   userEvent.type(screen.getByPlaceholderText("Confirme sua senha"), "");
  //   userEvent.click(screen.getByRole("button"))

  //   const message =  await screen.findAllByText(/Campo obrigatório!/);
    
  //   expect(message).toHaveLength(4)
  // })

  // test("Should email and password be validated",  ()=> {
  //   render(
  //     <Provider store={store}>
  //       <RegisterForm />
  //     </Provider>
  //   )
  //   userEvent.type(screen.getByPlaceholderText("Digite seu nome"), "Ines Zistente");
  //   userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemplo@gmail.com");
  //   userEvent.type(screen.getByPlaceholderText("Digite sua senha"), "123456");
  //   userEvent.type(screen.getByPlaceholderText("Confirme sua senha"), "123456");
  //   userEvent.click(screen.getByRole("button"))
  //   const message =  screen.queryByText(/Campo obrigatório!/);

  //   expect(message).toBeFalsy()
  // })
});



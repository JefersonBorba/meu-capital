// import userEvent from "@testing-library/user-event";
// import { render, screen } from "@testing-library/react";

// import { Provider } from "react-redux";
// import store from "../../../store";
// import LoginForm from "../index";

// describe("Testing Login Form", () => {
//   test("Should email be valid", () => {
//     render(
//       <Provider store={store}>
//         <LoginForm />
//       </Provider>
//     );
    
//     userEvent.type(
//       screen.getByPlaceholderText("Digite seu email"),
//       "exemplo@gmail.com"
//     );
//     userEvent.type(screen.getByPlaceholderText("Digite sua Senha"), "123456");
//     userEvent.click(screen.getByRole("button"));
//     const message = screen.queryByText(/E-mail inválido!/);
    
//     expect(message).toBeFalsy();
//   });

//   test("Should email be invalid", async () => {
//     render(
//       <Provider store={store}>
//         <LoginForm />
//       </Provider>
//     );
//     userEvent.type(
//       screen.getByPlaceholderText("Digite seu email"),
//       "Outa coisa"
//     );
//     userEvent.type(screen.getByPlaceholderText("Digite seu email"), "123456");
//     userEvent.click(screen.getByRole("button"));
//     const message =  await screen.findByText(/E-mail inválido!/);

//     expect(message).toBeTruthy();
//   });

//   test("Should password be valid", ()=> {
//     render(
//       <Provider store={store}>
//         <LoginForm />
//       </Provider>
//     )
//     userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemplo@email.com")
//     userEvent.type(screen.getByPlaceholderText("Digite sua Senha"), "123456")
//     userEvent.click(screen.getByRole("button"))

//     const message = screen.queryByText(/Campo obrigatório!/);

//     expect(message).toBeFalsy()
//   })

//   test("Should password be invalid", async ()=> {
//     render(
//       <Provider store={store}>
//         <LoginForm />
//       </Provider>
//     )
//     userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemplo@email.com")
//     userEvent.type(screen.getByPlaceholderText("Digite seu email"), "123")
//     userEvent.click(screen.getByRole("button"))

//     const message = await screen.findByText(/Campo obrigatório!/);

//     expect(message).toBeTruthy()
//   })

//   test("Should email and password be required", async ()=> {
//     render(
//       <Provider store={store}>
//         <LoginForm />
//       </Provider>
//     )
//     userEvent.type(screen.getByPlaceholderText("Digite seu email"), "")
//     userEvent.type(screen.getByPlaceholderText("Digite sua Senha"), "")
//     userEvent.click(screen.getByRole("button"))

//     const message =  await screen.findAllByText(/Campo obrigatório!/);

//     expect(message).toHaveLength(2)
//   })

//   test("Should email and password be validated",  ()=> {
//     render(
//       <Provider store={store}>
//         <LoginForm />
//       </Provider>
//     )
//     userEvent.type(screen.getByPlaceholderText("Digite seu email"), "exemple@email.com")
//     userEvent.type(screen.getByPlaceholderText("Digite sua Senha"), "123456")
//     userEvent.click(screen.getByRole("button"))
//     const message =  screen.queryByText(/Campo obrigatório!/);

//     expect(message).toBeFalsy()
//   })
// });

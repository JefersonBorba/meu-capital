// import RegisterForm from "../index";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// import { Provider } from "react-redux";
// import store from "../../../store";

// import axios from "axios";

// jest.mock("axios");
// const mockedAxios = axios;

// describe("When everything works great", () => {
//   test("Should every input and button works", async () => {
//     const mockedUser = [
//       {
//         user: {
//           name: "SuperUser",
//           email: "superuser@gmail.com",
//           password: 123456,
//           passwordConfirm: 123456,
//         },
//       },
//     ];

//     mockedAxios.post.mockResolvedValueOnce({ data: { mockedUser } });

//     render(
//       <Provider store={store}>
//         <RegisterForm />
//       </Provider>
//     );
//     // userEvent.type(screen.getByPlaceholderText("Digite seu nome"), "SuperUser");
//     // userEvent.type(screen.getByPlaceholderText("Digite seu email"), "superuser@gmail.com");
//     // userEvent.type(screen.getByPlaceholderText("Digite sua senha"), "123456");
//     // userEvent.type(screen.getByPlaceholderText("Confirme sua senha"), "123456");

//     userEvent.click(screen.getByRole("button"));

//     // const message = await screen.findByText("Usuário criado com sucesso!")
//     // expect(message).toBeTruthy()
//   });
// });
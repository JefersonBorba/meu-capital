// import List from "../List";
// import Card from "../Card";
// import Pokemon from "../Pokemon";

// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// import axios from "axios";


// describe("Component Card multiple render options", () => {
//   test(
//     "Should show personal info when isShowPersonalInfo props is true", 
//     () => {
//       render(<Card isShowPersonalInfo={true}></Card>);
//       const fromScreen = screen.getByText("Meus dados pessoais");
//       expect(fromScreen).toBeInTheDocument();
//   });

//   test(
//     "Shoul not show personal info when isPersonalInfo props is false", 
//     () => {
//       render(<Card isShowPersonalInfo={false}></Card>);
//       expect(screen.queryByText("Meus dados pessoais")).not.toBeInTheDocument();
//   })
// });




// describe("List itens increasing size", () => {
//   test(
//     "Should  a new name appear as list when inserted the value on input and click on the button", 
//     async () => {
//       render(<List />);

//       userEvent.type(screen.getByRole("textbox"), "Filipe");
//       userEvent.click(screen.getByRole("button"));

//       userEvent.type(screen.getByRole("textbox"), "Pedro");
//       userEvent.click(screen.getByRole("button"));

//       const myList = await screen.findAllByRole("");

//       expect(myList).toHaveLength(2);
//   });

//   test(
//     "Should not let the user be able to click on the button when the input value is empty", 
//     () => {
//       render(<List/>)
//       expect(screen.getByRole("button")).toBeDisabled();
//   })
// });



// jest.mock("axios");
// const mockedAxios = axios;

// describe("When the user enters a valid pokemon name", () => {
//   test("Should show the pokemon abilities of that pokemon", async () => {
//     const abilities = [
//       {
//         ability: {
//           name: "Test ability 1",
//           url: "https://teste.test",
//         },
//       },
//     ];

//     mockedAxios.get.mockResolvedValueOnce({ data: { abilities } });

//     render(<Pokemon />);
//     userEvent.type(screen.getByRole("textbox"), "pikachu");
//     userEvent.click(screen.getByRole("button"));
//     const returnAbilities = await screen.findAllByRole("listitem");
//     expect(returnAbilities).toHaveLength(1);
//   });
// });

// describe("When the user enters an invalid pokemon name", () => {
//   test("Shoul show an error message in the screen", async () => {
//     mockedAxios.get.mockRejectedValueOnce(new Error());
//     render(<Pokemon/>);
//     userEvent.type(screen.getByRole('textbox'), 'invalid-pokemon');
//     userEvent.click(screen.getByRole("button"))
//     const message = await screen.findByText(/Something went wrong/);
//     expect(message).toBeInTheDocument();
//   });
// });

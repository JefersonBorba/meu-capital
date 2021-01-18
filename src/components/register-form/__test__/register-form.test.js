import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import RegisterForm from "../../../components/register-form";

jest.mock("axios");
const mockedAxios = axios;

describe("When everything works great", () => {
  test("Should every input and button works", async () => {
    const mockedUser = [
      {
        user: {
          name: "SuperUser",
          email: "superuser@gmail.com",
          password: 123456,
          passwordConfirm: 123456,
        },
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { mockedUser } });

    render(<RegisterForm />);
    userEvent.type(screen.getAllByRole("textbox"), "SuperUser");
    userEvent.type(screen.getAllByRole("textbox"), "superuser@gmail.com");
    userEvent.type(screen.getAllByRole("textbox"), "123456");
    userEvent.type(screen.getAllByRole("textbox"), "123456");

    userEvent.click(screen.getByRole("button"));
  });
});

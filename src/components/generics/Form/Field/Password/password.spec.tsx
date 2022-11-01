import "@testing-library/jest-dom/extend-expect";
import { mockUseState } from "../../../../../__mocks__/mock-react";
import { mockValidatePassword } from "./validatePassword/validatePassword.mocks";
import PasswordField from ".";
import { act, fireEvent, render, screen } from "@testing-library/react";
import pause from "../../../../../utils/pause";

describe("PasswordField", () => {
  const props = {
    password: "",
    setPassword: jest.fn(),
    isFocused: false,
    setIsFocused: jest.fn(),
  };

  const error = "";
  const setErrorMock = jest.fn();

  const changePasswordInput = async (
    newPassword: string,
    errorMessage: string
  ) => {
    mockValidatePassword.mockReturnValue(errorMessage);

    const passwordProps = {
      ...props,
      password: newPassword,
    };
    const { rerender } = render(<PasswordField {...props} />);

    const input = screen.getByTestId("password");
    fireEvent.change(input, { target: { value: newPassword } });

    expect(props.setPassword).toHaveBeenCalledWith(newPassword);

    await act(async () => {
      await pause(1);
    });

    expect(mockValidatePassword).toHaveBeenCalledWith(newPassword);
    expect(setErrorMock).toHaveBeenCalledWith(errorMessage);

    mockUseState.mockReturnValue([errorMessage, setErrorMock]);

    rerender(<PasswordField {...passwordProps} />);

    expect(screen.getByText("Password")).toBeVisible();
    expect(input).toHaveValue(newPassword);
  };

  beforeEach(() => {
    mockUseState.mockReturnValue([error, setErrorMock]);
  });

  it("renders correctly", () => {
    const { container } = render(<PasswordField {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("renders label when there is no password", () => {
    render(<PasswordField {...props} />);
    expect(screen.getByText("Password")).toBeVisible();
  });

  it("renders label and password when there is an password", async () => {
    const password = "P@ssw0rd!";
    await changePasswordInput(password, "");
  });

  describe("when password is invalid shows", () => {
    it("length error message when password is too short", async () => {
      const password = "pa";
      await changePasswordInput(password, "length");

      const errorMessage = screen.getByText(
        "Password should have 8 to 128 characters"
      );
      expect(errorMessage).toBeVisible();
    });

    it("case error message when password has only one case", async () => {
      const password = "password123";
      await changePasswordInput(password, "case");

      const errorMessage = screen.getByText(
        "Password should have at least one uppercase and one lowercase letter"
      );
      expect(errorMessage).toBeVisible();
    });

    it("number error message when password has no numbers", async () => {
      const password = "Password";
      await changePasswordInput(password, "number");

      const errorMessage = screen.getByText(
        "Password should have at least a number"
      );
      expect(errorMessage).toBeVisible();
    });

    it("special error message when password has no special characters", async () => {
      const password = "Password123";
      await changePasswordInput(password, "special");

      const errorMessage = screen.getByText(
        "Password should have at least one special character"
      );
      expect(errorMessage).toBeVisible();
    });

    it("case-number error message when password has no numbers and only one case", async () => {
      const password = "password!";
      await changePasswordInput(password, "case-number");

      const errorMessage = screen.getByText(
        "Password should have at least one uppercase and one lowercase letter, and one number"
      );
      expect(errorMessage).toBeVisible();
    });

    it("case-special error message when password has no special characters and only one case", async () => {
      const password = "password123";
      await changePasswordInput(password, "case-special");

      const errorMessage = screen.getByText(
        "Password should have at least one uppercase and one lowercase letter, and one special character"
      );
      expect(errorMessage).toBeVisible();
    });

    it("number-special error message when password has no special characters and no numbers", async () => {
      const password = "Password";
      await changePasswordInput(password, "number-special");

      const errorMessage = screen.getByText(
        "Password should have at least one number, and one special character"
      );
      expect(errorMessage).toBeVisible();
    });

    it("case-number-special error message when password has no special characters and no numbers", async () => {
      const password = "password";
      await changePasswordInput(password, "case-number-special");

      const errorMessage = screen.getByText(
        "Password should have at least one uppercase and one lowercase letter, one number, and one special character"
      );
      expect(errorMessage).toBeVisible();
    });
  });
});

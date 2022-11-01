import "@testing-library/jest-dom/extend-expect";
import { mockUseState } from "../../../../../__mocks__/mock-react";
import { mockValidateEmail } from "./validateEmail/validateEmail.mocks";
import EmailField from ".";
import { act, fireEvent, render, screen } from "@testing-library/react";
import pause from "../../../../../utils/pause";

describe("EmailField", () => {
  const props = {
    email: "",
    setEmail: jest.fn(),
    isFocused: false,
    setIsFocused: jest.fn(),
  };

  const hasError = false;
  const setHasErrorMock = jest.fn();

  const changeEmailInput = async (newEmail: string, isValid: boolean) => {
    mockValidateEmail.mockReturnValue(isValid);

    const emailProps = {
      ...props,
      email: newEmail,
    };
    const { rerender } = render(<EmailField {...props} />);

    const input = screen.getByTestId("email");
    fireEvent.change(input, { target: { value: newEmail } });

    expect(props.setEmail).toHaveBeenCalledWith(newEmail);

    await act(async () => {
      await pause(1);
    });

    expect(mockValidateEmail).toHaveBeenCalledWith(newEmail);
    expect(setHasErrorMock).toHaveBeenCalledWith(!isValid);

    rerender(<EmailField {...emailProps} />);

    expect(screen.getByText("Email")).toBeVisible();
    expect(input).toHaveValue(newEmail);
  };

  beforeEach(() => {
    mockUseState.mockReturnValue([hasError, setHasErrorMock]);
  });

  it("renders correctly", () => {
    const { container } = render(<EmailField {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("renders label when there is no email", () => {
    render(<EmailField {...props} />);
    expect(screen.getByText("Email")).toBeVisible();
  });

  it("renders label and email when there is an email", async () => {
    const email = "email@email.com";
    await changeEmailInput(email, true);
  });

  it("shows error message when email is invalid", async () => {
    const email = "email";
    await changeEmailInput(email, false);

    const errorMessage = screen.getByText("Please add a valid email");
    expect(errorMessage).toBeVisible();
  });
});

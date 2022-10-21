import "@testing-library/jest-dom/extend-expect";
import { mockUseState } from "../../__mocks__/mock-react";
import { mockUseAuth } from "@hooks/useAuth/useAuth.mocks";
import { mockUseLayout } from "@components/common/Layout/useLayout/useLayout.mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from ".";

describe("SignUp", () => {
  const mockSignUp = jest.fn();

  const fields = {
    password: "",
    email: "",
    name: "",
  };
  const mockSetFields = jest.fn();

  beforeEach(() => {
    mockUseAuth.mockReturnValue({ signUp: mockSignUp });
    mockUseState.mockReturnValue([fields, mockSetFields]);
    mockUseLayout.mockReturnValue({
      isBackgroundFocused: false,
      setBackgroundFocus: jest.fn(),
    });
  });

  it("renders correctly", () => {
    const { container } = render(<SignUp />);
    expect(container).toMatchSnapshot();
  });

  describe("renders correct fields", () => {
    beforeEach(() => {
      render(<SignUp />);
    });

    it("button", () => {
      const button = screen.getByText("Sign up");
      expect(button).toBeVisible();
    });

    it("forgotPassword", () => {
      const forgotPassword = screen.queryByText("Forgot your password?");
      expect(forgotPassword).toBeFalsy();
    });

    it("link message", () => {
      const linkMessage = screen.getByText("Already have an account?");
      expect(linkMessage).toBeVisible();
    });

    it("link title", () => {
      const linkTitle = screen.getByText("Sign in");
      expect(linkTitle).toBeVisible();
    });

    it("email field", () => {
      const emailTitle = screen.getByText("Email");
      expect(emailTitle).toBeVisible();
    });

    it("password field", () => {
      const passwordTitle = screen.getByText("Password");
      expect(passwordTitle).toBeVisible();
    });

    it("name field", () => {
        const nameTitle = screen.getByText("Name");
        expect(nameTitle).toBeVisible();
      });
  });

  it("link should have correct url", () => {
    render(<SignUp />);
    const linkTitle = screen.getByText("Sign in");
    expect(linkTitle).toHaveAttribute("href", "/auth/sign-in");
  });

  describe("should call setFields when", () => {
    it("email field changes", () => {
      render(<SignUp />);

      const emailInput = screen.getByTestId("email");
      const email = "email@email.com";
      fireEvent.change(emailInput, { target: { value: email } });

      expect(mockSetFields).toHaveBeenCalledWith({ ...fields, email });
    });

    it("password field changes", () => {
      render(<SignUp />);

      const passwordInput = screen.getByTestId("password");
      const password = "email@email.com";
      fireEvent.change(passwordInput, { target: { value: password } });

      expect(mockSetFields).toHaveBeenCalledWith({ ...fields, password });
    });


    it("name field changes", () => {
        render(<SignUp />);
  
        const nameInput = screen.getByTestId("name");
        const name = "Name";
        fireEvent.change(nameInput, { target: { value: name } });
  
        expect(mockSetFields).toHaveBeenCalledWith({ ...fields, name });
      });
  });

  it("calls signUp when button is clicked", () => {
    render(<SignUp />);

    const button = screen.getByText("Sign up");
    fireEvent.click(button);

    expect(mockSignUp).toHaveBeenCalledTimes(1);
  });
});

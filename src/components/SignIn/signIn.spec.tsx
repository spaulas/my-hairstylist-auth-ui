import "@testing-library/jest-dom/extend-expect";
import { mockUseState } from "../../__mocks__/mock-react";
import { mockUseAuth } from "@hooks/useAuth/useAuth.mocks";
import { mockUseLayout } from "@components/common/Layout/useLayout/useLayout.mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from ".";

describe("SignIn", () => {
  const mockSignIn = jest.fn();

  const fields = {
    password: "",
    email: "",
  };
  const mockSetFields = jest.fn();

  beforeEach(() => {
    mockUseAuth.mockReturnValue({ signIn: mockSignIn });
    mockUseState.mockReturnValue([fields, mockSetFields]);
    mockUseLayout.mockReturnValue({
      isBackgroundFocused: false,
      setBackgroundFocus: jest.fn(),
    });
  });

  it("renders correctly", () => {
    const { container } = render(<SignIn />);
    expect(container).toMatchSnapshot();
  });

  describe("renders correct fields", () => {
    beforeEach(() => {
      render(<SignIn />);
    });

    it("button", () => {
      const button = screen.getByText("Login");
      expect(button).toBeVisible();
    });

    it("forgotPassword", () => {
      const forgotPassword = screen.getByText("Forgot your password?");
      expect(forgotPassword).toBeVisible();
    });

    it("link message", () => {
      const linkMessage = screen.getByText("Don't have an account?");
      expect(linkMessage).toBeVisible();
    });

    it("link title", () => {
      const linkTitle = screen.getByText("Sign up");
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
  });

  it("link should have correct url", () => {
    render(<SignIn />);
    const linkTitle = screen.getByText("Sign up");
    expect(linkTitle).toHaveAttribute("href", "/auth/sign-up");
  });

  describe("should call setFields when", () => {
    it("email field changes", () => {
      render(<SignIn />);

      const emailInput = screen.getByTestId("email");
      const email = "email@email.com";
      fireEvent.change(emailInput, { target: { value: email } });

      expect(mockSetFields).toHaveBeenCalledWith({ ...fields, email });
    });

    it("password field changes", () => {
      render(<SignIn />);

      const passwordInput = screen.getByTestId("password");
      const password = "email@email.com";
      fireEvent.change(passwordInput, { target: { value: password } });

      expect(mockSetFields).toHaveBeenCalledWith({ ...fields, password });
    });
  });

  it("calls signIn when button is clicked", () => {
    render(<SignIn />);

    const button = screen.getByText("Login");
    fireEvent.click(button);

    expect(mockSignIn).toHaveBeenCalledTimes(1);
  });
});

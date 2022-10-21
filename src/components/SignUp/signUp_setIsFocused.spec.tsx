import { mockUseAuth } from "@hooks/useAuth/useAuth.mocks";
import { mockUseLayout } from "@components/common/Layout/useLayout/useLayout.mocks";
import {
  mockSetIsFocused,
  isFocused,
} from "@components/generics/Form/form.mocks";
import SignUp from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SignUp - setIsFocused", () => {
  beforeEach(() => {
    mockUseAuth.mockReturnValue({ signIn: jest.fn() });
    mockUseLayout.mockReturnValue({
      isBackgroundFocused: false,
      setBackgroundFocus: jest.fn(),
    });
  });

  describe("should call setIsFocused when", () => {
    it("email field is focused", () => {
      render(<SignUp />);

      const email = screen.getByTestId("email");
      fireEvent.focus(email);

      expect(mockSetIsFocused).toHaveBeenCalledWith({
        ...isFocused,
        email: true,
      });
    });

    it("password field is focused", () => {
      render(<SignUp />);

      const password = screen.getByTestId("password");
      fireEvent.focus(password);

      expect(mockSetIsFocused).toHaveBeenCalledWith({
        ...isFocused,
        password: true,
      });
    });

    it("name field is focused", () => {
      render(<SignUp />);

      const name = screen.getByTestId("name");
      fireEvent.focus(name);

      expect(mockSetIsFocused).toHaveBeenCalledWith({
        ...isFocused,
        name: true,
      });
    });
  });
});

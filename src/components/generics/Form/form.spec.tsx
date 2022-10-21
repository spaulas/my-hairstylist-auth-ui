import "@testing-library/jest-dom/extend-expect";
import { mockUseState } from "../../../__mocks__/mock-react";
import { mockUseLayout } from "@components/common/Layout/useLayout/useLayout.mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

describe("Form", () => {
  const childrenText = "Children component";

  const props = {
    children: () => <div>{childrenText}</div>,
    handleSubmit: jest.fn(),
    buttonTitle: "Button title",
    showForgotPassword: false,
    link: { message: "link message", title: "link title", url: "/sign-in" },
  };

  const isFocused = {};
  const mockSetIsFocused = jest.fn();

  const isBackgroundFocused = false;
  const mockSetBackgroundFocus = jest.fn();

  beforeEach(() => {
    mockUseLayout.mockReturnValue({
      isBackgroundFocused,
      setBackgroundFocus: mockSetBackgroundFocus,
    });
    mockUseState.mockReturnValue([isFocused, mockSetIsFocused]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { container } = render(<Form {...props} />);
    expect(container).toMatchSnapshot();
  });

  describe("setBackgroundFocus", () => {
    it("should not be called when !isFocused and !isBackgroundFocused", () => {
      render(<Form {...props} />);
      expect(mockSetBackgroundFocus).not.toHaveBeenCalled();
    });

    it("should be called when isFocused and !isBackgroundFocused", () => {
      mockUseState.mockReturnValue([{ email: true }, mockSetIsFocused]);
      render(<Form {...props} />);
      expect(mockSetBackgroundFocus).toHaveBeenCalledWith(true);
    });
  });

  describe("should render correct elements", () => {
    it("title", () => {
      render(<Form {...props} />);
      const title = screen.getByText("My Hairstylist");
      expect(title).toBeVisible();
    });

    it("children", () => {
      render(<Form {...props} />);
      const children = screen.getByText(childrenText);
      expect(children).toBeVisible();
    });

    it("button", () => {
      render(<Form {...props} />);
      const button = screen.getByText(props.buttonTitle);
      expect(button).toBeVisible();
    });

    describe("forgotPassword", () => {
      it("should be visible when showForgotPassword", () => {
        const showForgotPasswordProps = {
          ...props,
          showForgotPassword: true,
        };
        render(<Form {...showForgotPasswordProps} />);
        const forgotPassword = screen.getByText("Forgot your password?");
        expect(forgotPassword).toBeVisible();
      });

      it("should not be visible when !showForgotPassword", () => {
        render(<Form {...props} />);
        const forgotPassword = screen.queryByText("Forgot your password?");
        expect(forgotPassword).toBeFalsy();
      });
    });

    it("message", () => {
      render(<Form {...props} />);
      const message = screen.getByText(props.link.message);
      expect(message).toBeVisible();
    });

    it("link", () => {
      render(<Form {...props} />);
      const linkTitle = screen.getByText(props.link.title);
      expect(linkTitle).toBeVisible();
      expect(linkTitle).toHaveAttribute("href", props.link.url);
    });
  });

  it("should call handleSubmit when button is clicked", () => {
    render(<Form {...props} />);
    const button = screen.getByText(props.buttonTitle);

    fireEvent.click(button);
    expect(props.handleSubmit).toHaveBeenCalled();
  });

  describe("title className", () => {
    it("should have form--title__focused when isAnyFocused", () => {
      render(<Form {...props} />);
      const title = screen.getByText("My Hairstylist");

      expect(title).toHaveClass("form--title");
      expect(title).not.toHaveClass("form--title__focused");
    });

    it("should not have form--title__focused when !isAnyFocused", () => {
      mockUseState.mockReturnValue([{ email: true }, mockSetIsFocused]);
      render(<Form {...props} />);
      const title = screen.getByText("My Hairstylist");

      expect(title).toHaveClass("form--title");
      expect(title).toHaveClass("form--title__focused");
    });
  });
});

import "@testing-library/jest-dom/extend-expect";
import FormField from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("FormField", () => {
  const props = {
    label: "Label",
    errorMessage: "Error message",
    onChange: jest.fn(),
    value: "",
    type: "name",
    hasError: false,
    setIsFocused: jest.fn(),
    isFocused: false,
  };

  const isFocusedProps = {
    ...props,
    isFocused: true,
  };

  const withValueProps = {
    ...props,
    value: "Value",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { container } = render(<FormField {...props} />);
    expect(container).toMatchSnapshot();
  });

  describe("label", () => {
    it("should not have form--label__focused when !isFocused and !value", () => {
      render(<FormField {...props} />);

      const label = screen.getByText(props.label);
      expect(label).toHaveClass("form--label");
      expect(label).not.toHaveClass("form--label__focused");
    });

    describe("should have form--label__focused when", () => {
      it("isFocused and !value", () => {
        const isFocusedProps = {
          ...props,
          isFocused: true,
        };
        render(<FormField {...isFocusedProps} />);

        const label = screen.getByText(props.label);
        expect(label).toHaveClass("form--label");
        expect(label).toHaveClass("form--label__focused");
      });

      it("!isFocused and value", () => {
        const withValueProps = {
          ...props,
          value: "Value",
        };
        render(<FormField {...withValueProps} />);

        const label = screen.getByText(props.label);
        expect(label).toHaveClass("form--label");
        expect(label).toHaveClass("form--label__focused");
      });
    });
  });

  describe("input", () => {
    let input: HTMLElement;
    let rerender: (ui: React.ReactElement) => void;

    beforeEach(() => {
      ({ rerender } = render(<FormField {...props} />));
      input = screen.getByTestId(props.type);
    });

    it("should have type as props.type", () => {
      expect(input).toHaveAttribute("type", props.type);
    });

    it("should have name as props.type", () => {
      expect(input).toHaveAttribute("name", props.type);
    });

    it("should have id as props.type", () => {
      expect(input).toHaveAttribute("id", props.type);
    });

    it("should have value as props.value", () => {
      rerender(<FormField {...withValueProps} />);
      input = screen.getByTestId(withValueProps.type);

      expect(input).toHaveAttribute("value", withValueProps.value);
    });

    describe("className", () => {
      it("should not have form--input__focused when !isFocused and !value", () => {
        expect(input).toHaveClass("form--input");
        expect(input).not.toHaveClass("form--input__focused");
      });

      describe("should have form--input__focused when", () => {
        it("isFocused and !value", () => {
          rerender(<FormField {...isFocusedProps} />);
          input = screen.getByTestId(isFocusedProps.type);

          expect(input).toHaveClass("form--input");
          expect(input).toHaveClass("form--input__focused");
        });

        it("!isFocused and value", () => {
          rerender(<FormField {...withValueProps} />);
          input = screen.getByTestId(withValueProps.type);

          expect(input).toHaveClass("form--input");
          expect(input).toHaveClass("form--input__focused");
        });
      });
    });

    describe("should call setIsFocused", () => {
      it("with true when focusing the input", () => {
        fireEvent.focus(input);
        expect(props.setIsFocused).toHaveBeenCalledWith(true);
      });

      it("with false when blurring the input", () => {
        fireEvent.focus(input);
        fireEvent.blur(input);
        expect(props.setIsFocused).toHaveBeenNthCalledWith(2, false);
      });
    });

    it("should call onChange when input changes", () => {
      const newValue = "new value";
      fireEvent.change(input, { target: { value: newValue } });

      expect(props.onChange).toHaveBeenCalledWith(newValue);
    });
  });

  it("should show error message when hasError", () => {
    const errorProps = { ...props, hasError: true };
    render(<FormField {...errorProps} />);

    expect(screen.getByText(props.errorMessage)).toBeVisible();
  });
});

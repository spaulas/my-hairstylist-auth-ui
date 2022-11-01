import "@testing-library/jest-dom/extend-expect";
import Error from ".";
import { render, screen } from "@testing-library/react";

describe("Error", () => {
  const props = {
    showError: false,
    message: "Message",
  };

  it("renders correctly", () => {
    const { container } = render(<Error {...props} />);
    expect(container).toMatchSnapshot();
  });

  describe("className", () => {
    it("should not have error__visible when !showError", () => {
      render(<Error {...props} />);
      const error = screen.getByText(props.message);

      expect(error).toHaveClass("error");
      expect(error).not.toHaveClass("error__visible");
    });

    it("should have error__visible when showError", () => {
      const showErrorProps = { ...props, showError: true };
      render(<Error {...showErrorProps} />);
      const error = screen.getByText(props.message);

      expect(error).toHaveClass("error");
      expect(error).toHaveClass("error__visible");
    });
  });
});

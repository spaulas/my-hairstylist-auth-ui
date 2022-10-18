import "@testing-library/jest-dom/extend-expect";
import Link from ".";
import { render, screen } from "@testing-library/react";

describe("Link", () => {
  const props = {
    title: "Sign up",
    url: "/auth/sign-up",
    className: "className",
  };

  it("renders correctly", () => {
    const { container } = render(<Link {...props} />);
    expect(container).toMatchSnapshot();
  });

  describe("className", () => {
    it("should have props.className when defined", () => {
      render(<Link {...props} />);
      const link = screen.getByRole("link");

      expect(link).toHaveClass("link");
      expect(link).toHaveClass(props.className);
    });

    it("should be empty when defined", () => {
      const noClassName = { ...props, className: undefined };
      render(<Link {...noClassName} />);
      const link = screen.getByRole("link");

      expect(link).toHaveClass("link");
    });
  });

  it("should display title", () => {
    render(<Link {...props} />);
    const title = screen.getByText(props.title);
    expect(title).toBeVisible();
  });

  it("should have href", () => {
    render(<Link {...props} />);
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", props.url);
  });
});

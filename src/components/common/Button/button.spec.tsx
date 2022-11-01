import Button from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  const props = {
    title: "Title",
    onClick: jest.fn(),
    type: "primary" as const,
  };

  it("renders correctly", () => {
    const { container } = render(<Button {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("calls onClick when is clicked", () => {
    render(<Button {...props} />);

    const button = screen.getByText(props.title);
    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});

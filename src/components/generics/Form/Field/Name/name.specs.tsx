import "@testing-library/jest-dom/extend-expect";
import { mockUseState } from "../../../../../__mocks__/mock-react";
import NameField from ".";
import { act, fireEvent, render, screen } from "@testing-library/react";
import pause from "../../../../../utils/pause";

describe("NameField", () => {
  const props = {
    name: "",
    setName: jest.fn(),
    isFocused: false,
    setIsFocused: jest.fn(),
  };

  const changeNameInput = (newName: string) => {
    const nameProps = {
      ...props,
      name: newName,
    };
    const { rerender } = render(<NameField {...props} />);

    const input = screen.getByTestId("name");
    fireEvent.change(input, { target: { value: newName } });

    expect(props.setName).toHaveBeenCalledWith(newName);

    rerender(<NameField {...nameProps} />);

    expect(screen.getByText("Name")).toBeVisible();
    expect(input).toHaveValue(newName);
  };

  it("renders correctly", () => {
    const { container } = render(<NameField {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("renders label when there is no name", () => {
    render(<NameField {...props} />);
    expect(screen.getByText("Name")).toBeVisible();
  });

  it("renders label and email when there is an name", () => {
    const name = "Name";
    changeNameInput(name);
  });
});

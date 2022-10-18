import "@testing-library/jest-dom/extend-expect";
import { useLayoutMock } from "./useLayout/useLayout.mocks";
import Layout from ".";
import { render, screen } from "@testing-library/react";

describe("Layout", () => {
  const hookValues = {
    isBackgroundFocused: true,
    setBackgroundFocus: jest.fn(),
  };

  const childrenText = "Layout Children";

  const renderLayout = () =>
    render(
      <Layout>
        <div>{childrenText}</div>
      </Layout>
    );

  beforeEach(() => {
    useLayoutMock.mockReturnValue(hookValues);
  });

  it("renders correctly", () => {
    const { container } = renderLayout();
    expect(container).toMatchSnapshot();
  });

  describe("layout--box should", () => {
    it("have layout--box__focused if isBackgroundFocused", () => {
      renderLayout();
      expect(screen.getByTestId("layoutBox")).toHaveClass(
        "layout--box__focused"
      );
    });

    it("not have layout--box__focused if !isBackgroundFocused", () => {
      const backgroundUnfocused = { ...hookValues, isBackgroundFocused: false };
      useLayoutMock.mockReturnValue(backgroundUnfocused);

      renderLayout();
      expect(screen.getByTestId("layoutBox")).not.toHaveClass(
        "layout--box__focused"
      );
    });
  });

  it("renders children components", () => {
    renderLayout();
    expect(screen.getByText(childrenText)).toBeTruthy();
  });
});

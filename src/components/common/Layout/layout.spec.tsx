import "@testing-library/jest-dom/extend-expect";
import { mockUseLayout } from "./useLayout/useLayout.mocks";
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
    mockUseLayout.mockReturnValue(hookValues);
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
      mockUseLayout.mockReturnValue(backgroundUnfocused);

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

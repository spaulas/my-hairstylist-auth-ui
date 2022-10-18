import {
  mockDispatch,
  mockSelector,
} from "../../../../__mocks__/mock-react-redux";
import useLayout from "./index.hooks";
import layoutActions from "@actions/layout/layout.action";

describe("useLayout", () => {
  const selectorValues = {
    Layout: {
      isBackgroundFocused: false,
    },
  };

  beforeEach(() => {
    mockSelector.mockImplementation((cb) => cb({ ...selectorValues }));
  });

  describe("isBackgroundFocused", () => {
    it("should be false when Layout.isBackgroundFocused is false", () => {
      const result = useLayout();
      expect(result.isBackgroundFocused).toBeFalsy();
    });

    it("should be true when Layout.isBackgroundFocused is true", () => {
      const isFocusedSelectorValues = {
        Layout: { ...selectorValues.Layout, isBackgroundFocused: true },
      };
      mockSelector.mockImplementation((cb) => cb({ ...isFocusedSelectorValues }));

      const result = useLayout();
      expect(result.isBackgroundFocused).toBeTruthy();
    });
  });

  it("setBackgroundFocus should call setBackgroundFocus action", () => {
    const result = useLayout();
    const focused = true;

    result.setBackgroundFocus(focused);
    expect(mockDispatch).toHaveBeenCalledWith(
      layoutActions.setBackgroundFocus(focused)
    );
  });
});

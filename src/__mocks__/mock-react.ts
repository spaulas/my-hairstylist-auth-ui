export const mockUseState = jest.fn();
export const mockUseCallBack = jest.fn((fn) => fn);

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: mockUseState,
  useCallback: mockUseCallBack,
}));

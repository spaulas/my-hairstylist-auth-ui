export const mockUseLayout = jest.fn();

jest.mock("./index.hooks.ts", () => mockUseLayout);

export const mockUseAuth = jest.fn();

jest.mock("./index.hooks.ts", () => mockUseAuth);

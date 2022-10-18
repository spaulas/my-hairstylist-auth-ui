export const useLayoutMock = jest.fn();

jest.mock("./index.hooks.ts", () => useLayoutMock);

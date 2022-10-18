export const mockValidateEmail = jest.fn();

jest.mock("./index.ts", () => mockValidateEmail);

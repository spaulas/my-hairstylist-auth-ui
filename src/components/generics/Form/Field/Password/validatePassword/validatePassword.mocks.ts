export const mockValidatePassword = jest.fn();

jest.mock("./index.ts", () => mockValidatePassword);

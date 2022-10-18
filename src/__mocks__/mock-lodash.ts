export const mockDebounce = jest.fn((fn) => console.log('MOCK DEBOUTNCE'));

jest.mock("lodash.debounce", () => ({
  ...jest.requireActual("lodash.debounce"),
  debounce: mockDebounce,
}));

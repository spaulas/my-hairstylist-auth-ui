export const mockSetIsFocused = jest.fn();
export const isFocused = { email: false, password: false };

const Form = ({ children }: any) => {
  return <div>{children(isFocused, mockSetIsFocused)}</div>;
};

jest.mock("./index.tsx", () => ({
  __esModule: true,
  default: Form,
  Form: Form,
}));

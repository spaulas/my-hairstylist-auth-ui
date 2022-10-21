import { mockDispatch } from "@mocks/mock-react-redux";
import useAuth from "./index.hooks";
import actions from "@actions/auth/auth.action";

describe("useAuth", () => {
  const email = "email@email.com";
  const password = "P@ssw0rd!";
  const name = "Name";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("signUp should call signUpRequest", () => {
    const result = useAuth();
    result.signUp({ email, password, name });

    expect(mockDispatch).toHaveBeenCalledWith(
      actions.signUpRequest({ email, password, name })
    );
  });

  it("signIn should call signUpRequest", () => {
    const result = useAuth();
    result.signIn({ email, password });

    expect(mockDispatch).toHaveBeenCalledWith(
      actions.signInRequest({ email, password })
    );
  });
});

import { AuthGenericError, AuthEmailAlreadyExistsError } from "./auth";

describe("Auth Errors", () => {
  const message = "message";

  it("AuthGenericError", () => {
    const authGenericError = new AuthGenericError(message);

    expect(authGenericError.message).toBe(message);
    expect(authGenericError.name).toBe("AuthGenericError");
  });

  it("AuthEmailAlreadyExistsError", () => {
    const authEmailAlreadyExistsError = new AuthEmailAlreadyExistsError(message);

    expect(authEmailAlreadyExistsError.message).toBe(message);
    expect(authEmailAlreadyExistsError.name).toBe("AuthEmailAlreadyExistsError");
  });
});

import { mockPost } from "@mocks/mock-axios";
import { handleAPIError, signUpApiRequest, signInApiRequest } from ".";
import { AuthGenericError, AuthEmailAlreadyExistsError } from "../errors/auth";
import { ConnectionError } from "../errors/general";

describe("Auth API", () => {
  it("signUpApiRequest", async () => {
    const payload = {
      email: "email@email.com",
      password: "P@ssw0rd!",
      name: "Name",
    };
    const endpoint = "/signup";

    await signUpApiRequest(payload);
    expect(mockPost).toHaveBeenCalledWith(endpoint, payload);
  });

  it("signInApiRequest", async () => {
    const payload = {
      email: "email@email.com",
      password: "P@ssw0rd!",
    };
    const endpoint = "/signin";

    await signInApiRequest(payload);
    expect(mockPost).toHaveBeenCalledWith(endpoint, payload);
  });

  describe("handleAPIError", () => {
    it("when errors status is 422", () => {
      const error = {
        response: {
          data: {
            error: "422",
            code: 422,
          },
          status: 422,
        },
      };

      const expectedResult = new AuthEmailAlreadyExistsError(
        error.response.data.code
      );
      const result = handleAPIError(error);
      expect(result).toStrictEqual(expectedResult);
    });

    it("when error has response but no error", () => {
      const error = {
        response: {
          status: 422,
        },
      };

      const expectedResult = new AuthGenericError(error.response);
      const result = handleAPIError(error);
      expect(result).toStrictEqual(expectedResult);
    });

    it("when error has no response", () => {
      const error = {};

      const expectedResult = new ConnectionError(error);
      const result = handleAPIError(error);
      expect(result).toStrictEqual(expectedResult);
    });
  });
});

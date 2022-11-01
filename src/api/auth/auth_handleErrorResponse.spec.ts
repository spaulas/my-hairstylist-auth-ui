import "@mocks/mock-axios";
import mockAxios from "jest-mock-axios";
import { signUpApiRequest, signInApiRequest } from ".";
import { AuthGenericError, AuthEmailAlreadyExistsError } from "../errors/auth";
import { ConnectionError } from "../errors/general";

describe("Auth API", () => {
  beforeEach(() => {
    mockAxios.post.mockResolvedValueOnce({ data: {} });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe("signUpApiRequest", () => {
    const payload = {
      email: "email@email.com",
      password: "P@ssw0rd!",
      name: "Name",
    };

    it("with connection error", async () => {
      const receivedError = {};
      mockAxios.post.mockRejectedValueOnce(receivedError);

      try {
        await signUpApiRequest(payload);
      } catch (error) {
        const connectionError = new ConnectionError(receivedError);
        expect(error).toStrictEqual(connectionError);
      }
    });

    it("with auth error", async () => {
      const receivedError = {
        response: {},
      };
      mockAxios.post.mockRejectedValueOnce(receivedError);

      try {
        await signUpApiRequest(payload);
      } catch (error) {
        const authError = new AuthGenericError(receivedError);
        expect(error).toStrictEqual(authError);
      }
    });

    it("with auth error", async () => {
      const receivedError = {
        response: {
          data: {
            error: 422,
            code: 422,
          },
          status: 422,
        },
      };
      mockAxios.post.mockRejectedValueOnce(receivedError);

      try {
        await signUpApiRequest(payload);
      } catch (error) {
        const authError = new AuthEmailAlreadyExistsError(422);
        expect(error).toStrictEqual(authError);
      }
    });
  });

  describe("signInApiRequest", () => {
    const payload = {
      email: "email@email.com",
      password: "P@ssw0rd!",
    };

    it("with connection error", async () => {
      const receivedError = {};
      mockAxios.post.mockRejectedValueOnce(receivedError);

      try {
        await signInApiRequest(payload);
      } catch (error) {
        const connectionError = new ConnectionError(receivedError);
        expect(error).toStrictEqual(connectionError);
      }
    });

    it("with auth error", async () => {
      const receivedError = {
        response: {},
      };
      mockAxios.post.mockRejectedValueOnce(receivedError);

      try {
        await signInApiRequest(payload);
      } catch (error) {
        const authError = new AuthGenericError(receivedError);
        expect(error).toStrictEqual(authError);
      }
    });

    it("with auth error", async () => {
      const receivedError = {
        response: {
          data: {
            error: 422,
            code: 422,
          },
          status: 422,
        },
      };
      mockAxios.post.mockRejectedValueOnce(receivedError);

      try {
        await signInApiRequest(payload);
      } catch (error) {
        const authError = new AuthEmailAlreadyExistsError(422);
        expect(error).toStrictEqual(authError);
      }
    });
  });
});

import { ConnectionError } from "./general";

describe("General Errors", () => {
  const message = "message";

  it("ConnectionError", () => {
    const connectionError = new ConnectionError(message);

    expect(connectionError.message).toBe(message);
    expect(connectionError.name).toBe("ConnectionError");
  });
});

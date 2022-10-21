import validatePassword from ".";

describe("validatePassword", () => {
  describe("returns false when", () => {
    it("has less than 8 characters", () => {
      const result = validatePassword("passw");
      expect(result).toBe("length");
    });

    it("has more than 128 characters", () => {
      const result = validatePassword(
        "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678900123456789"
      );
      expect(result).toBe("length");
    });

    it("has only lower case characters", () => {
      const result = validatePassword("password123!");
      expect(result).toBe("case");
    });

    it("has only upper case characters", () => {
      const result = validatePassword("PASSWORD123!");
      expect(result).toBe("case");
    });

    it("has no numbers", () => {
      const result = validatePassword("Password!");
      expect(result).toBe("number");
    });

    it("has no special characters", () => {
      const result = validatePassword("Password123");
      expect(result).toBe("special");
    });

    it("is missing upper case and a number", () => {
      const result = validatePassword("password!");
      expect(result).toBe("case-number");
    });

    it("is missing lower case and a number", () => {
      const result = validatePassword("PASSWORD!");
      expect(result).toBe("case-number");
    });

    it("is missing upper case and a special character", () => {
      const result = validatePassword("password123");
      expect(result).toBe("case-special");
    });

    it("is missing lower case and a special character", () => {
      const result = validatePassword("PASSWORD123");
      expect(result).toBe("case-special");
    });

    it("is missing number and special character", () => {
      const result = validatePassword("Password");
      expect(result).toBe("number-special");
    });

    it("is missing upper case, numbers and special character", () => {
      const result = validatePassword("password");
      expect(result).toBe("case-number-special");
    });

    it("is missing lower case, numbers and special character", () => {
      const result = validatePassword("PASSWORD");
      expect(result).toBe("case-number-special");
    });
  });

  it("returns true to a valid password", () => {
    const result = validatePassword("P@ssw0rd!");
    expect(result).toBe("");
  });
});

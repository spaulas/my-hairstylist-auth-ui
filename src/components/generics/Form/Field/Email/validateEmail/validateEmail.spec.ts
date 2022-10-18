import validateEmail from ".";

describe("validateEmail", () => {
  describe("returns false when", () => {
    it("there is a special character", () => {
      const result = validateEmail("ema$l@email.com");
      expect(result).toBeFalsy();
    });

    it("there is no @", () => {
      const result = validateEmail("emailemail.com");
      expect(result).toBeFalsy();
    });

    it("there is no .", () => {
      const result = validateEmail("email@emailcom");
      expect(result).toBeFalsy();
    });

    it("there is a . but nothing after", () => {
      const result = validateEmail("email@email.");
      expect(result).toBeFalsy();
    });

    it("there is a . but there is only one character after", () => {
      const result = validateEmail("email@email.c");
      expect(result).toBeFalsy();
    });

    it("there is a . but there is more than 3 characters after", () => {
      const result = validateEmail("email@email.comm");
      expect(result).toBeFalsy();
    });

    it("there is nothing before the @", () => {
      const result = validateEmail("@email.com");
      expect(result).toBeFalsy();
    });
  });

  it("returns true to a valid email", () => {
    const result = validateEmail("email@email.com");
    expect(result).toBeTruthy();
  });
});

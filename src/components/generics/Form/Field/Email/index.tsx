import React, { useState, useMemo } from "react";
import FormField from "..";
import debounce from "lodash.debounce";

const EmailField = ({ isFocused, setIsFocused }: any) => {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleEmailChange = ({ target: { value } }: any) => {
    setEmail(value);
    debouncedEmailValidation(value);
  };

  const debouncedEmailValidation = useMemo(
    () => debounce(validateEmail, 300),
    []
  );

  function validateEmail(email: string) {
    const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    setHasError(!isValid);
  }

  return (
    <FormField
      label="Email"
      errorMessage="Please add a valid email"
      hasError={hasError}
      type="email"
      value={email}
      onChange={handleEmailChange}
      isFocused={isFocused["email"]}
      setIsFocused={(value: any) =>
        setIsFocused({ ...isFocused, email: value })
      }
    />
  );
};

export default EmailField;

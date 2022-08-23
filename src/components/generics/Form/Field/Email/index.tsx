import React, { useState } from "react";
import FormField from "..";

const EmailField = ({ isFocused, setIsFocused }: any) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = ({ target: { value } }: any) => setEmail(value);

  return (
    <FormField
      label="Email"
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

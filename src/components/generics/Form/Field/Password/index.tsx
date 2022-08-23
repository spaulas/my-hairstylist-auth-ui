import React, { useState } from "react";
import FormField from "..";

const PasswordField = ({ isFocused, setIsFocused }: any) => {
  const [password, setPassword] = useState("");
  const handlePasswordChange = ({ target: { value } }: any) =>
    setPassword(value);

  return (
    <FormField
      label="Password"
      type="password"
      value={password}
      onChange={handlePasswordChange}
      isFocused={isFocused["password"]}
      setIsFocused={(value: any) =>
        setIsFocused({ ...isFocused, password: value })
      }
    />
  );
};

export default PasswordField;

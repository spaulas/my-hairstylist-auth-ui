import React, { useState } from "react";
import FormField from "..";

const NameField = ({ isFocused, setIsFocused }: any) => {
  const [name, setName] = useState("");
  const handleNameChange = ({ target: { value } }: any) => setName(value);

  return (
    <FormField
      label="Name"
      type="name"
      value={name}
      onChange={handleNameChange}
      isFocused={isFocused["name"]}
      setIsFocused={(value: any) => setIsFocused({ ...isFocused, name: value })}
    />
  );
};

export default NameField;

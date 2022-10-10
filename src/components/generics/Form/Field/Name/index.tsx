import React from "react";
import FormField from "..";

const NameField = ({ name, setName, isFocused, setIsFocused }: any) => {
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

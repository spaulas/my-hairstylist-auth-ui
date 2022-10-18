import FormField from "..";
import { NameProps } from "./name.types";

const NameField = ({
  name,
  setName,
  isFocused,
  setIsFocused,
}: NameProps): React.ReactElement => {
  const handleNameChange = (value: string) => setName(value);

  return (
    <FormField
      label="Name"
      type="name"
      value={name}
      onChange={handleNameChange}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
    />
  );
};

export default NameField;

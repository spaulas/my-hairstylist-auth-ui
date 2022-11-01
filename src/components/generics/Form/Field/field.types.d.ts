export type FieldProps = {
  label: string;
  errorMessage?: string;
  onChange: (value: string) => void;
  value: string;
  type: string;
  hasError?: boolean;
  setIsFocused: (focused: boolean) => void;
  isFocused: boolean;
};

import FormError from "../Error";
import { FieldProps } from "./field.types";
import "./field.styles.scss";
import { InputElement } from "@type/global";

const FormField = ({
  label,
  errorMessage,
  onChange,
  value,
  type,
  hasError,
  setIsFocused,
  isFocused,
}: FieldProps): React.ReactElement => {
  const isLabelOnTop = isFocused || value;

  return (
    <>
      <div className="form--item">
        <p
          className={`form--label ${
            isLabelOnTop ? "form--label__focused" : ""
          }`}
        >
          {label}
        </p>
        <input
          type={type}
          name={type}
          id={type}
          data-testid={type}
          className={`form--input ${
            isLabelOnTop ? "form--input__focused" : ""
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={({ target: { value } }: InputElement) => onChange(value)}
          value={value}
        />
        <FormError showError={hasError} message={errorMessage} />
      </div>
    </>
  );
};

export default FormField;

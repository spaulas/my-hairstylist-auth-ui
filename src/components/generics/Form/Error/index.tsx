import { ErrorProps } from "./error.types";
import "./error.styles.scss";

const FormError = ({ showError, message }: ErrorProps): React.ReactElement => {
  return (
    <p className={`error ${showError ? "error__visible" : ""}`}>{message}</p>
  );
};

export default FormError;

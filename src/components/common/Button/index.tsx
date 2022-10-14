import { ButtonProps } from "./button.types";
import "./button.styles.scss";

const Button = ({ title, onClick, type }: ButtonProps): React.ReactElement => {
  return (
    <button className={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

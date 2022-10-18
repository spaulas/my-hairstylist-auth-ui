import "./link.styles.scss";
import { LinkProps } from "./link.types";

const Link = ({
  url,
  title,
  className = "",
}: LinkProps): React.ReactElement => {
  return (
    <a className={`link ${className}`} href={url}>
      {title}
    </a>
  );
};

export default Link;

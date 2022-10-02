import Icon, { IconColours, Icons } from "../Icon/Icon";
import styles from "./Button.module.css";

export enum ButtonTypes {
  primary = "button--primary-green-filled",
  secondaryWhite = "button--secondary-white",
  secondaryBlue = "button--secondary-blue",
  secondaryWhiteFilled = "button--secondary-white-filled",
  secondaryBlueFilled = "button--secondary-blue-filled",
}

interface IProps {
  label?: string;
  type: string | ButtonTypes;
  icon?: string;
  handleClick?: any;
  isLinkStyle?: boolean;
  children?: any;
  formFunction?: "button" | "submit" | "reset" | undefined;
}
const Button = ({
  label,
  children,
  type,
  icon,
  handleClick,
  isLinkStyle,
  formFunction,
}: IProps) => {
  if (isLinkStyle) {
    return (
      <button className={`${styles.linkButton}`} onClick={handleClick}>
        {icon ? <img src={`/icons/${icon}`} /> : null}
        {label ? label : children}
      </button>
    );
  }
  return (
    <button
      className={`${styles[type]} ${styles.button}`}
      onClick={handleClick}
      type={formFunction ? formFunction : "button"}
    >
      {icon ? <Icon size="sm" icon={icon} colour={IconColours.white} /> : null}
      {label ? label : children}
    </button>
  );
};

export default Button;

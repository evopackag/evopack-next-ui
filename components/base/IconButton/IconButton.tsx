import { IconBackgrounds, IconColours, Icons } from "../constants";
import Text, { TextColour, TextSize, TextWeight } from "../Text/Text";
import styles from "./IconButton.module.css";

interface IProps {
  size: string;
  border?: string;
  theme?: string;
  icon: string | Icons;
  colour?: IconColours;
  handleClick?: any;
  hoverText?: string;
  disable?: boolean;
  background?: IconBackgrounds;
  formFunction?: "button" | "submit" | "reset" | undefined;
}

const IconButton = ({
  size,
  theme,
  border,
  icon,
  colour,
  handleClick,
  hoverText,
  disable,
  background,
  formFunction,
}: IProps) => {
  const styleClasses = `${styles[size]} ${styles["iconButton"]} ${
    !disable ? styles["iconButton--enabled"] : null
  }`;
  return (
    <button className={styleClasses} type={formFunction}>
      {hoverText ? (
        <div className="icon__text">
          <Text
            size={TextSize.md}
            weight={TextWeight.regular}
            color={TextColour.offWhite}
          >
            {hoverText}
          </Text>
        </div>
      ) : null}
      <img
        // src={`/icons/${icon}${disable ? IconColours.lightGrey : colour}.svg`}
        src={`/icons/${icon}${disable ? colour : IconColours.white}.svg`}
        alt={icon}
        onClick={handleClick}
        className={styles["iconButton__icon"]}
      />
    </button>
  );
};

export default IconButton;

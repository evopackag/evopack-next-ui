import Heading, { HeadingSizes } from "../Heading/Heading";
import Text, { TextColour, TextSize, TextWeight } from "../Text/Text";
import styles from "./Icon.module.css";

export enum IconBackgrounds {
  greenSubdued = "#F3FCF8",
}

interface IProps {
  size: string;
  border?: string;
  theme?: string;
  icon?: string | Icons;
  colour?: IconColours;
  handleClick?: any;
  isButton?: boolean;
  hoverText?: string;
  href?: string;
  disable?: boolean;
  background?: IconBackgrounds;
}

export enum Icons {
  chevronLeft = "chevron-left",
  chevronRight = "chevron-right",
  plusCircle = "plus-circle",
  leaf = "leaf",
  arrowLeft = "arrow-left",
  arrowRight = "arrow-right",
  arrowDown = "arrow-down",
  arrowUp = "arrow-up",
  endQuote = "end-quote",
  chemistry = "chemistry",
  cycle = "cycle",
  cross = "cross",
  phone = "phone",
  lock = "lock",
  pause = "pause",
  mail = "mail",
  person = "person",
  packaging = "packaging",
  question = "question",
  trees = "trees",
  tick = "tick",
  evoPackLogoGreenBlue = "evopack-logo",
  evoPackLogoGreenWhite = "Evopack_GreenLogoWhiteWritingHorizontal",
}

export enum IconColours {
  blue = "--blue",
  white = "--white",
  green = "--green",
  lightGrey = "--light-grey",
  sustainGreen = "--sustain-green",
}

export enum IconSizes {
  xs = "icon-size--xs",
  sm = "icon-size--sm",
  md = "icon-size--md",
  lg = "icon-size--lg",
  xl = "icon-size--xl",
  xxl = "icon-size--xxl",
  xxxl = "icon-size--xxxl",
}

const Icon = ({
  size,
  theme,
  border,
  icon,
  colour,
  handleClick,
  isButton,
  hoverText,
  href,
  disable,
  background,
}: IProps) => {
  const styleClasses = `${styles[size]} ${isButton && styles["icon-button"]} ${
    disable && styles["icon-button--disabled"]
  }`;
  if (isButton) {
    return (
      <a className={styleClasses} href={href}>
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
          src={`/icons/${icon}${disable ? IconColours.lightGrey : colour}.svg`}
          alt={icon}
          onClick={handleClick}
          className={styles[`icon--${size}`]}
        />
      </a>
    );
  }
  // return (
  //   <div
  //     className={`${styles.icon} ${
  //       styles[border ? border : ""]
  //     } margin-right-2`}
  //     style={{ background: `${background}` }}
  //   >
  //     {hoverText ? (
  //       <div className="icon__text">
  //         <Text
  //           size={TextSize.md}
  //           weight={TextWeight.regular}
  //           color={TextColour.offWhite}
  //         >
  //           {hoverText}
  //         </Text>
  //       </div>
  //     ) : null}
  //     <img
  //       src={`/icons/${icon}${disable ? IconColours.lightGrey : colour}.svg`}
  //       alt={icon}
  //       onClick={handleClick}
  //       className={`icon--${size} icon-size--${size}`}
  //     />
  //   </div>
  // );
  return (
    <div className={styles.icon} style={{ background: `${background}` }}>
      <img
        src={`/icons/${icon}${disable ? IconColours.lightGrey : colour}.svg`}
        alt={icon}
        onClick={handleClick}
        className={styleClasses}
      />
    </div>
  );
};

export default Icon;

import { createRef, useEffect, useState } from "react";
import styles from "./Text.module.css";

interface IProps {
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColour;
  theme?: string;
  accent?: string;
  bold?: boolean;
  children?: any;
  opacity?: string;
  animate?: boolean;
}

export enum TextSize {
  xxs = "text-size--xxs",
  xs = "text-size--xs",
  sm = "text-size--sm",
  md = "text-size--md",
  lg = "text-size--lg",
  xl = "text-size--xl",
  xxl = "text-size--xxl",
}

export enum TextWeight {
  thin = "text-weight--200",
  light = "text-weight--300",
  regular = "text-weight--400",
  medium = "text-weight--500",
  semibold = "text-weight--700",
  bold = "text-weight--900",
}

export enum TextColour {
  greyBlue = "text-colour--grey-blue",
  primaryBlue = "text-colour--primary-blue",
  primaryGreen = "text-colour--primary-green",
  offWhite = "text-colour--off-white",
  lightGrey = "text-colour--light-grey",
  sustainGreen = "text-colour--sustain-green",
}

const Text = ({
  size = TextSize.md,
  weight = TextWeight.regular,
  theme,
  accent,
  bold,
  opacity,
  children,
  color = TextColour.primaryBlue,
  animate,
}: IProps) => {
  const textObject: any = createRef();

  // const animate =
  //   useScrolledDistance(window.innerHeight * 0.7, "fadeUp", textObject) > 1000
  //     ? "fadeUp"
  //     : "don't Fade";

  const [scrolledDistance, setScrolledDistance] = useState(0);

  // function recordScrollDistance(e: Event) {
  //   setScrolledDistance(textObject.current.getBoundingClientRect().y);
  // }

  useEffect(() => {
    // const textObject = useRef(document.createElement("div"));
    function recordScrollDistance(e: Event) {
      if (textObject.current) {
        setScrolledDistance(textObject.current.getBoundingClientRect().y);
      }
    }
    window.addEventListener("scroll", recordScrollDistance);

    return () => {
      window.removeEventListener("scroll", recordScrollDistance);
    };
  });

  // if (typeof window !== "undefined") {
  //   const styleClasses = `${styles[size]} ${styles[`text--${theme}`]} ${
  //     scrolledDistance > window.innerHeight * 0.6 && animate
  //       ? "text--animated"
  //       : null
  //   }`;
  // }

  const styleClasses = `${styles[size]} ${styles[color]} ${styles[weight]} ${
    accent ? styles[accent] : null
  } ${bold ? styles["text--bold"] : "text--regular"} text`;

  // if (bold) {
  //   return (
  //     <p
  //       className={`text ${size} ${
  //         theme ? `text--${theme} text--bold` : "text--bold"
  //       } text-size--${size} ${accent ? accent : null}`}
  //       style={{ opacity: `${opacity}` }}
  //       data-context={accent}
  //       // ref={textObject}
  //     >
  //       {children}
  //     </p>
  //   );
  // } else {
  return (
    <p
      className={styleClasses}
      style={{
        opacity: `${opacity}`,
        fontWeight: `${weight}`,
        color: `${color}`,
      }}
      data-context={accent}
    >
      {children}
    </p>
  );
};
export default Text;

import { createRef, useEffect, useState } from "react";
import useViewportSize from "../../../hooks/useViewportSize/useViewportSize";
import styles from "./Heading.module.css";

export enum HeadingSizes {
  xxs = "heading-size--xxs",
  xs = "heading-size--xs",
  sm = "heading-size--sm",
  md = "heading-size--md",
  lg = "heading-size--lg",
  xl = "heading-size--xl",
  xxl = "heading-size--xxl",
}

export enum HeadingColour {
  greyBlue = "heading-colour--grey-blue",
  primaryBlue = "heading-colour--primary-blue",
  primaryGreen = "heading-colour--primary-green",
  offWhite = "heading-colour--off-white",
  lightGrey = "heading-colour--light-grey",
  sustainGreen = "heading-colour--sustain-green",
}

export enum textAlignments {
  default = "left-aligned",
  center = "center-text",
}

export enum HeadingWeights {
  regular = "heading-weight--regular",
  medium = "heading-weight--medium",
  semibold = "heading-weight--semibold",
}

interface IProps {
  children: string;
  level: string;
  size: HeadingSizes;
  text?: string;
  colour?: HeadingColour;
  isBold?: boolean | null;
  weight?: HeadingWeights;
  theme?: string;
  accent?: boolean | string;
  spacing?: string;
  alignment?: "center" | "left" | "right" | textAlignments | undefined;
  leftAlignDesktop?: boolean;
  accentWords?: string;
  fadeInOnScroll?: boolean;
}

const Heading = ({
  children,
  level,
  size,
  text,
  theme,
  colour = HeadingColour.primaryBlue,
  accent,
  isBold,
  weight = HeadingWeights.medium,
  spacing,
  alignment,
  accentWords,
  fadeInOnScroll,
}: IProps) => {
  const isMobileView = useViewportSize(450);

  const headingObject: any = createRef();

  useEffect(() => {
    function recordScrollDistance(e: Event) {
      // setScrolledDistance(headingObject.current.getBoundingClientRect().y);
      setScrolledDistance(headingObject.current.getBoundingClientRect().y);
    }
    // window.addEventListener("scroll", recordScrollDistance);

    return () => {
      window.removeEventListener("scroll", recordScrollDistance);
    };
  });

  useEffect(() => {}, [isMobileView]);

  useEffect(() => {}, [alignment]);
  const headingVariableStyles = {
    wordSpacing: `${spacing}`,
  };

  const styleClasses = `${styles.heading} ${styles[size]} ${styles[colour]} ${
    styles[weight]
  } ${accent && styles["heading--underlined"]}`;

  const [scrolledDistance, setScrolledDistance] = useState(0);

  if (typeof window !== "undefined") {
    // ✅ Can use window here
    const headingStyleClasses = `${size} ${alignment} ${
      fadeInOnScroll ? "heading--animated" : null
    } ${
      scrolledDistance < window.innerHeight * 0.9 && fadeInOnScroll
        ? "heading--animated"
        : null
    }`;
  }

  if (level === "h1") {
    return (
      <h1
        className={styleClasses}
        style={headingVariableStyles}
        // ref={headingObject}
      >
        {children}
      </h1>
    );
  }

  if (level === "h2") {
    return (
      <h2
        className={styleClasses}
        style={{
          wordSpacing: `${spacing}`,
          fontWeight: `${weight && weight}`,
          color: `${colour}`,
        }}
        // ref={headingObject}
      >
        {children}
        {/* {accent && accentWords ? (
          <span className={styles.underlineAccent}>{accentWords}</span>
        ) : null} */}
      </h2>
    );
  }

  if (level === "h3") {
    return (
      <h3
        className={styleClasses}
        style={{ fontWeight: weight }}
        // ref={headingObject}
      >
        {/* <img src={`${BASE_IMG_URL}${accent}`} /> */}
        {children}
      </h3>
    );
  }

  if (level === "h4") {
    return (
      <h4
        // className={`${theme ? `heading--${theme}` : "heading"} ${
        //   accent ? accent : null
        // } ${size} ${alignment}`}
        className={styleClasses}
        // ref={headingObject}
      >
        {/* {accent ? <span className="startQuote"></span> : null} */}
        {children}
        {/* {accent ? <span className="endQuote"></span> : null} */}
      </h4>
    );
  }

  if (level === "h5") {
    return (
      <h5
        className={styleClasses}
        // ref={headingObject}
      >
        {children}
      </h5>
    );
  }

  if (level === "h6") {
    return (
      <h6
        className={`${
          theme ? `heading--${theme} ${isBold}` : `heading ${isBold}`
        }`}
        // ref={headingObject}
      >
        {children}
      </h6>
    );
  } else {
    return null;
  }
};

export default Heading;

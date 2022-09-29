import styles from "./Link.module.css";

interface IProps {
  level: ButtonLevel;
  label?: string;
  children: any;
  href?: string;
  icon?: string;
  className?: string;
  buttonStyle?: boolean;
  handleClick?: (value: any) => void;
}

export enum ButtonLevel {
  primary = "primary",
  secondaryBlue = "secondaryBlue",
  secondaryGreen = "secondaryGreen",
  secondaryWhite = "secondaryWhite",
}

const BASE_IMG_URL = "src/";

const Link = ({
  level,
  label,
  children,
  href,
  icon,
  className,
  buttonStyle,
  handleClick,
}: IProps) => {
  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const styleClasses = `${styles[level]} ${
    buttonStyle && styles[`buttonLink--${level}`]
  } ${styles.buttonLink}`;

  if (buttonStyle) {
    return (
      <a className={styleClasses} href={href} onClick={handleClick}>
        {children}
        {icon ? <img src={`${BASE_IMG_URL}${icon}`} /> : null}
        {label}
      </a>
    );
  }

  return (
    <a
      className={`${className} ${styleClasses}`}
      href={href}
      onClick={handleClick}
    >
      {children}
      {icon ? <img src={`${BASE_IMG_URL}${icon}`} /> : null}
      {label}

      {/* <div className="link__underline">
        <img
          className="link__underlineImage"
          src={`${process.env.PUBLIC_URL}link-underline.svg`}
          alt=""
        />
      </div> */}
    </a>
  );
};

export default Link;

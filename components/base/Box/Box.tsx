import { ReactNode } from "react";
import { TextColour } from "../Text/Text";

import styles from "./Box.module.css";

export enum BorderRadii {
  none = "border-radius-none",
  small16px = "border-radius-16",
  medium24px = "24px",
  large48px = "border-radius-48",
}

export enum BorderWidth {
  none = "",
  small1px = 1,
  medium2px = 2,
  large4px = 4,
}

export enum BoxBackground {
  sustainBeige = "#FFF7EF",
  primaryBlue = "#1B1B2D",
  white = "#ffffff",
  primaryGreen = "#30C07B",
  lightGrey = "#F0F0F0",
}

export enum BorderColour {
  warning = "var(--warningRed)",
  lightGrey = "",
  primaryBlue = "",
  primaryGreen = "",
}

export enum EvopackTheme {
  backgroud = "#1B1B2D",
  icon = "Evopack_GreenLogoWhiteWritingHorizontal",
  // fontColour = TextColour.offWhite,
}

export const ColourThemes = {
  evopack: {
    background: "#1B1B2D",
    icon: "Evopack_GreenLogoWhiteWritingHorizontal",
    fontColour: TextColour.offWhite,
  },
  sustainability: {
    background: "#FFF7EF",
    icon: "leaf--sustain-green",
    fontColour: TextColour.sustainGreen,
  },
  education: {
    background: BoxBackground.lightGrey,
    icon: "Evopack_GreenLogoWhiteWritingHorizontal",
    fontColour: TextColour.primaryBlue,
    border: BorderColour.lightGrey,
    BorderWidth: BorderWidth.small1px,
  },
};

interface IProps {
  children: ReactNode;
  borderRadius?: BorderRadii;
  borderWidth?: BorderWidth;
  borderColour?: BorderColour;
  background?: BoxBackground | string;
  elevation?: string;
  key: string;
}

const Box = ({
  children,
  borderRadius,
  borderWidth,
  borderColour,
  background,
  elevation,
  key,
}: IProps) => {
  return (
    <div
      className={`${styles.box} row padding-6 width-100`}
      style={{
        border: `${borderWidth}px ${borderColour} solid`,
        borderRadius: `${borderRadius}`,
        backgroundColor: `${background}`,
      }}
      key={key}
    >
      {children}
    </div>
  );
};

export default Box;

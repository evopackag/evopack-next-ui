import { url } from "inspector";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";
import Heading, {
  HeadingColour,
  HeadingSizes,
  HeadingWeights,
} from "../../../base/Heading/Heading";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../base/Spacing/VerticalSpacing";
import Text, {
  TextColour,
  TextSize,
  TextWeight,
} from "../../../base/Text/Text";
import styles from "./Card.module.css";

interface IProps {
  text: string;
  theme: CardThemes;
  heading: string;
  background?: string;
}

export enum CardThemes {
  blue = "card--blue",
  green = "card--green",
  white = "card--white",
}

const Card = ({ heading, text, background, theme }: IProps) => {
  const styleClasses = `${styles.card} ${styles[theme]}`;

  return (
    <div
      className={styleClasses}
      style={{
        backgroundImage: `url(/images/${background}.svg)`,
      }}
    >
      <Heading
        level="h3"
        size={HeadingSizes.sm}
        colour={
          theme === CardThemes.white
            ? HeadingColour.primaryBlue
            : HeadingColour.offWhite
        }
      >
        {heading}
      </Heading>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <Text size={TextSize.lg}>{text}</Text>
    </div>
  );
};

export default Card;

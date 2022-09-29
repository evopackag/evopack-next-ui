import { useState } from "react";
import Button, {
  ButtonTypes,
} from "../../../../../../components/base/Buttons/Button";
import Heading, {
  HeadingColour,
  HeadingSizes,
  HeadingWeights,
} from "../../../../../../components/base/Heading/Heading";
import Text, {
  TextColour,
  TextSize,
  TextWeight,
} from "../../../../../../components/base/Text/Text";
import styles from "./LearnMoreCard.module.css";

interface IProps {
  text: string;
  theme: CardThemes;
  buttonTheme?: string;
  heading: string;
  background?: string;
}

export enum CardThemes {
  dark = "learnMoreCard--blue",
  light = "learnMoreCard--white",
}

const LearnMoreCard = ({
  heading,
  text,
  background,
  theme,
  buttonTheme,
}: IProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [cardCTA, setCardCTA] = useState("Learn More");

  const showCardDetails = () => {
    setShowDetails(!showDetails);
    if (showDetails) {
      setCardCTA("Learn More");
    } else {
      setCardCTA("Close");
    }
    // setCardCTA("Close");
  };

  return (
    <div
      className={`${styles.learnMoreCard} ${styles[theme]}`}
      style={{
        backgroundImage: `url(/icons/${background}.svg)`,
        backgroundSize: "cover",
      }}
      data-target="learnMoreCard"
    >
      {showDetails ? (
        <Text
          color={TextColour.primaryBlue}
          size={TextSize.xl}
          weight={TextWeight.regular}
        >
          {text}
        </Text>
      ) : (
        <Heading
          level="h3"
          size={HeadingSizes.lg}
          colour={
            theme === CardThemes.dark
              ? HeadingColour.offWhite
              : HeadingColour.primaryBlue
          }
          weight={HeadingWeights.semibold}
        >
          {heading}
        </Heading>
      )}
      <Button
        label={cardCTA}
        handleClick={showCardDetails}
        type={
          theme === CardThemes.dark
            ? ButtonTypes.secondaryWhite
            : ButtonTypes.secondaryBlue
        }
      />
    </div>
  );
};

export default LearnMoreCard;

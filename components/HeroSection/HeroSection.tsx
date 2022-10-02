import Heading, {
  HeadingColour,
  HeadingSizes,
  HeadingWeights,
  textAlignments,
} from "../base/Heading/Heading";
import Text, { TextColour, TextSize, TextWeight } from "../base/Text/Text";

import Button, { ButtonTypes } from "../base/Buttons/Button";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";

import styles from "./HeroSection.module.css";

interface IProps {
  data: any;
  refs?: any;
  handleCTAClick?: any;
}

const HeroSection = ({ data, refs, handleCTAClick }: IProps) => {
  const { heading, subheading, buttonText } = data;

  const isMobileView = useViewportSize(1024);

  return (
    <div className="row">
      <section
        className={`${styles.heroSection} col-xs-12 middle-xs center-text`}
      >
        <VerticalSpacing size={SpacingSizes.xxxl64px} />
        <Heading
          level="h1"
          size={HeadingSizes.lg}
          weight={HeadingWeights.semibold}
          colour={HeadingColour.primaryBlue}
          theme="light"
          alignment={textAlignments.center}
        >
          {heading}
        </Heading>
        <VerticalSpacing size={SpacingSizes.xs16px} />
        <Text
          color={TextColour.primaryBlue}
          size={isMobileView ? TextSize.sm : TextSize.lg}
          weight={TextWeight.regular}
          theme="light"
        >
          {subheading}
        </Text>
        <VerticalSpacing size={SpacingSizes.xxl48px} />
        <Button
          label={buttonText}
          type={ButtonTypes.secondaryBlueFilled}
          handleClick={handleCTAClick}
        />
      </section>
    </div>
  );
};

export default HeroSection;

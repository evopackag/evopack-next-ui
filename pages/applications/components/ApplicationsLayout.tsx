import Box, {
  BorderRadii,
  BoxBackground,
  ColourThemes,
} from "../../../components/base/Box/Box";
import Heading, {
  HeadingColour,
  HeadingSizes,
  HeadingWeights,
  textAlignments,
} from "../../../components/base/Heading/Heading";
import Icon, {
  IconColours,
  Icons,
  IconSizes,
} from "../../../components/base/Icon/Icon";
import ListItem from "../../../components/base/ListItem/ListItem";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../components/base/Spacing/VerticalSpacing";
import Text, {
  TextSize,
  TextColour,
  TextWeight,
} from "../../../components/base/Text/Text";
import Card from "../../../components/HorizontalSlider/components/Card/Card";
import HorizontalSlider from "../../../components/HorizontalSlider/HorizontalSlider";
import { Colours } from "../../../constants/globalConstants";
import styles from "./ApplicationsLayout.module.scss";

interface IProps {
  data: any;
  // overviewContent: any;
  // sustainabilityContent: any;
  // solutionContent: any;
  id: string;
}

const ApplicationsLayout = ({ data, id }: IProps) => {
  const {
    heading,
    subheading,
    overview,
    sustainability,
    solution,
    featuresList,
  } = data;

  return (
    <div
      className={`${styles.applicationsLayout} col justify-center width-100 align-center padding-horizontal-4`}
      id={`${id}_layout`}
    >
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      <div className="col width-100 align-center justify-center center-text">
        <Heading level="h1" size={HeadingSizes.lg} alignment="center">
          {heading}
        </Heading>
        <VerticalSpacing size={SpacingSizes.xs16px} />
        <Text
          color={TextColour.primaryBlue}
          size={TextSize.xl}
          weight={TextWeight.regular}
        >
          {subheading}
        </Text>
      </div>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />

      <div
        className={`row justify-center width-100 ${styles.applicationsLayout__grid}`}
      >
        {overview.heading && overview.text ? (
          <Box
            background={BoxBackground.lightGrey}
            borderRadius={BorderRadii.medium24px}
          >
            <div className="row width-100">
              <div className="col-xs-2 col-sm-1">
                <Icon
                  size={IconSizes.xl}
                  icon={Icons.chemistry}
                  colour={IconColours.blue}
                />
              </div>
              <div className="col-xs-10">
                <Heading
                  level="h2"
                  size={HeadingSizes.sm}
                  colour={HeadingColour.primaryBlue}
                  weight={HeadingWeights.semibold}
                >
                  {overview.heading}
                </Heading>
                <VerticalSpacing size={SpacingSizes.xs16px} />
                <Text
                  color={TextColour.primaryBlue}
                  size={TextSize.md}
                  weight={TextWeight.regular}
                >
                  {overview.text}
                </Text>
              </div>
            </div>
          </Box>
        ) : null}
        {sustainability.heading && sustainability.text ? (
          <Box
            background={ColourThemes.sustainability.background}
            borderRadius={BorderRadii.medium24px}
          >
            <div className="row width-100">
              <div className="col-xs-2 col-sm-1">
                <Icon
                  size={IconSizes.xl}
                  icon={Icons.leaf}
                  colour={IconColours.sustainGreen}
                />
              </div>
              <div className="col-xs-10">
                <Heading
                  level="h2"
                  size={HeadingSizes.sm}
                  colour={HeadingColour.sustainGreen}
                  weight={HeadingWeights.semibold}
                >
                  {sustainability.heading}
                </Heading>
                <VerticalSpacing size={SpacingSizes.xs16px} />
                <Text
                  size={TextSize.md}
                  color={TextColour.sustainGreen}
                  weight={TextWeight.regular}
                >
                  {sustainability.text}
                </Text>
              </div>
            </div>
          </Box>
        ) : null}
      </div>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      {solution.heading && solution.text ? (
        <Box
          background={ColourThemes.evopack.background}
          borderRadius={BorderRadii.medium24px}
        >
          <div className="row width-100">
            <div className="col-xs-12">
              <div className="row justify-between align-center">
                <div className="row">
                  <Heading
                    level="h2"
                    size={HeadingSizes.sm}
                    colour={HeadingColour.offWhite}
                    weight={HeadingWeights.semibold}
                  >
                    {solution.heading}
                  </Heading>
                </div>

                <img
                  src={`/icons/Evopack_GreenLogoWhiteWritingHorizontal--white.svg`}
                  alt="Evopack Logo"
                  className="box__evopackLogo"
                />
              </div>

              <VerticalSpacing size={SpacingSizes.xs16px} />
              <Text
                size={TextSize.md}
                color={ColourThemes.evopack.fontColour}
                weight={TextWeight.regular}
              >
                {solution.text}
              </Text>
            </div>
          </div>
        </Box>
      ) : null}
      <VerticalSpacing size={SpacingSizes.xxxxl96px} />
      <div className="col width-100 justify-center align-center center-text">
        <Heading
          level="h2"
          size={HeadingSizes.xs}
          colour={HeadingColour.primaryBlue}
          weight={HeadingWeights.medium}
        >
          {featuresList.subheading}
        </Heading>
        <VerticalSpacing size={SpacingSizes.xs16px} />
        <Heading
          level="h2"
          size={HeadingSizes.md}
          colour={HeadingColour.primaryBlue}
          alignment={textAlignments.center}
          weight={HeadingWeights.semibold}
        >
          {featuresList.heading}
        </Heading>
        <VerticalSpacing size={SpacingSizes.xxxxl96px} />
        <ul
          className={`${styles.applicationsLayout__relatedServices} col align-start`}
        >
          {featuresList.listItems &&
            featuresList.listItems.map((feature: any) => {
              return (
                <>
                  {feature.publish && (
                    <>
                      <ListItem
                        heading={feature.heading}
                        text={feature.text}
                        icon={feature.icon}
                      />
                      <VerticalSpacing size={SpacingSizes.xxl48px} />
                    </>
                  )}
                </>
              );
            })}
        </ul>
      </div>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
    </div>
  );
};

export default ApplicationsLayout;

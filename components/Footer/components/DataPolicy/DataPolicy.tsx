import Bullets from "../../../base/Bullets/Bullets";
import Heading, {
  HeadingSizes,
  HeadingWeights,
} from "../../../base/Heading/Heading";
import HorizontalDivider from "../../../base/HorizontalDivider/HorizontalDivider";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../base/Spacing/VerticalSpacing";
import Text, { TextSize, TextWeight } from "../../../base/Text/Text";

const legalContent = require("../../FooterContent.json");

const DataPolicy = () => {
  const theme = "light";

  const { title, subTitle, text, content } = legalContent.policy;

  // const sections = content
  //   ? content.map((item: any) => {
  //       return item.title;
  //     })
  //   : null;
  // }

  // console.log(sections["policy"].title);
  return (
    <>
      <Heading theme={theme} level="h2" size={HeadingSizes.xl}>
        {title}
      </Heading>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <Text theme={theme} size={TextSize.lg} weight={TextWeight.medium} bold>
        {subTitle}
      </Text>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      <Text theme={theme} weight={TextWeight.regular} size={TextSize.lg}>
        {text}
      </Text>
      <VerticalSpacing size={SpacingSizes.lg32px} />
      <HorizontalDivider />
      <VerticalSpacing size={SpacingSizes.lg32px} />
      {/* First Section */}
      <Heading
        theme={theme}
        level="h3"
        size={HeadingSizes.lg}
        weight={HeadingWeights.semibold}
      >
        {content[1].title}
      </Heading>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      {content[0]
        ? content[0].content.map((item: any) => {
            return (
              <>
                <Heading
                  theme={theme}
                  level="h4"
                  size={HeadingSizes.md}
                  weight={HeadingWeights.semibold}
                >
                  {item.sectionTitle}
                </Heading>
                <VerticalSpacing size={SpacingSizes.lg32px} />
                <Text theme={theme} size={TextSize.lg}>
                  {item.text}
                </Text>
                <VerticalSpacing size={SpacingSizes.xs16px} />
                {item.bullets && item.bullets.length > 0
                  ? item.bullets.map((bullet: any) => {
                      return (
                        <Bullets
                          bulletTitle={bullet.bulletTitle}
                          bulletText={bullet.bulletText}
                        />
                      );
                    })
                  : null}
                <VerticalSpacing size={SpacingSizes.xxxl64px} />
              </>
            );
          })
        : null}
      <Heading
        theme={theme}
        level="h3"
        size={HeadingSizes.lg}
        weight={HeadingWeights.semibold}
      >
        {content[1].title}
      </Heading>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      {content[1]
        ? content[1].content.map((item: any) => {
            return (
              <>
                <Heading theme={theme} level="h4" size={HeadingSizes.md}>
                  {item.sectionTitle}
                </Heading>
                <VerticalSpacing size={SpacingSizes.lg32px} />
                <Text
                  theme={theme}
                  size={TextSize.lg}
                  weight={TextWeight.regular}
                >
                  {item.text}
                </Text>
                <VerticalSpacing size={SpacingSizes.xs16px} />
                {item.bullets && item.bullets.length > 0
                  ? item.bullets.map((bullet: any) => {
                      return (
                        <Bullets
                          bulletTitle={bullet.bulletTitle}
                          bulletText={bullet.bulletText}
                        />
                      );
                    })
                  : null}
                <VerticalSpacing size={SpacingSizes.xxxl64px} />
              </>
            );
          })
        : null}
      <Heading theme={theme} level="h3" size={HeadingSizes.lg}>
        {content[2].title}
      </Heading>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      {content[2]
        ? content[2].content.map((item: any) => {
            return (
              <>
                <Heading
                  theme={theme}
                  level="h4"
                  size={HeadingSizes.md}
                  weight={HeadingWeights.semibold}
                >
                  {item.sectionTitle}
                </Heading>
                <VerticalSpacing size={SpacingSizes.lg32px} />
                <Text theme={theme} size={TextSize.lg}>
                  {item.text}
                </Text>
                <VerticalSpacing size={SpacingSizes.xs16px} />
                {item.bullets && item.bullets.length > 0
                  ? item.bullets.map((bullet: any) => {
                      return (
                        <Bullets
                          bulletTitle={bullet.bulletTitle}
                          bulletText={bullet.bulletText}
                        />
                      );
                    })
                  : null}
                <VerticalSpacing size={SpacingSizes.xxxl64px} />
              </>
            );
          })
        : null}
    </>
  );
};

DataPolicy.displayName = "DataPolicy";

export default DataPolicy;

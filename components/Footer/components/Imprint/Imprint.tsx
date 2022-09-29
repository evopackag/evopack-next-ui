import Heading, { HeadingSizes } from "../../../base/Heading/Heading";
import Text from "../../../base/Text/Text";
import Bullets from "../../../base/Bullets/Bullets";
import HorizontalDivider from "../../../base/HorizontalDivider/HorizontalDivider";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../base/Spacing/VerticalSpacing";

const legalContent = require("../../FooterContent.json");

const Imprint = () => {
  const theme = "light";

  const { title, content } = legalContent.imprint;
  return (
    <>
      <>
        <Heading theme={theme} level="h2" size={HeadingSizes.xl}>
          {title}
        </Heading>
        <VerticalSpacing size={SpacingSizes.lg32px} />
        <HorizontalDivider />
        <VerticalSpacing size={SpacingSizes.lg32px} />
        <VerticalSpacing size={SpacingSizes.xxxl64px} />
        {content[0]
          ? content[0].content.map((item: any) => {
              return (
                <>
                  <Heading theme={theme} level="h4" size={HeadingSizes.md}>
                    {item.sectionTitle}
                  </Heading>
                  <VerticalSpacing size={SpacingSizes.lg32px} />
                  <Text theme={theme}>{item.text}</Text>
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
    </>
  );
};

export default Imprint;

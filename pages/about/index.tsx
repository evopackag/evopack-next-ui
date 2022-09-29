import Heading, { HeadingSizes } from "../../components/base/Heading/Heading";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text, { TextColour, TextSize } from "../../components/base/Text/Text";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import VerticalSpacing, {
  SpacingSizes,
} from "../../components/base/Spacing/VerticalSpacing";

import styles from "./About.module.css";
import Footer from "../../components/Footer/Footer";
import HorizontalDivider from "../../components/base/HorizontalDivider/HorizontalDivider";

const About = () => {
  const websiteContent: any = require("../EvopackContent.json");

  const { language } = useContext(GlobalContext);

  const { heading, subheading } = websiteContent[language].about;
  return (
    <PageContainer>
      <Header />
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      <div className="row">
        <section className={`${styles.about__heroSection} col-xs-12 center-xs`}>
          <div
            className={`${styles.about__heroContent} col width-100 center-xs align-center middle-xs padding-horizontal-4`}
          >
            <div
              className={`${styles.about__heroSectionHeading} col justify-center center-xs   center-text`}
            >
              <VerticalSpacing size={SpacingSizes.md24px} />
              <VerticalSpacing size={SpacingSizes.md24px} />
              <Heading
                level="h1"
                size={HeadingSizes.xl}
                theme="light"
                leftAlignDesktop
                spacing=""
              >
                {heading}
              </Heading>
              <VerticalSpacing size={SpacingSizes.xs16px} />
              <Text
                color={TextColour.primaryBlue}
                size={TextSize.md}
                theme="light"
              >
                {subheading}
              </Text>
            </div>
          </div>
          <HorizontalDivider slopedDivider />
          <VerticalSpacing size={SpacingSizes.md24px} />
        </section>
      </div>
      <Footer />
    </PageContainer>
  );
};

export default About;

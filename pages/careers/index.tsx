import Heading, { HeadingSizes } from "../../components/base/Heading/Heading";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text, { TextColour, TextSize } from "../../components/base/Text/Text";
import Button from "../../components/base/Buttons/Button";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import UnderlinedText from "../../components/base/UnderlinedText/UnderlinedText";

import styles from "./Careers.module.css";
import VerticalSpacing, {
  SpacingSizes,
} from "../../components/base/Spacing/VerticalSpacing";
import Link, { ButtonLevel } from "../../components/base/Link/Link";
import Footer from "../../components/Footer/Footer";
import Icon from "../../components/base/Icon/Icon";
import HorizontalDivider from "../../components/base/HorizontalDivider/HorizontalDivider";

const Careers = () => {
  const websiteContent: any = require("../EvopackContent.json");

  const { language } = useContext(GlobalContext);

  const numberOfJobs = [];

  const { heading, subheading, primaryButtonText, secondaryButtonText } =
    websiteContent[language].careers;
  return (
    <PageContainer>
      <Header />
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      <div className="row">
        <section className="careers__heroSection width-100 col-xs-12 center-xs">
          <div className="col width-100 center-xs middle-xs align-center padding-horizontal-4 careers__heroContent">
            <div className="col width-100 center-xs  careers__heroSectionHeading align-center center-text">
              <VerticalSpacing size={SpacingSizes.md24px} />
              <VerticalSpacing size={SpacingSizes.md24px} />
              <Heading level="h1" size={HeadingSizes.xl} leftAlignDesktop>
                {heading}
              </Heading>
              <VerticalSpacing size={SpacingSizes.xs16px} />
              <Text
                color={TextColour.primaryBlue}
                size={TextSize.lg}
                theme="light"
              >
                {subheading.split(" ").slice(0, 3).join(" ")}
                &nbsp;
                <strong style={{ color: "var(--primary-green)" }}>
                  {numberOfJobs.length}
                </strong>
                &nbsp;
                {subheading
                  .split(" ")
                  .slice(4, subheading.length + 1)
                  .join(" ")}
              </Text>
            </div>

            {/* {/* <Spacing size="lg" /> */}

            {/* <Link label="Get in touch" href="mailto:info@evopack.tech"></Link> */}
          </div>
          <HorizontalDivider slopedDivider />
          {/* <div className="col careers__ctas">
            <Link href="mailto:info@evopack.tech">Email Us</Link>
          </div> */}
          <div
            className={`${styles.careers__ctas} row justify-center middle-xs padding-horizontal-4`}
          >
            {/* <Button
              label="Email Us"
              type="secondary-blue-filled"

              // handleClick={handleCTAClick}
            />
            <Spacing size="xs" />
            <Button
              label="Call up"
              type="secondary-blue"

              // handleClick={handleCTAClick}
            /> */}
            <VerticalSpacing size={SpacingSizes.md24px} />
            <Link
              level={ButtonLevel.primary}
              buttonStyle
              href="mailto:info@evopack.tech"
            >
              {primaryButtonText}
            </Link>
            <Link
              level={ButtonLevel.secondaryBlue}
              buttonStyle
              href="tel:+41767463355"
            >
              {secondaryButtonText}
            </Link>
          </div>
          <VerticalSpacing size={SpacingSizes.md24px} />
        </section>
      </div>
      <Footer />
    </PageContainer>
  );
};

export default Careers;

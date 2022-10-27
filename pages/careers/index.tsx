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
import useSWR from "swr";

import { wData } from "../../data";
import JobPosting from "../../components/JobPosting/JobPosting";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Careers = (props: any) => {
  // const { data, error } = useSWR("/api/staticdata", fetcher);

  const { language } = useContext(GlobalContext);

  const numberOfJobs = [];

  const { heading, subheading, jobs, jobsGridHeadings } =
    props[language].careers;

  console.log(heading);

  //Handle the error state
  if (!props) return <div>Failed to load data..</div>;
  //Handle the loading state
  // if (!data) return <div>Loading...</div>;
  return (
    <PageContainer>
      <Header />
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      <div className="row">
        <section
          className={`${styles.careers__heroSection} width-100 col-xs-12 center-xs`}
        >
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
                  {jobs.length}
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
          <VerticalSpacing size={SpacingSizes.lg32px} />
          <ul className={styles.careers__jobsGrid}>
            {jobsGridHeadings && (
              <li className={styles.careers__jobsGridHeadings}>
                <Text opacity="0.7">{jobsGridHeadings.roles}</Text>
                <Text opacity="0.7">{jobsGridHeadings.location}</Text>
                <Text opacity="0.7">{jobsGridHeadings.duration}</Text>
                <Text opacity="0.7">{jobsGridHeadings.startDate}</Text>
              </li>
            )}

            {jobs &&
              jobs.map((job: any) => {
                return (
                  <JobPosting
                    duration={job.duration}
                    href={job.href}
                    location={job.location}
                    role={job.role}
                    startDate={job.startDate}
                    buttonText={job.buttonText}
                  />
                );
              })}
          </ul>
          <VerticalSpacing size={SpacingSizes.md24px} />
        </section>
      </div>
      <Footer />
    </PageContainer>
  );
};

export const getStaticProps = async () => {
  return {
    props: wData,
  };
};

export default Careers;

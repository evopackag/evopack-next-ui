import useViewportSize from "../../hooks/useViewportSize/useViewportSize";
import Heading, { HeadingSizes } from "../base/Heading/Heading";
import Text, { TextColour, TextSize, TextWeight } from "../base/Text/Text";
import styles from "./styles.module.scss";
import Link, { ButtonLevel } from "../base/Link/Link";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";

interface IProps {
  href: string;
  buttonText?: string;
  role: string;
  location: string;
  duration: string;
  startDate: string;
}

const JobPosting = ({
  href,
  buttonText = "Apply",
  role,
  location,
  duration,
  startDate,
}: IProps) => {
  const isMobile = useViewportSize(1024);

  if (isMobile) {
    return (
      <li className={styles.jobPosting}>
        <Heading level="h3" size={HeadingSizes.sm}>
          {role}
        </Heading>
        <VerticalSpacing size={SpacingSizes.xxxs8px} />
        <div className="col">
          <Text>{location}</Text>
          <Text>
            {duration}&nbsp;{startDate}
          </Text>
        </div>
        <VerticalSpacing size={SpacingSizes.md24px} />
        <Link level={ButtonLevel.secondaryBlue} href={href} buttonStyle>
          {buttonText}
        </Link>
      </li>
    );
  }
  return (
    <li className={styles.jobPosting}>
      <Heading level="h3" size={HeadingSizes.xxs}>
        {role}
      </Heading>
      <Text>{location}</Text>
      <Text>{duration}</Text>
      <Text>{startDate}</Text>
      <Link level={ButtonLevel.secondaryBlue} href={href} buttonStyle>
        {buttonText}
      </Link>
    </li>
  );
};

export default JobPosting;

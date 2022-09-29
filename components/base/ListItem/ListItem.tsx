import Heading, {
  HeadingColour,
  HeadingSizes,
  HeadingWeights,
} from "../Heading/Heading";
import Icon, {
  IconBackgrounds,
  IconColours,
  Icons,
  IconSizes,
} from "../Icon/Icon";
import VerticalSpacing, { SpacingSizes } from "../Spacing/VerticalSpacing";
import Text, { TextColour, TextSize, TextWeight } from "../Text/Text";

import styles from "./ListItem.module.css";

interface IProps {
  icon: Icons;
  heading: string;
  text: string;
}

const ListItem = ({ icon, heading, text }: IProps) => {
  return (
    <li
      className={`${styles.listItem} row align-start justify-start middle-xs center-xs start-md`}
      key={`${heading}_listItem`}
    >
      <div
        className={`${styles.listItem__iconContainer} col justify-center align-center padding-4 margin-right-2`}
      >
        <Icon size={IconSizes.xxl} icon={icon} colour={IconColours.green} />
      </div>

      <div
        className={`${styles.listItem__text} col center-xs center-text start-text-md start-md`}
      >
        <Heading
          level="h3"
          size={HeadingSizes.xs}
          weight={HeadingWeights.medium}
          colour={HeadingColour.primaryBlue}
        >
          {heading}
        </Heading>
        <VerticalSpacing size={SpacingSizes.xxxs8px} />
        <Text color={TextColour.primaryBlue} size={TextSize.sm}>
          {text}
        </Text>
      </div>
    </li>
  );
};

export default ListItem;

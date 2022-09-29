import Box, { BorderRadii, BoxBackground } from "../Box/Box";
import Text, { TextSize } from "../Text/Text";
import Icon, { IconColours, Icons } from "../Icon/Icon";
import styles from "./styles.module.scss";

interface IProps {
  icon: Icons;
  iconColour: IconColours;
  text: string;
  background: string;
}

const Bullet = ({ icon, text, background, iconColour }: IProps) => {
  return (
    <Box
      borderRadius={BorderRadii.medium24px}
      background={background}
      key={`bullet-says-${text}`}
    >
      <Icon size="md" icon={icon} colour={iconColour} />
      <Text size={TextSize.md}>{text}</Text>
    </Box>
  );
};

export default Bullet;

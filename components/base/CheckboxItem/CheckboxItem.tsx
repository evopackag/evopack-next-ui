import Text, { TextColour, TextSize } from "../Text/Text";

import styles from "./CheckboxItem.module.css";

interface IProps {
  label: string;
  handleClick: (value: any) => void;
  active: boolean;
}

const CheckboxItem = ({ label, active, handleClick }: IProps) => {
  return (
    <div
      className={`${
        styles.checkboxitem
      } row align-center justify-center padding-2 ${
        active ? "checkboxitem--active" : null
      }`}
      onClick={handleClick}
    >
      <input type="checkbox" id={label} key={label} />
      <Text
        color={TextColour.primaryBlue}
        size={TextSize.md}
        theme="primary-colour"
      >
        {label}
      </Text>
    </div>
  );
};

export default CheckboxItem;

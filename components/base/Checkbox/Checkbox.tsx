import Heading, { HeadingSizes } from "../Heading/Heading";
import Text, { TextColour, TextSize, TextWeight } from "../Text/Text";
import styles from "./Checkbox.module.css";

interface IProps {
  label: string;
  inputID?: string;
}

const Checkbox = ({ label, inputID }: IProps) => {
  return (
    <div className="row start-xs align-center">
      <div className="position-relative">
        <input
          type="checkbox"
          className={`${styles.checkbox}`}
          // checkbox--${border}-white
          id={inputID}
          name={inputID}
          required
        />
        <span className="checkmark"></span>
      </div>
      <div className="col-xs-10 start-xs">
        <Text
          size={TextSize.md}
          weight={TextWeight.regular}
          color={TextColour.offWhite}
        >
          {label}
        </Text>
      </div>
    </div>
  );
};

export default Checkbox;

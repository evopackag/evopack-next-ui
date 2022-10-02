import React, { useState } from "react";
import Icon, { IconColours } from "../Icon/Icon";
import styles from "./TextArea.module.css";

interface IProps {
  label: string;
  fieldID: any;
  theme?: InputColourThemes;
  required?: boolean;
  handleChange: (value: any) => void;
}

export enum InputColourThemes {
  light = "textInput__field--light",
  dark = "textInput__field--dark",
}

const INPUTVALUE_REGEX_CHECK = RegExp(/^(?!^[<>[{%#:;,$%?])[A-Za-z0-9@.]+$/);
const ERROR_MESSAGE = "Incorrect character detected, please review.";

const TextArea = ({
  label,
  theme = InputColourThemes.light,
  required,
  handleChange,
  fieldID,
}: IProps) => {
  const [active, setActive] = useState(false);

  const checkInputValue = (textFieldValue: string, storageID?: string) => {
    if (
      (textFieldValue?.length &&
        !INPUTVALUE_REGEX_CHECK.test(textFieldValue)) ||
      textFieldValue === ""
    ) {
      setActive(false);
      return ERROR_MESSAGE;
    }

    setActive(true);
    return true;
  };

  const styleClasses = `${styles[theme]}`;

  return (
    <textarea
      className={`${styles.textInput} ${styles.textInput__field} height-xs-100`}
      id={label}
      placeholder={label}
      name={fieldID}
      onInput={(e: React.FormEvent<HTMLTextAreaElement>) =>
        checkInputValue(e.currentTarget.value, fieldID)
      }
      onChange={handleChange}
      required={required}
    />
  );
};

export default TextArea;

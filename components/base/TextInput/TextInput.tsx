import React, { useState } from "react";
import { Icons, IconSizes } from "../constants";
import Form from "../Form/Form";
import Icon, { IconColours } from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import styles from "./TextInput.module.css";

interface IProps {
  label: string;
  type?: string;
  theme?: InputColourThemes;
  icon?: string;
  required?: boolean;
  handleChange: (value: any) => void;
  fieldID: any;
}

export enum InputColourThemes {
  light = "textInput--light",
  dark = "textInput--dark",
}

const INPUTVALUE_REGEX_CHECK = RegExp(/^(?!^[<>[{%#:;,$%?])[A-Za-z0-9@.]+$/);
// const INPUTVALUE_REGEX_CHECK2 = RegExp(/^[<>[\]{|\\\/^~%# :;,$%?\0-\cZ]+$/);
const ERROR_MESSAGE = "Incorrect character detected, please review.";

const TextInput = ({
  label,
  theme = InputColourThemes.dark,
  icon,
  type = "text",
  required,
  handleChange,
  fieldID,
}: IProps) => {
  const [contextualIcon, setContextualIcon] = useState(icon);
  const [active, setActive] = useState(false);

  const checkInputValue = (textFieldValue: string, storageID?: string) => {
    console.log(textFieldValue);
    if (
      textFieldValue?.length <= 0 &&
      !INPUTVALUE_REGEX_CHECK.test(textFieldValue)
    ) {
      setContextualIcon(icon);
      setActive(false);
      return ERROR_MESSAGE;
    }

    // const input.storageID = textFieldValue;

    // handleChange({`${storageID} = ${textFieldValue}`});
    setContextualIcon("check--green");
    setActive(true);
    return true;
  };

  const styleClasses = `${styles[theme]}`;

  const styleClassesInput = `${styles["textInput"]} ${
    styles[`${!active ? "textInput" : "textInput--active"}`]
  } ${styles[`${theme}`]}`;

  if (type === "textinputSubmit") {
    return (
      <Form
        name="subscribe"
        subject="AddToMailingList"
        className={styleClassesInput}
      >
        <input
          className={`${styles.textInput__field} height-xs-100 col-xs-12 ${styleClasses}`}
          id={label}
          placeholder={label}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            checkInputValue(e.currentTarget.value, fieldID)
          }
          name={fieldID}
          type="text"
          required={required}
        />
        <IconButton
          icon={Icons.arrowLineRight}
          colour={IconColours.blue}
          size={IconSizes.md}
          disable={!active}
          formFunction="submit"
        />
        <label htmlFor={fieldID}>{label}</label>
      </Form>
    );
  }

  return (
    <div className={styleClassesInput}>
      <input
        // textInput__field--${theme}
        className={`${styles[theme]} col-xs-12 width-100`}
        id={label}
        // placeholder={label}
        onInput={(e: React.FormEvent<HTMLInputElement>) =>
          checkInputValue(e.currentTarget.value, fieldID)
        }
        type={type}
        name={fieldID}
        onChange={handleChange}
        required={required}
      />
      {/* <Text text={label} bold={false} /> */}
      {icon ? (
        <img
          className={`${styles.textInput__icon}`}
          src={`/icons/${contextualIcon}.svg`}
        />
      ) : null}
      <label htmlFor={fieldID}>{label}</label>
    </div>
  );
};

export default TextInput;

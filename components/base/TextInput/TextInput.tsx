import React, { useState } from "react";
import Icon, { IconColours } from "../Icon/Icon";
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
  light = "textInput__field--light",
  dark = "textInput__field--dark",
}

const INPUTVALUE_REGEX_CHECK = RegExp(/^(?!^[<>[{%#:;,$%?])[A-Za-z0-9@.]+$/);
// const INPUTVALUE_REGEX_CHECK2 = RegExp(/^[<>[\]{|\\\/^~%# :;,$%?\0-\cZ]+$/);
const ERROR_MESSAGE = "Incorrect character detected, please review.";

const TextInput = ({
  label,
  theme = InputColourThemes.light,
  icon,
  type,
  required,
  handleChange,
  fieldID,
}: IProps) => {
  const [contextualIcon, setContextualIcon] = useState(icon);
  const [active, setActive] = useState(false);

  const checkInputValue = (textFieldValue: string, storageID?: string) => {
    if (
      (textFieldValue?.length &&
        !INPUTVALUE_REGEX_CHECK.test(textFieldValue)) ||
      textFieldValue === ""
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

  if (type === "textarea") {
    return (
      <div className={`${styles.textInput} height-xs-100 col-xs-12`}>
        <textarea
          className={`${styles.textInput} ${styles.textInput__field} height-xs-100 col-xs-12`}
          id={label}
          placeholder={label}
          name={fieldID}
          onInput={(e: React.FormEvent<HTMLTextAreaElement>) =>
            checkInputValue(e.currentTarget.value, fieldID)
          }
          onChange={handleChange}
          required={required}
        />
        {icon ? (
          <span className={`${styles.textInput__icon}`}>
            <Icon size="sm" icon={contextualIcon} colour={IconColours.white} />
          </span>
        ) : null}
      </div>
    );
  }

  if (type === "textinputSubmit") {
    return (
      <form className={styles.textInput}>
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
        <button
          type="submit"
          className={`${styles.textInput__submit} ${active ? "active" : null}`}
        >
          <img
            className={styles.textInput__submitIcon}
            src={`/icons/${
              active ? "arrow-line-right--blue" : "arrow-line-right--blue"
            }.svg`}
          />
        </button>
      </form>
    );
  }

  return (
    <label className={`${styles.textInput} col-xs-12 col-sm-12 col-md-11`}>
      <input
        // textInput__field--${theme}
        className={`${styles.textInput__field} col-xs-12 width-100`}
        id={label}
        placeholder={label}
        onInput={(e: React.FormEvent<HTMLInputElement>) =>
          checkInputValue(e.currentTarget.value, fieldID)
        }
        type="text"
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
    </label>
  );
};

export default TextInput;

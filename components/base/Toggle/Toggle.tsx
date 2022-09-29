import { useContext, useState } from "react";
import GlobalContext from "../../../contexts/GlobalContext";
import Text, { TextColour, TextSize, TextWeight } from "../Text/Text";

import styles from "./Toggle.module.css";

interface IProps {
  options: any[];
  toggleTop?: boolean;
}

const Toggle = ({ options, toggleTop }: IProps) => {
  const { language, setLanguage } = useContext(GlobalContext);

  if (toggleTop) {
    return (
      <div className={`${styles.toggleTop} row`}>
        {options.map((option) => {
          return (
            <button
              className={`${styles.toggleTop__option} ${
                language === option.value ? `${styles.activeToggleTop}` : null
              }`}
              id={option.displayText}
              key={option.displayText}
              onClick={() => setLanguage(option.value)}
            >
              <Text
                color={TextColour.primaryBlue}
                size={TextSize.xs}
                weight={TextWeight.semibold}
              >
                {option.displayText}
              </Text>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="toggle row">
      {options.map((option) => {
        return (
          <button
            className={`toggle__option ${
              language === option.value ? "activeToggle" : null
            }`}
            id={option.displayText}
            key={option.displayText}
            onClick={() => setLanguage(option.value)}
          >
            {option.displayText}
          </button>
        );
      })}
    </div>
  );
};

export default Toggle;

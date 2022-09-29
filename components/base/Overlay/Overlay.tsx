import { useState, useEffect } from "react";
import Button, { ButtonTypes } from "../Buttons/Button";
import Heading from "../Heading/Heading";
import HorizontalDivider from "../HorizontalDivider/HorizontalDivider";
import styles from "./Overlay.module.css";

interface IProps {
  text?: string;
  primaryButtonText: string;
  primaryButtonHandler: (value: any) => void;
  secondaryButtonText?: string;
  secondaryButtonHandler?: (value: any) => void;
  // title: string;
  theme?: string;
  children: any;
  open: boolean;
}

const Overlay = ({
  text,
  primaryButtonText,
  primaryButtonHandler,
  secondaryButtonText,
  secondaryButtonHandler,
  theme,
  children,
  open,
}: IProps) => {
  const closeOverlay = () => {
    primaryButtonHandler(false);
  };

  return (
    <section
      className={`${styles.overlay} col align-center ${
        styles[open ? "overlay--active" : ""]
      }`}
    >
      <div className={styles.overlay__content}>
        {/* <Heading type="h2" theme="light" text={title} /> */}
        {/* <HorizontalDivider /> */}
        {children}
      </div>
      <div
        className={`${styles.overlay__ctas} row width-100 align-center justify-evenly padding-top-8`}
      >
        <Button
          label={primaryButtonText}
          type={ButtonTypes.primary}
          handleClick={closeOverlay}
        />
        {secondaryButtonText ? (
          <Button
            label={secondaryButtonText}
            type={ButtonTypes.secondaryBlue}
            handleClick={secondaryButtonHandler}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Overlay;

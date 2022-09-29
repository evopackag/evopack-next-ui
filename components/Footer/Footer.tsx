import { text } from "node:stream/consumers";
import { useContext, useEffect, useRef, useState } from "react";
import { globalFooterContent } from "../../constants/globalConstants";
import GlobalContext from "../../contexts/GlobalContext";
import Button, { ButtonTypes } from "../base/Buttons/Button";
import Heading, { HeadingSizes } from "../base/Heading/Heading";
import HorizontalDivider from "../base/HorizontalDivider/HorizontalDivider";
import Link from "../base/Link/Link";
import Overlay from "../base/Overlay/Overlay";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";
import Text, { TextSize, TextColour, TextWeight } from "../base/Text/Text";
import TextInput, { InputColourThemes } from "../base/TextInput/TextInput";
import DataPolicy from "./components/DataPolicy/DataPolicy";
import Imprint from "./components/Imprint/Imprint";

import styles from "./Footer.module.css";

// var legalContent = require("./FooterContent.json");

const Footer = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayContent, setOverlayContent] = useState("imprint");

  const [subscriptionEmail, setSubscriptionEmail] = useState({
    email: "",
  });

  const { language } = useContext(GlobalContext);

  const toggleOverlay = (content: string) => {
    if (showOverlay) {
      setShowOverlay(false);
    } else {
      setShowOverlay(true);
      setOverlayContent(content);
    }
  };

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowOverlay(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {}, [overlayContent]);

  const {
    subscriptionLabel,
    subscriptionPlaceholder,
    imprintLinkLabel,
    dataPolicyLinkLabel,
  } = globalFooterContent[language];

  const footerSection = useRef(null);

  useOutsideAlerter(footerSection);

  return (
    <div
      className={`col-xs-12 ${styles.footer__container}`}
      ref={footerSection}
    >
      <footer className={`${styles.footer} row justify-between align-end`}>
        <div className="width-100 col-xs row-lg">
          <div className={`${styles.footer__address} col-xs-6 width-100`}>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.semibold}
            >
              EVOPACK AG
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              +41 7674 63355
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              info@evopack.tech
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              In der Ey 37
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              4612 Wangen b. Olten
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              Switzerland
            </Text>
          </div>
          <div className={`${styles.footer__address} col-xs-6 width-100`}>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.semibold}
            >
              EVOPACK GmbH
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              +49 1578 7898842
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              info@evopack.tech
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              Friedrichstraße 15
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              70174 Stuttgart
            </Text>
            <Text
              color={TextColour.primaryBlue}
              size={TextSize.md}
              weight={TextWeight.regular}
            >
              Germany
            </Text>
          </div>
        </div>
        <div
          className={`${styles.footer__subscribe} col-xs-12 col-md-3 width-100`}
        >
          <Text
            color={TextColour.primaryBlue}
            size={TextSize.md}
            weight={TextWeight.regular}
          >
            {subscriptionLabel}
          </Text>
          <VerticalSpacing size={SpacingSizes.xxxs8px} />
          <TextInput
            label={subscriptionPlaceholder}
            icon="arrow-right-circle--blue"
            theme={InputColourThemes.light}
            type="textinputSubmit"
            handleChange={setSubscriptionEmail}
            fieldID="subscriptionEmail"
          />
        </div>
      </footer>
      {/* <HorizontalDivider /> */}
      <div
        className={`${styles.footer__legals} row align-center justify-between`}
      >
        <Text
          size={TextSize.md}
          weight={TextWeight.regular}
          color={TextColour.primaryBlue}
        >
          ©EVOPACK 2022
        </Text>
        <div className={`${styles.footer__legalsButtons} row`}>
          {/* <Link
            label={imprintLinkLabel}
            handleClick={() => toggleOverlay("imprint")}
          />
          <Link label={dataPolicyLinkLabel} handleClick={toggleOverlay} /> */}
          <Button
            type={ButtonTypes.primary}
            label={imprintLinkLabel}
            handleClick={() => toggleOverlay("imprint")}
            isLinkStyle
          />
          <Button
            type={ButtonTypes.primary}
            label={dataPolicyLinkLabel}
            handleClick={toggleOverlay}
            isLinkStyle
          />
        </div>
      </div>
      <Overlay
        open={showOverlay}
        primaryButtonText="Understood"
        primaryButtonHandler={setShowOverlay}
        secondaryButtonText={`View ${
          overlayContent === "imprint" ? "Data Policy" : "Imprint"
        }`}
        secondaryButtonHandler={() =>
          setOverlayContent(overlayContent === "policy" ? "imprint" : "policy")
        }
      >
        {overlayContent === "imprint" ? <Imprint /> : <DataPolicy />}
      </Overlay>
    </div>
  );
};

export default Footer;

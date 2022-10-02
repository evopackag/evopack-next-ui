import { useContext, useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import Router, { useRouter } from "next/router";
// import Link from "../../components/base/Link/Link";
// import { globalRoutes } from "../../src/constants/globalConstants";
import VisitorContext, { Languages } from "../../contexts/GlobalContext";
import useOutsideAlerter from "../../hooks/useClickOutsideEffect/useClickOutsideEffect";
import useScrollDirection from "../../hooks/useScrollDirection/useScrollDirection";
import Button, { ButtonTypes } from "../base/Buttons/Button";
import Icon, { IconColours, Icons, IconSizes } from "../base/Icon/Icon";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";
import Text, { TextColour, TextSize, TextWeight } from "../base/Text/Text";
import Toggle from "../base/Toggle/Toggle";

import styles from "./Header.module.css";

interface IProps {
  scrollToFunction?: any;
  refs?: any;
}

const Header = ({ refs }: IProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [hideNav, setHideNav] = useState(false);

  const { language } = useContext(VisitorContext);

  const globalHeader = useRef(null);

  const scrollDirection = useScrollDirection();

  const router = useRouter();

  const globalRoutes: any = {
    english: [
      { label: "Applications", urlPath: "/applications" },
      { label: "Careers", urlPath: "/careers" },
      { label: "About EVOPACK", urlPath: "/about" },
    ],
    german: [
      { label: "Anwendungen", urlPath: "/applications" },
      { label: "Jobs & Karriere", urlPath: "/careers" },
      { label: "Über EVOPACK", urlPath: "/about" },
    ],
  };

  // const vw: number = Math.max(
  //   document.documentElement.clientWidth || 0,
  //   window.innerWidth || 0
  // );
  // const vh: number = Math.max(
  //   document.documentElement.clientHeight || 0,
  //   window.innerHeight || 0
  // );

  enum deviceSize {
    mobile = "mobile",
    tablet = "tablet",
    desktop = "desktop",
    largeDesktop = "largeDesktop",
  }

  useOutsideAlerter(globalHeader, setMobileMenu, false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenu(false);
        setIsMobile(false);
      } else if (window.innerWidth <= 768) {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHideNav(true);
      } else if (window.scrollY <= 0) {
        setHideNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const contactOptionsData = [
    { label: "Email", href: "mailto:info@evopack.tech", icon: "mail" },
    { label: "Call Us", href: "tel:+41767463355", icon: "phone" },
  ];

  return (
    <header
      className={`${styles.header} col-xs-12 ${
        scrollDirection === "down" ? styles.hide : styles.show
      }`}
      ref={globalHeader}
    >
      <div
        className={`${styles.header__innerContainer} row justify-between align-center`}
      >
        <Link
          href={`/`}
          // className={({ isActive }) => (isActive ? "link link--active" : "link")}
          key={"homepageLink"}
        >
          <a>
            <img src={`/icons/evopack-logo--blue.svg`} alt="" />
          </a>
        </Link>
        {isMobile ? (
          <Toggle
            options={[
              {
                displayText: "EN",
                value: Languages.English,
              },
              {
                displayText: "DE",
                value: Languages.German,
              },
            ]}
            toggleTop
          />
        ) : null}

        {isMobile ? (
          <nav
            className={`${
              mobileMenu ? `${styles.header__mobileMenuCloseButton}` : null
            } ${styles.header__mobileMenu}`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <div className={`${styles.header__mobileMenuLinks}`}>
                <Link
                  href={`/`}
                  // className={({ isActive }) => (isActive ? "link link--active" : "link")}
                  key={"homepageLink"}
                >
                  <a>
                    <img
                      src="/icons/Evopack_GreenLogoWhiteWritingHorizontal--white.svg"
                      alt=""
                    />
                  </a>
                </Link>
                <VerticalSpacing size={SpacingSizes.md24px} />
                <ul className={`${styles.header__navigationGroup}`}>
                  <div className={`${styles.header__navigationGroupHeader}`}>
                    <Text
                      size={TextSize.sm}
                      color={TextColour.greyBlue}
                      weight={TextWeight.regular}
                    >
                      Pages
                    </Text>
                  </div>

                  {globalRoutes[language].map((link: any) => {
                    return (
                      <li
                        className={`${styles.navlink__container} align-center justify-center`}
                        key={link.label}
                      >
                        <Link
                          href={link.urlPath}
                          // className={({ isActive }) =>
                          //   isActive
                          //     ? "link row between-xs link--active"
                          //     : "link between-xs row"
                          // }
                          key={link.label}
                        >
                          <a className={`${styles.link} row between-xs`}>
                            <Text
                              color={TextColour.primaryBlue}
                              size={TextSize.md}
                              weight={TextWeight.regular}
                            >
                              {link.label}
                            </Text>
                            <Icon
                              size={IconSizes.sm}
                              icon={Icons.chevronRight}
                              colour={IconColours.white}
                            />
                          </a>
                          {/* <Icon size="sm" icon="chevron-right--white" /> */}
                        </Link>
                      </li>
                    );
                  })}
                  <VerticalSpacing size={SpacingSizes.md24px} />
                </ul>
                <ul className={`${styles.header__navigationGroup}`}>
                  <div className={`${styles.header__navigationGroupHeader}`}>
                    <Text
                      size={TextSize.sm}
                      color={TextColour.greyBlue}
                      weight={TextWeight.regular}
                    >
                      Contact Us
                    </Text>
                  </div>
                  {contactOptionsData.map((link) => {
                    return (
                      <li
                        className={`${styles.navlink__container} align-center justify-center`}
                        key={link.label}
                      >
                        <Link
                          href={`${link.href}`}
                          className={`${styles.link} between-xs row`}
                          key={link.label}
                        >
                          <a className={`${styles.link} row between-xs`}>
                            <Text
                              color={TextColour.primaryBlue}
                              size={TextSize.md}
                              weight={TextWeight.regular}
                            >
                              {link.label}
                            </Text>
                            <Icon
                              size={IconSizes.sm}
                              icon={link.icon}
                              colour={IconColours.white}
                            />
                          </a>
                          {/* <Icon size="sm" icon={link.icon} /> */}
                        </Link>
                      </li>
                    );
                  })}
                  <VerticalSpacing size={SpacingSizes.md24px} />
                </ul>
                <div
                  className={`${styles.navlink__container} row`}
                  key="closeMobileMenu"
                >
                  <Button
                    label="Close Menu"
                    handleClick={() => setMobileMenu(!mobileMenu)}
                    type={ButtonTypes.secondaryWhite}
                    icon="close"
                  />
                </div>
              </div>
            ) : null}
          </nav>
        ) : (
          <nav className={`${styles.header__links}`}>
            {globalRoutes[language].map((link: any) => {
              return (
                <Link
                  href={`${link.urlPath}`}
                  className={`${styles.link} ${
                    router.asPath === link.urlPath ? styles["link--active"] : ""
                  }`}
                  key={link.label}
                >
                  <a className={styles.link}>
                    <Text
                      color={TextColour.primaryBlue}
                      size={TextSize.md}
                      weight={TextWeight.medium}
                    >
                      {link.label}
                    </Text>
                  </a>
                </Link>
              );
            })}
          </nav>
        )}
        {isMobile ? null : (
          <Toggle
            options={[
              {
                displayText: "EN",
                value: Languages.English,
              },
              {
                displayText: "DE",
                value: Languages.German,
              },
            ]}
            toggleTop
          />
        )}
      </div>
    </header>
  );
};

export default Header;

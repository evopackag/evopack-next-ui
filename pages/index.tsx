import { createRef, useContext, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import VerticalSpacing, {
  SpacingSizes,
} from "../components/base/Spacing/VerticalSpacing";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import QuoteBox from "../components/QuoteBox/QuoteBox";
import ContactForm from "../components/ContactForm/ContactForm";
import HeroSection from "./Home/components/HeroSection/HeroSection";
import Carousel from "./Home/components/Carousel/Carousel";
import CardsGrid from "./Home/components/CardsGrid/CardsGrid";

import styles from "../styles/Home.module.css";
import GlobalContext from "../contexts/GlobalContext";

const Home: NextPage = () => {
  const websiteContent: any = require("./EvopackContent.json");

  const { language } = useContext(GlobalContext);

  const languageSpecificContent = websiteContent[language].home;

  const { hero, cardsGrid, quote, carousel, contactForm } =
    languageSpecificContent;

  const contactRef = createRef<HTMLDivElement>();

  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Evopack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection
        data={hero}
        handleCTAClick={() => {
          handleBackClick(contactRef);
        }}
      />
      <CardsGrid data={cardsGrid} />
      <QuoteBox
        text={quote.text}
        author={quote.author}
        authorTitle={quote.authorPosition}
      />
      <Carousel data={carousel} />
      <VerticalSpacing size={SpacingSizes.xl40px} />
      <VerticalSpacing size={SpacingSizes.xl40px} />

      <ContactForm ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Home;

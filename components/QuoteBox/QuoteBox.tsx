import { createRef } from "react";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";
import Heading, { HeadingSizes } from "../base/Heading/Heading";
import Text, { TextColour, TextSize, TextWeight } from "../base/Text/Text";
import styles from "./styles.module.scss";

interface IProps {
  text: string;
  // theme?: string;
  author?: string;
  authorTitle?: string;
}

const QuoteBox = ({ text, author, authorTitle }: IProps) => {
  const quoteWords = text.split(" ");
  const firstWord = quoteWords[0];
  const lastWord = quoteWords[quoteWords.length - 1];
  const quoteText = text.slice(firstWord.length, text.length - lastWord.length);

  const missionRef = createRef<HTMLDivElement>();

  const isMobile = useViewportSize(768);

  return (
    <section
      className={`${styles.quoteBox} col-xs-12 padding-horizontal-8 padding-vertical-4`}
      ref={missionRef}
    >
      <div className={styles.quoteBox__text}>
        {/* <Heading
          level="h4"
          size={HeadingSizes.md}
          text={firstWord}
          theme="dark"
          accent="startQuote"
        /> */}
        <Text
          color={TextColour.offWhite}
          size={isMobile ? TextSize.xl : TextSize.xxl}
          accent="startQuote"
          weight={TextWeight.semibold}
        >
          {firstWord}
        </Text>
        <Text
          color={TextColour.offWhite}
          size={isMobile ? TextSize.xl : TextSize.xxl}
          weight={TextWeight.semibold}
        >
          {quoteText}
        </Text>
        <Text
          color={TextColour.offWhite}
          size={isMobile ? TextSize.xl : TextSize.xxl}
          accent="endQuote"
          weight={TextWeight.semibold}
        >
          {lastWord}
        </Text>
      </div>
      <div className={`${styles.quoteBox__author} col align-center center-xs`}>
        <Text
          color={TextColour.offWhite}
          size={TextSize.md}
          weight={TextWeight.semibold}
        >
          {author ? author : "Testing"}
        </Text>
        <Text
          color={TextColour.offWhite}
          size={TextSize.md}
          opacity="0.5"
          weight={TextWeight.regular}
        >
          {authorTitle ? authorTitle : "test"}
        </Text>
      </div>
    </section>
  );
};

export default QuoteBox;

import { createRef, useEffect, useState } from "react";

import Heading, {
  HeadingColour,
  HeadingSizes,
  HeadingWeights,
} from "../../../../components/base/Heading/Heading";
import LearnMoreCard from "./components/LearnMoreCard/LearnMoreCard";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../../components/base/Spacing/VerticalSpacing";
import Icon, {
  IconColours,
  Icons,
  IconSizes,
} from "../../../../components/base/Icon/Icon";

import styles from "./Carousel.module.css";

interface IProps {
  data: any;
}

const Carousel = ({ data }: IProps) => {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(900);

  const carousel: any = createRef();

  const { heading, subheading, cards, underlinedHeading } = data;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const moveCarouselLeft = () => {
    if (
      document.getElementsByClassName(".carousel__fullWidthBox") &&
      carouselPosition >= 0
    ) {
      carousel.current.scrollBy({
        top: 0,
        left: -1 * windowWidth,
        behavior: "smooth",
      });
    }
  };
  const moveCarouselRight = () => {
    if (
      document.getElementsByClassName(".carousel__fullWidthBox") &&
      carouselPosition <= 1
    ) {
      // track.scrollTo(windowWidth, 0);
      carousel.current.scrollBy({
        top: 0,
        left: windowWidth + carousel.current.scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLDivElement;

    var fullXWidth = eventTarget.scrollWidth;

    var proportionalXWidthToScreen = fullXWidth / windowWidth;

    const distanceFromLeft = eventTarget.scrollLeft;

    setCarouselPosition(
      distanceFromLeft /
        (windowWidth * proportionalXWidthToScreen - windowWidth)
    );
  };

  return (
    <section className={`${styles.carousel} col-xs-12`}>
      <VerticalSpacing size={SpacingSizes.xxxxl96px} />
      <div
        className={`${styles.carousel__title} col width-100 align-center center-xs center-text`}
      >
        <Heading
          level="h2"
          size={HeadingSizes.xl}
          colour={HeadingColour.primaryBlue}
          weight={HeadingWeights.semibold}
          theme="light"
          accentWords={heading}
        >
          {heading}
        </Heading>
        <Heading
          text={heading}
          level="h2"
          size={HeadingSizes.xl}
          colour={HeadingColour.primaryBlue}
          weight={HeadingWeights.semibold}
          theme="light"
          accent
        >
          {underlinedHeading}
        </Heading>
        <VerticalSpacing size={SpacingSizes.lg32px} />
        <Heading
          level="h5"
          size={HeadingSizes.sm}
          colour={HeadingColour.primaryBlue}
          weight={HeadingWeights.regular}
          theme="light"
        >
          {subheading}
        </Heading>
      </div>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <div
        className={`${styles.carousel__fullWidthBox}`}
        onScroll={scrollHandler}
        ref={carousel}
      >
        {cards.map((card: any) => {
          return (
            <LearnMoreCard
              heading={card.heading}
              text={card.text}
              background={card.icon}
              theme={card.theme}
              buttonTheme={card.buttonTheme}
              key={`learnMoreCard--${heading}`}
            />
          );
        })}
      </div>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      {/* <div
        className={`${styles.carousel__stepper} row justify-center align-center`}
      >
        <Icon
          isButton
          icon={Icons.chevronLeft}
          colour={IconColours.blue}
          border="blue"
          size={IconSizes.xl}
          disable={carouselPosition <= 0 ? true : false}
          handleClick={() => moveCarouselLeft()}
        />
        <Icon
          isButton
          icon={Icons.chevronRight}
          colour={IconColours.blue}
          border="blue"
          size={IconSizes.xl}
          disable={carouselPosition >= 1 ? true : false}
          handleClick={() => moveCarouselRight()}
        />
      </div> */}
    </section>
  );
};

export default Carousel;

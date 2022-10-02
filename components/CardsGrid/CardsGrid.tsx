import Heading, {
  HeadingColour,
  HeadingSizes,
  HeadingWeights,
} from "../base/Heading/Heading";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import Card from "../HorizontalSlider/components/Card/Card";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";

import styles from "./CardsGrid.module.css";

interface IProps {
  data: any;
}

const CardsGrid = ({ data }: IProps) => {
  const { title, cards } = data;
  const isMobile = useViewportSize(1024);
  return (
    <section className={`${styles.cardsGrid__container}`}>
      <VerticalSpacing
        size={isMobile ? SpacingSizes.md24px : SpacingSizes.xxxxl96px}
      />
      {/* <div className="row width-100 justify-center padding-horizontal-2">
        <Heading
          level="h2"
          size={HeadingSizes.lg}
          colour={HeadingColour.lightGrey}
          weight={HeadingWeights.medium}
        >
          Our services
        </Heading>
      </div> */}
      <VerticalSpacing size={SpacingSizes.xl40px} />
      <div className={`${styles.cardsGrid} row  align-center`}>
        {cards.map((cards: any) => {
          return (
            <Card
              heading={cards.heading}
              text={cards.text}
              background={cards.icon}
              theme={cards.theme}
              key={cards.heading}
            />
          );
        })}
      </div>

      <VerticalSpacing
        size={isMobile ? SpacingSizes.md24px : SpacingSizes.xxxxl96px}
      />
    </section>
  );
};

export default CardsGrid;

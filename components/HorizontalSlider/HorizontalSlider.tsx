import { ReactNode } from "react";
import Icon from "../base/Icon/Icon";
import styles from "./HorizontalSlider.module.css";

interface IProps {
  content: Object;
  children: ReactNode;
  buttons?: boolean;
}

const HorizontalSlider = ({ content, children, buttons }: IProps) => {
  return (
    <section className={styles.horizontalSlider}>
      <div
        className={`${styles.horizontalSlider__content} start-xs
       center-lg`}
      >
        {children}
      </div>
      {buttons ? (
        <div className={styles.horizontalSlider__indicator}>
          <Icon icon="arrow-left" size="md" />
          <Icon icon="arrow-right" size="md" />
        </div>
      ) : null}
    </section>
  );
};

export default HorizontalSlider;

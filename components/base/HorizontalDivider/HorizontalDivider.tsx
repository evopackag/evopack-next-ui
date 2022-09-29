import styles from "./HorizontalDivider.module.css";

interface IProps {
  theme?: string;
  slopedDivider?: boolean;
}

const HorizontalDivider = ({ theme, slopedDivider }: IProps) => {
  if (slopedDivider) {
    return (
      <div className={styles.slopedDivider}>
        {/* <svg
          width="100%"
          height="65"
          viewBox="0 0 100% 100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M0 62L${window.innerWidth} 0L${window.innerWidth} 65H0V62Z`}
            fill="url(#paint0_linear_606_15829)"
            width={window.innerWidth}
            // height={65}
          />
          <defs>
            <linearGradient
              id="paint0_linear_606_15829"
              x1="1150.98"
              y1="-573.49"
              x2="1663.98"
              y2="301.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1B1B2D" />
              <stop offset="0.989583" stop-color="#2E3BAE" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
    );
  }
  return (
    <div className={`${styles.horizontalDividerContainer} row`}>
      <div
        // className={theme ? `horizontalDivider--${theme}` : "horizontalDivider"}
        className={styles.horizontalDivider}
      ></div>
    </div>
  );
};

export default HorizontalDivider;

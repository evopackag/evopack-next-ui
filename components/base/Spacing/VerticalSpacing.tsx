import styles from "./VerticalSpacing.module.css";

export enum SpacingSizes {
  xxxxs4px = "verticalSpacing--xxxxs",
  xxxs8px = "verticalSpacing--xxxs",
  xxs12px = "verticalSpacing--xxs",
  xs16px = "verticalSpacing--xs",
  sm20px = "verticalSpacing--sm",
  md24px = "verticalSpacing--md",
  lg32px = "verticalSpacing--lg",
  xl40px = "verticalSpacing--xl",
  xxl48px = "verticalSpacing--xxl",
  xxxl64px = "verticalSpacing--xxxl",
  xxxxl96px = "verticalSpacing--xxxxl",
}

interface IProps {
  size: SpacingSizes;
}

const VerticalSpacing = ({ size }: IProps) => {
  return <div className={styles[size]}></div>;
};

export default VerticalSpacing;

import { ReactNode } from "react";

import styles from "./PageContainer.module.css";

interface IProps {
  children: ReactNode;
}

const PageContainer = ({ children }: IProps) => {
  return <div className={styles.pageContainer}>{children}</div>;
};

export default PageContainer;

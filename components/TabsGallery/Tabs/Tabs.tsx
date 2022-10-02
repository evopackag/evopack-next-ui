import { useContext, useState } from "react";
import CheckboxItem from "../../base/CheckboxItem/CheckboxItem";
import VerticalSpacing, {
  SpacingSizes,
} from "../../base/Spacing/VerticalSpacing";
import TabsContext from "../contexts/TabsContext";

import styles from "./Tabs.module.css";

interface IProps {
  data: any;
}

const Tabs = ({ data }: IProps) => {
  const { label, handleClick, active, content } = data;

  const { filter, setFilter } = useContext(TabsContext);
  return (
    <div
      className={`${styles.tabs} width-100 row justify-start-sm justify-center`}
    >
      <div className={`${styles.tabs__container} row`}>
        {data.map((tab: any) => {
          return (
            <CheckboxItem
              label={tab}
              active={tab === filter}
              handleClick={() => setFilter(tab)}
              key={tab}
            />
          );
        })}
      </div>

      <VerticalSpacing size={SpacingSizes.md24px} />
    </div>
  );
};

export default Tabs;

import { ReactNode, useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import CheckboxItem from "../base/CheckboxItem/CheckboxItem";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";
import TabsContext from "./contexts/TabsContext";
import Tabs from "./Tabs/Tabs";

import styles from "./TabsGallery.module.css";

interface IProps {
  data: any;
  showBackgroundImage?: boolean;
  backgroundImages?: any;
  children: ReactNode;
  tabs: any;
}

const TabsGallery = ({
  data,
  showBackgroundImage,
  backgroundImages,
  children,
  tabs,
}: IProps) => {
  const { label, handleClick, active, content } = data;

  const [filter, setFilter] = useState(data[0]);

  const { language } = useContext(GlobalContext);

  useEffect(() => {
    setFilter(data[0]);
  }, [language]);

  if (showBackgroundImage) {
    return (
      <div
        className={`${styles.tabsGallery} width-100 col center-xs middle-xs`}
      >
        <TabsContext.Provider value={{ filter, setFilter }}>
          <div className={styles.tabsGallery_hero}>
            {showBackgroundImage && (
              <img
                src={`/images/${backgroundImages[filter]}`}
                alt=""
                className={styles.tabsGallery_heroImage}
              />
            )}
            <Tabs data={data} />
          </div>
          <div className={styles.tabsGallery_stage}>
            {tabs.label === filter ? tabs.component : null}
          </div>
          {children}
        </TabsContext.Provider>
      </div>
    );
  }
  return (
    <div className={`${styles.tabsGallery} width-100 col center-xs middle-xs`}>
      <TabsContext.Provider value={{ filter, setFilter }}>
        {showBackgroundImage && (
          <img
            src={`/images/applicationsImages__paints.jpg`}
            alt=""
            className="applications__heroImage"
          />
        )}
        <Tabs data={data} />
        {/* <div className="row tabsGallery__container">
        {data.map((tab: any) => {
          return (
            <CheckboxItem
              label={tab.label}
              active={tab.label === filter}
              handleClick={() => setFilter(tab.label)}
            />
          );
        })}
      </div> */}

        {/* <VerticalSpacing size={SpacingSizes.md24px} /> */}
        {children}
        {/* {content[filter].map((content: any) => {
        return (

        )

      })} */}
      </TabsContext.Provider>
    </div>
  );
};

export default TabsGallery;

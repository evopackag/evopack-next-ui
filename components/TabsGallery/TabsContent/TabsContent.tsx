import { useContext } from "react";
import TabsContext from "../contexts/TabsContext";

import styles from "./TabsContent.module.css";

interface IProps {
  label: string;
  children: any;
}

const TabsContent = ({ label, children }: IProps) => {
  const { filter } = useContext(TabsContext);

  return (
    <>
      {filter === label ? (
        <div
          className="col width-100 align-center justify-center"
          id={`${label}_hi`}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};

export default TabsContent;

import { createContext } from "react";

export enum Languages {
  "English" = "english",
  "German" = "german",
}

const GlobalContext = createContext<any>({
  languagePreference: Languages.English,
});

export default GlobalContext;

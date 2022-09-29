import "../styles/stylesystem.scss";
// import "../styles/globalstyles.scss";
import type { AppProps } from "next/app";

import GlobalContext, { Languages } from "../contexts/GlobalContext";
import { useRouter } from "next/router";
import useStickyStorage from "../hooks/useStickyStorage/useStickyStorage";

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useStickyStorage(
    "languagePreference",
    Languages.English
  );
  return (
    <GlobalContext.Provider value={{ language, setLanguage }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;

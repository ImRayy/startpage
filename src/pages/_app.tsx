import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { enable_animations_on_initial_page_load as animations } from "../../config/general";

export default function App({ Component, pageProps }: AppProps) {
  const [isPageLoaded, setIsPageLoaded] = useState(animations);
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return <Component {...pageProps} isPageLoaded={isPageLoaded} />;
}

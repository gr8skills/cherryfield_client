import React from "react";
import { SWRConfig } from "swr";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { AppContextProvider } from "../contexts/app-context";
import { fetcher } from "../helpers/api";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <SWRConfig value={{ 
          fetcher: fetcher
       }}>
        <Component {...pageProps} />
      </SWRConfig>
    </AppContextProvider>
  );
}

export default MyApp;

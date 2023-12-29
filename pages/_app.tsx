import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "@/styles/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global styles={globalStyles} />
    </>
  );
}

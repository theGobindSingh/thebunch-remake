import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "@/styles/global";
import Footer from "@modules/footer";
import Header from "@modules/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Global styles={[globalStyles]} />
      <Footer />
    </>
  );
}

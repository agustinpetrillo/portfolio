import "../styles/globals.css";
import Layout from "../layout/layout";
import { StrictMode } from "react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StrictMode>
  );
}

export default MyApp;

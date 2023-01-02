import "../styles/globals.css";
import Layout from "../layout/layout";
import { StrictMode } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StrictMode>
  );
}

export default MyApp;

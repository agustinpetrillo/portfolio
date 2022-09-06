import '../styles/globals.css'
import Layout from "../layout/layout";
import { StrictMode } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StrictMode>
  );
}

export default MyApp

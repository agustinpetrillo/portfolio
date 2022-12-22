import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const FifthSection = dynamic(() => import("../components/FifthSection"));
import FirstSection from "../components/FirstSection";
const FourthSection = dynamic(() => import("../components/FourthSection"));
const SecondSection = dynamic(() => import("../components/SecondSection"));
const ThirdSection = dynamic(() => import("../components/ThirdSection"));
import es from "../translations/index/es.json";
import en from "../translations/index/en.json";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;
  return (
    <div>
      <Head>
        <title>{translate.title}</title>
        <meta name="description" content="descripcion de tu pagina" />
        <meta name="keywords" content="keywords" />
        <link rel="icon" href="/assets/logo-nav.png" />
      </Head>

      <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </div>
    </div>
  );
};

export default Home;

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
import SpaceBackground from "../components/SpaceBackground";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;
  return (
    <div>
      <Head>
        <title>{translate.title}</title>
        <meta
          name="description"
          content="I am Agustin Petrillo, a Front-End Developer. I started programming in Java back in 2021 and since then I have been specializing in the area of web development. At this time, my main goal is to continue studying and expanding my knowledge, as well as to obtain new job experiences that allow me to apply my skills in the most efficient manner possible, always putting the experience of the user first."
        />
        <meta name="keywords" content="keywords" />
        <link rel="icon" href="/assets/logo-nav.png" />
      </Head>

      {/* <div className="dark:bg-gradient-to-br from-gray-800 to-black"> */}
      <div className="dark:bg-dark-background/50">
        <SpaceBackground />
        <FirstSection />
        {/* <SecondSection /> */}
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </div>
    </div>
  );
};

export default Home;

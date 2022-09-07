import Head from 'next/head'
import { useRouter } from 'next/router';
import FifthSection from '../components/FifthSection';
import FirstSection from "../components/FirstSection";
import FourthSection from '../components/FourthSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import es from '../translations/index/es';
import en from '../translations/index/en';

export default function Home() {
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
        {/* <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection /> */}
        <FifthSection />
      </div>
    </div>
  );
}

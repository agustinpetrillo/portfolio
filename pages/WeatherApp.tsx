import Image from "next/image";
import Background from "../components/Background";
import Container from "../components/Container";
import weatherApp from "../public/assets/projects/weather-app.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import es from "../translations/weather-app/es.json";
import en from "../translations/weather-app/en.json";
import { useRouter } from "next/router";
import { useEffect } from "react";

const WeatherApp = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === "en" ? en : es;
  useEffect(() => {
    document.title = translate.title;
  }, []);
  return (
    <Background className="min-h-0">
      <div className="w-full h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/75">
          <Image
            src={weatherApp}
            alt="/"
            layout="fill"
            objectFit="cover"
            className="absolute -z-10"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 px-6">
            <h2 className="py-2">{translate.title}</h2>
            <h3>NextJS / TailwindCSS</h3>
          </div>
        </div>
      </div>
      <Container className="grid min-h-0 gap-8 px-8 py-12 text-center md:grid-cols-5 md:text-start lg:px-0">
        <div className="col-span-4">
          <p className="uppercase text-[#5651e5] pb-2">{translate.first}</p>
          <h2 className="pb-4">{translate.second}</h2>
          <p>{translate.description}</p>
          <div className="py-5 md:py-3">
            <a
              href="https://github.com/agustinpetrillo/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="py-2 mt-4 mr-8 duration-300 ease-in-out px-7 hover:scale-110">
                {translate.code}
              </button>
            </a>
            <a
              href="https://weather-app-seven-green.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="py-2 mt-4 duration-300 ease-in-out px-7 hover:scale-110">
                Demo
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 px-2 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div>
            <p className="pb-2 font-bold tracking-tight text-center">
              {translate.tecnologies}
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 tracking-tight text-gray-600">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="flex items-center py-2 tracking-tight text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="flex items-center py-2 tracking-tight text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="flex items-center py-2 tracking-tight text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Weather API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <div className="pt-10">
            <p className="flex items-center justify-center w-24 py-3 text-white duration-200 ease-in-out bg-gray-900 cursor-pointer rounded-2xl hover:scale-105">
              {translate.back}
            </p>
          </div>
        </Link>
      </Container>
    </Background>
  );
};

export default WeatherApp;

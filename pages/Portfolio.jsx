import Image from "next/image";
import Background from "../components/Background";
import Container from "../components/Container";
import focusAgency from "../public/assets/projects/portfolio.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import es from "../translations/portfolio/es";
import en from "../translations/portfolio/en";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Portfolio = () => {
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
            src={focusAgency}
            alt="/"
            layout="fill"
            objectFit="cover"
            className="absolute -z-10"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 px-6">
            <h2 className="py-2">{translate.title}</h2>
            <h3>ReactJS / TailwindCSS</h3>
          </div>
        </div>
      </div>
      <Container className="grid md:grid-cols-5 gap-8 py-12 text-center md:text-start px-8 lg:px-0 min-h-0">
        <div className="col-span-4">
          <p className="uppercase text-[#5651e5] pb-2">{translate.first}</p>
          <h2 className="pb-4">{translate.second}</h2>
          <p>{translate.description}</p>
          <div className="py-5 md:py-3">
            <a
              href="https://github.com/agustinpetrillo/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-7 py-2 mt-4 mr-8 hover:scale-110 ease-in-out duration-300">
                {translate.code}
              </button>
            </a>
            <a
              href="https://portfolio-cyan-one-43.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-7 py-2 mt-4 hover:scale-110 ease-in-out duration-300">
                Demo
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center px-2">
          <div>
            <p className="text-center font-bold pb-2 tracking-tight">
              {translate.tecnologies}
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center tracking-tight">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center tracking-tight">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center tracking-tight">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center tracking-tight">
                <RiRadioButtonFill className="pr-1" /> AOS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <div className="pt-10">
            <p className="cursor-pointer py-3 rounded-2xl bg-gray-900 text-white flex items-center justify-center w-24 hover:scale-105 ease-in-out duration-200">
              {translate.back}
            </p>
          </div>
        </Link>
      </Container>
    </Background>
  );
};

export default Portfolio;
